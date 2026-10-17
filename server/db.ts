import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';
import fs from 'node:fs';

const dataDir = path.resolve(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'apex_chronicle.db');
export const db = new DatabaseSync(dbPath);

// Enable WAL mode and foreign keys for high performance and integrity
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
`);

export function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT,
      name TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin', -- 'superadmin' | 'admin' | 'editor'
      is_initial_admin INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS authors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT,
      bio TEXT,
      avatar_url TEXT,
      role_title TEXT DEFAULT 'Staff Writer',
      twitter TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      image_url TEXT,
      sort_order INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS tags (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      featured_image TEXT,
      featured_image_alt TEXT,
      image_caption TEXT,
      author_id TEXT REFERENCES authors(id) ON DELETE SET NULL,
      category_id TEXT REFERENCES categories(id) ON DELETE SET NULL,
      status TEXT NOT NULL DEFAULT 'draft', -- 'draft' | 'scheduled' | 'published' | 'archived'
      is_featured INTEGER NOT NULL DEFAULT 0,
      published_at TEXT,
      scheduled_for TEXT,
      seo_title TEXT,
      seo_description TEXT,
      canonical_url TEXT,
      social_image TEXT,
      views_count INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS article_tags (
      article_id TEXT NOT NULL REFERENCES articles(id) ON DELETE CASCADE,
      tag_id TEXT NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
      PRIMARY KEY (article_id, tag_id)
    );

    CREATE TABLE IF NOT EXISTS media (
      id TEXT PRIMARY KEY,
      filename TEXT NOT NULL,
      original_name TEXT NOT NULL,
      mime_type TEXT NOT NULL,
      file_size INTEGER NOT NULL,
      url TEXT NOT NULL,
      alt_text TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      subscribed_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS site_settings (
      id TEXT PRIMARY KEY,
      site_name TEXT NOT NULL,
      site_description TEXT NOT NULL,
      logo_url TEXT,
      favicon_url TEXT,
      site_url TEXT NOT NULL,
      default_seo_title TEXT,
      default_seo_description TEXT,
      social_facebook TEXT,
      social_twitter TEXT,
      social_instagram TEXT,
      social_linkedin TEXT,
      social_youtube TEXT,
      default_share_image TEXT,
      footer_copyright TEXT,
      contact_email TEXT,
      analytics_id TEXT,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS advertisement_slots (
      id TEXT PRIMARY KEY,
      slot_key TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      is_enabled INTEGER NOT NULL DEFAULT 1,
      ad_html TEXT,
      label TEXT DEFAULT 'Advertisement',
      display_target TEXT NOT NULL DEFAULT 'all', -- 'all' | 'desktop' | 'mobile'
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      is_read INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS website_visits (
      id TEXT PRIMARY KEY,
      visitor_id TEXT NOT NULL,
      session_id TEXT NOT NULL,
      page_path TEXT NOT NULL,
      page_title TEXT,
      referrer TEXT,
      traffic_source TEXT NOT NULL,
      device_type TEXT NOT NULL, -- 'mobile' | 'tablet' | 'desktop'
      browser TEXT,
      os TEXT,
      user_type TEXT NOT NULL,   -- 'anonymous' | 'registered' | 'subscriber' | 'admin'
      user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
      user_identifier TEXT,     -- safe display label, e.g. 'Reader #3492' or email
      is_new_visitor INTEGER NOT NULL DEFAULT 1,
      duration_seconds INTEGER DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_articles_status_published ON articles(status, published_at);
    CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
    CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category_id);
    CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
    CREATE INDEX IF NOT EXISTS idx_tags_slug ON tags(slug);
    CREATE INDEX IF NOT EXISTS idx_visits_created_at ON website_visits(created_at);
    CREATE INDEX IF NOT EXISTS idx_visits_visitor_id ON website_visits(visitor_id);
    CREATE INDEX IF NOT EXISTS idx_visits_traffic_source ON website_visits(traffic_source);
    CREATE INDEX IF NOT EXISTS idx_visits_page_path ON website_visits(page_path);
    CREATE INDEX IF NOT EXISTS idx_visits_user_type ON website_visits(user_type);
  `);

  seedInitialData();
}

function seedInitialData() {
  // 1. Ensure Initial Administrator exists
  const initialAdminEmail = 'myall5148@gmail.com';
  const existingAdmin = db.prepare('SELECT * FROM users WHERE email = ?').get(initialAdminEmail) as any;
  if (!existingAdmin) {
    db.prepare(`
      INSERT INTO users (id, email, password_hash, name, role, is_initial_admin, created_at, updated_at)
      VALUES (?, ?, NULL, ?, 'superadmin', 1, datetime('now'), datetime('now'))
    `).run('usr_superadmin_01', initialAdminEmail, 'Primary Administrator');
    console.log(`[Database] Initial administrator registered: ${initialAdminEmail} (Setup required on first login)`);
  }

  // 2. Default Site Settings
  const existingSettings = db.prepare("SELECT id FROM site_settings WHERE id = 'default'").get() as any;
  if (!existingSettings) {
    db.prepare(`
      INSERT INTO site_settings (
        id, site_name, site_description, site_url,
        default_seo_title, default_seo_description,
        social_twitter, social_linkedin, social_facebook, social_instagram, social_youtube,
        footer_copyright, contact_email
      ) VALUES (
        'default',
        'Globevibes',
        'The premier destination for music news, entertainment, trending stories, celebrity buzz, and African entertainment culture.',
        'https://globevibes.com',
        'Globevibes – Music, Entertainment, African Beats & Trending News',
        'Discover the latest music releases, Afrobeats superstars, Nollywood cinema, celebrity exclusives, and viral trending entertainment on Globevibes.',
        'https://x.com/globevibes',
        'https://linkedin.com/company/globevibes',
        'https://facebook.com/globevibes',
        'https://instagram.com/globevibes',
        'https://youtube.com/@globevibes',
        '© 2026 Globevibes Media Group. All rights reserved.',
        'editorial@globevibes.com'
      )
    `).run();
  }

  // 3. Default Monetag Advertisement Slots
  const defaultAdSlots = [
    { key: 'header_banner', name: 'Header Banner (Monetag Leaderboard / Push)', desc: 'Clean responsive banner container directly beneath top navigation' },
    { key: 'homepage_middle', name: 'Homepage Mid-Feed (Monetag In-Feed Native)', desc: 'Embedded between featured stories and category grids' },
    { key: 'article_middle', name: 'In-Article Inline Placement (Monetag Native In-Article)', desc: 'Embedded midway through editorial article narrative' },
    { key: 'article_bottom', name: 'Article Post-Body Placement (Monetag Bottom Banner)', desc: 'Positioned directly above comments and related articles' },
    { key: 'sidebar', name: 'Universal Sidebar Unit (Monetag 300x250 / Multi-tag)', desc: 'Sticky desktop sidebar box (300x250 or responsive)' }
  ];

  const checkAd = db.prepare('SELECT id FROM advertisement_slots WHERE slot_key = ?');
  const insertAd = db.prepare(`
    INSERT INTO advertisement_slots (id, slot_key, name, description, is_enabled, ad_html, label, display_target)
    VALUES (?, ?, ?, ?, 1, '', 'Advertisement', 'all')
  `);

  for (const ad of defaultAdSlots) {
    if (!checkAd.get(ad.key)) {
      insertAd.run(`ad_${ad.key}`, ad.key, ad.name, ad.desc);
    }
  }

  // 4. Default Authors
  const initialAuthors = [
    {
      id: 'author_amara_nwosu',
      name: 'Amara Nwosu',
      email: 'a.nwosu@globevibes.com',
      bio: 'Chief African Music & Culture Editor at Globevibes. Covering Afrobeats, Nollywood cinema, and youth culture.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Chief African Music & Culture Editor',
      twitter: 'amaranwosu_vibes'
    },
    {
      id: 'author_jordan_cole',
      name: 'Jordan Cole',
      email: 'j.cole@globevibes.com',
      bio: 'Senior Music Editor at Globevibes covering international hip-hop, contemporary soul, global festivals, and vinyl.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      role: 'Senior Music Editor',
      twitter: 'jordancole_music'
    },
    {
      id: 'author_tariq_vance',
      name: 'Tariq Vance',
      email: 't.vance@globevibes.com',
      bio: 'Pop Culture & Media Columnist tracking viral trends, award season predictions, and streaming sensations.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      role: 'Pop Culture & Media Columnist',
      twitter: 'tariqvance'
    }
  ];

  const checkAuthor = db.prepare('SELECT id FROM authors WHERE id = ?');
  const insertAuthor = db.prepare(`
    INSERT INTO authors (id, name, email, bio, avatar_url, role_title, twitter)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const auth of initialAuthors) {
    if (!checkAuthor.get(auth.id)) {
      insertAuthor.run(auth.id, auth.name, auth.email, auth.bio, auth.avatar, auth.role, auth.twitter);
    }
  }

  // 5. Music & Entertainment Categories
  const initialCategories = [
    { id: 'cat_music', name: 'Music', slug: 'music', desc: 'New releases, album breakdowns, concert tours, global charts, and artist exclusives.', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80', order: 1 },
    { id: 'cat_entertainment', name: 'Entertainment', slug: 'entertainment', desc: 'Movies, television series, streaming blockbusters, award show galas, and red carpet highlights.', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80', order: 2 },
    { id: 'cat_latest_news', name: 'Latest News', slug: 'latest-news', desc: 'Up-to-the-minute entertainment dispatches, breaking tour announcements, and live industry reporting.', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80', order: 3 },
    { id: 'cat_trending', name: 'Trending', slug: 'trending', desc: 'Viral music moments, chart-topping anthems, global streaming sensations, and social trends.', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80', order: 4 },
    { id: 'cat_features', name: 'Features', slug: 'features', desc: 'Deep artist profiles, landmark album retrospectives, vinyl culture, and behind-the-studio narratives.', img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80', order: 5 },
    { id: 'cat_celebrity_news', name: 'Celebrity News', slug: 'celebrity-news', desc: 'Exclusive celebrity interviews, star spotlights, VIP red carpets, and behind-the-scenes access.', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', order: 6 },
    { id: 'cat_african_entertainment', name: 'African Entertainment', slug: 'african-entertainment', desc: 'Spotlighting Afrobeats global takeover, Nigerian music royalty, Nollywood cinema, and Pan-African creators.', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', order: 7 }
  ];

  const checkCat = db.prepare('SELECT id FROM categories WHERE slug = ?');
  const insertCat = db.prepare(`
    INSERT INTO categories (id, name, slug, description, image_url, sort_order)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  for (const cat of initialCategories) {
    if (!checkCat.get(cat.slug)) {
      insertCat.run(cat.id, cat.name, cat.slug, cat.desc, cat.img, cat.order);
    }
  }

  // 6. Music & Entertainment Tags
  const initialTags = [
    { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
    { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' },
    { id: 'tag_nollywood', name: 'Nollywood', slug: 'nollywood' },
    { id: 'tag_grammys', name: 'Grammys', slug: 'grammys' },
    { id: 'tag_vinyl', name: 'Vinyl', slug: 'vinyl' },
    { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours' },
    { id: 'tag_streaming', name: 'Streaming', slug: 'streaming' },
    { id: 'tag_interviews', name: 'Interviews', slug: 'interviews' },
    { id: 'tag_rnb', name: 'R&B', slug: 'r-and-b' },
    { id: 'tag_pop', name: 'Pop', slug: 'pop' }
  ];

  const checkTag = db.prepare('SELECT id FROM tags WHERE slug = ?');
  const insertTag = db.prepare('INSERT INTO tags (id, name, slug) VALUES (?, ?, ?)');
  for (const tag of initialTags) {
    if (!checkTag.get(tag.slug)) {
      insertTag.run(tag.id, tag.name, tag.slug);
    }
  }

  // 7. Seed sample music & entertainment articles if needed
  const checkSpecificArt = db.prepare('SELECT id FROM articles WHERE id = ?');
  const insertArticle = db.prepare(`
    INSERT INTO articles (
      id, title, slug, excerpt, content, featured_image, featured_image_alt, image_caption,
      author_id, category_id, status, is_featured, published_at, seo_title, seo_description, views_count
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, datetime('now', '-2 hours'), ?, ?, ?)
  `);
  const insertArtTag = db.prepare('INSERT OR IGNORE INTO article_tags (article_id, tag_id) VALUES (?, ?)');

  const entertainmentArticles = [
    {
      id: 'art_afrobeats_global',
      title: 'Afrobeats To The World: How Asake, Burna Boy, and Tems Are Selling Out Global Stadiums',
      slug: 'afrobeats-to-the-world-asake-burna-boy-tems',
      excerpt: 'From Lagos street anthems to Madison Square Garden and London’s O2 Arena, African soundscapes have reshaped global popular music with infectious percussion and undeniable energy.',
      content: `<h2>The Global Soundscape Has Shifted East and South</h2><p>There was a time when Western radio programmers treated African music as an exotic curio, quarantined into niche 'World Music' categories. Today, the conversation has inverted entirely. In London, Paris, New York, and Tokyo, the defining tempo of contemporary nightlife is the syncopated, log-drum heavy swing of Afrobeats.</p><p>Leading this cultural vanguard is an eclectic constellation of Nigerian superstars. Burna Boy’s stadium tours regularly draw over 60,000 screaming fans per night. Asake has transformed high-energy Fuji-infused street-pop into a global stadium phenomenon, selling out the Barclays Center with dizzying production.</p><blockquote>"We are not bringing African music to the world; the world is finally opening its ears to the rhythms that have sustained humanity since the beginning of sound." – Burna Boy</blockquote>`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crowd dancing at a vibrant Afrobeats concert under stage lights',
      caption: 'Vibrant stage lights illuminating thousands of cheering fans at a sold-out stadium tour.',
      author_id: 'author_amara_nwosu',
      category_id: 'cat_african_entertainment',
      is_featured: 1,
      tags: ['tag_afrobeats', 'tag_concerts']
    },
    {
      id: 'art_kendrick_sza',
      title: 'Kendrick Lamar & SZA Lead Historic Festival Lineups: What Fans Can Expect This Summer',
      slug: 'kendrick-lamar-sza-lead-historic-festival-lineups',
      excerpt: 'As summer festival season approaches, headlining sets from hip-hop’s sharpest lyricist and R&B’s most vulnerable storyteller promise unforgettable stage productions.',
      content: `<h2>The Defining Headliners of Modern Live Music</h2><p>Major festival promoters across the world have unveiled their marquee rosters, and two names dominate the summit: Kendrick Lamar and SZA. Their joint presence atop major festival posters represents the absolute peak of contemporary American music—where commercial juggernaut status meets peerless artistic integrity.</p>`,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      alt: 'Concert stage with massive festival lighting rigs and pyrotechnics',
      caption: 'Massive stage lighting rigs illuminating a packed music festival arena.',
      author_id: 'author_jordan_cole',
      category_id: 'cat_music',
      is_featured: 1,
      tags: ['tag_hiphop', 'tag_rnb']
    },
    {
      id: 'art_nollywood_streaming',
      title: 'Nollywood’s Golden Era: High-Budget Epic Films Shatter International Box Office and Streaming Records',
      slug: 'nollywood-golden-era-shatters-streaming-records',
      excerpt: 'Nigerian filmmakers are leveraging world-class cinematography, cultural folklore, and multi-million dollar budgets to capture worldwide audiences on Netflix, Prime Video, and global theaters.',
      content: `<h2>The Rise of Nigerian Prestige Cinema</h2><p>The era of low-budget productions that launched Nollywood into the world’s second-largest film industry by volume has evolved into an era of majestic cinematic craft. Modern Nigerian films are competing on equal visual footing at international film festivals.</p>`,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cinema theater projector casting cinematic light',
      caption: 'Prestige cinema audiences enjoying high-budget African film premieres.',
      author_id: 'author_amara_nwosu',
      category_id: 'cat_entertainment',
      is_featured: 1,
      tags: ['tag_nollywood', 'tag_streaming']
    },
    {
      id: 'art_rema_billion_streams',
      title: 'Rema’s Ultra-Modern Pop Blueprint: The Making of an International Phenomenon',
      slug: 'remas-ultra-modern-pop-blueprint',
      excerpt: 'Surpassing multi-billion streams and reinventing Afrorave for a new generation, Rema breaks down how unconventional melodies and Indian classical scales influenced his global smash hits.',
      content: `<h2>From Benin City to Global Dominance</h2><p>When Rema emerged with his self-titled EP, his signature bat logo and futuristic trap-infused melodies signaled a clean break from conventional Afrobeats orthodoxy. Fast forward to today, and his crossover anthem 'Calm Down' has become one of the most streamed songs in modern music history.</p>`,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      alt: 'Concert stage with laser lighting and artist silhouette',
      caption: 'Dynamic stage lasers illuminating high-energy live performance.',
      author_id: 'author_amara_nwosu',
      category_id: 'cat_trending',
      is_featured: 0,
      tags: ['tag_afrobeats', 'tag_streaming']
    }
  ];

  for (const art of entertainmentArticles) {
    if (!checkSpecificArt.get(art.id)) {
      insertArticle.run(
        art.id,
        art.title,
        art.slug,
        art.excerpt,
        art.content,
        art.image,
        art.alt,
        art.caption,
        art.author_id,
        art.category_id,
        art.is_featured,
        `${art.title} | Globevibes`,
        art.excerpt,
        1850
      );
      for (const t of art.tags) {
        insertArtTag.run(art.id, t);
      }
    }
  }

  // 8. Seed sample website visitors across all channels if empty
  const visitCount = db.prepare('SELECT COUNT(*) as count FROM website_visits').get() as any;
  if (!visitCount || visitCount.count === 0) {
    const insertVisit = db.prepare(`
      INSERT INTO website_visits (
        id, visitor_id, session_id, page_path, page_title, referrer, traffic_source,
        device_type, browser, os, user_type, user_id, user_identifier, is_new_visitor, duration_seconds, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const sources = [
      { name: 'Google Search', ref: 'https://www.google.com/' },
      { name: 'Direct', ref: '' },
      { name: 'Facebook', ref: 'https://m.facebook.com/' },
      { name: 'Instagram', ref: 'https://instagram.com/' },
      { name: 'TikTok', ref: 'https://www.tiktok.com/' },
      { name: 'Twitter / X', ref: 'https://t.co/' }
    ];

    const pages = [
      { path: '/', title: 'Globevibes – Digital News & Editorial Publication' },
      { path: '/article/afrobeats-to-the-world-asake-burna-boy-tems', title: 'Afrobeats To The World: How Asake, Burna Boy, and Tems Are Selling Out Global Stadiums' },
      { path: '/article/kendrick-lamar-sza-lead-historic-festival-lineups', title: 'Kendrick Lamar & SZA Lead Historic Festival Lineups' },
      { path: '/article/burna-boy-announces-epic-lagos-stadium-residency', title: 'Burna Boy Announces Epic Lagos Residency' },
      { path: '/category/music', title: 'Music – Globevibes' },
      { path: '/category/african-entertainment', title: 'African Entertainment – Globevibes' },
      { path: '/category/trending', title: 'Trending – Globevibes' },
      { path: '/articles', title: 'All Articles – Globevibes Archive' }
    ];

    const devices = [
      { type: 'mobile', browser: 'Chrome Mobile', os: 'Android' },
      { type: 'mobile', browser: 'Mobile Safari', os: 'iOS' },
      { type: 'desktop', browser: 'Chrome', os: 'Windows' },
      { type: 'desktop', browser: 'Safari', os: 'macOS' },
      { type: 'tablet', browser: 'iPad Safari', os: 'iOS' }
    ];

    const userTypes = ['anonymous', 'anonymous', 'anonymous', 'anonymous', 'subscriber', 'registered'];

    // Generate visits over past 30 days
    const now = Date.now();
    for (let i = 0; i < 180; i++) {
      const daysAgo = Math.floor(Math.pow(Math.random(), 1.8) * 30); // weighted towards recent days
      const hoursAgo = Math.floor(Math.random() * 24);
      const minutesAgo = Math.floor(Math.random() * 60);
      const timestamp = new Date(now - (daysAgo * 86400000 + hoursAgo * 3600000 + minutesAgo * 60000)).toISOString().replace('T', ' ').slice(0, 19);

      const src = sources[Math.floor(Math.random() * sources.length)];
      const pg = pages[Math.floor(Math.random() * pages.length)];
      const dev = devices[Math.floor(Math.random() * devices.length)];
      const uType = userTypes[Math.floor(Math.random() * userTypes.length)];
      const visitorNum = (1000 + Math.floor(Math.random() * 85)).toString();
      const visitorId = `gv_vis_${visitorNum}`;
      const sessionId = `gv_sess_${Math.random().toString(36).substring(2, 9)}`;
      const isNew = Math.random() > 0.35 ? 1 : 0;
      const duration = 15 + Math.floor(Math.random() * 320);

      insertVisit.run(
        `vis_${Date.now()}_${i}`,
        visitorId,
        sessionId,
        pg.path,
        pg.title,
        src.ref,
        src.name,
        dev.type,
        dev.browser,
        dev.os,
        uType,
        uType === 'registered' ? 'usr_reader_sample' : null,
        uType === 'subscriber' ? `Subscriber (sub_${visitorNum.slice(-2)}@gmail.com)` : (uType === 'registered' ? 'Registered Member' : `Anonymous Visitor #${visitorNum}`),
        isNew,
        duration,
        timestamp
      );
    }
    console.log('[Database] Seeded initial visitor analytics data (180 records across past 30 days).');
  }

  console.log('[Database] Globevibes music & entertainment seed initialized.');
}

