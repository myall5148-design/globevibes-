import { Article, Category, SiteSettings, AdSlot, Tag } from '../types';

export const FALLBACK_SETTINGS: SiteSettings = {
  id: 'default',
  site_name: 'Globevibes',
  site_description: 'The premier destination for music news, entertainment, trending stories, celebrity buzz, and African entertainment culture.',
  site_url: 'https://globevibes.com',
  default_seo_title: 'Globevibes – Music, Entertainment, African Beats & Trending News',
  default_seo_description: 'Discover the latest music releases, Afrobeats superstars, Nollywood cinema, celebrity exclusives, and viral trending entertainment on Globevibes.',
  social_twitter: 'https://x.com/globevibes',
  social_linkedin: 'https://linkedin.com/company/globevibes',
  social_facebook: 'https://facebook.com/globevibes',
  social_instagram: 'https://instagram.com/globevibes',
  social_youtube: 'https://youtube.com/@globevibes',
  footer_copyright: '© 2026 Globevibes Media Group. All rights reserved.',
  contact_email: 'editorial@globevibes.com'
};

export const FALLBACK_CATEGORIES: Category[] = [
  {
    id: 'cat_music',
    name: 'Music',
    slug: 'music',
    description: 'New releases, album breakdowns, concert tours, global charts, and artist exclusives.',
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    sort_order: 1,
    article_count: 3
  },
  {
    id: 'cat_entertainment',
    name: 'Entertainment',
    slug: 'entertainment',
    description: 'Movies, television series, streaming blockbusters, award show galas, and red carpet highlights.',
    image_url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    sort_order: 2,
    article_count: 2
  },
  {
    id: 'cat_latest_news',
    name: 'Latest News',
    slug: 'latest-news',
    description: 'Up-to-the-minute entertainment dispatches, breaking tour announcements, and live industry reporting.',
    image_url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    sort_order: 3,
    article_count: 2
  },
  {
    id: 'cat_trending',
    name: 'Trending',
    slug: 'trending',
    description: 'Viral music moments, chart-topping anthems, global streaming sensations, and social trends.',
    image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    sort_order: 4,
    article_count: 2
  },
  {
    id: 'cat_features',
    name: 'Features',
    slug: 'features',
    description: 'Deep artist profiles, landmark album retrospectives, vinyl culture, and behind-the-studio narratives.',
    image_url: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80',
    sort_order: 5,
    article_count: 2
  },
  {
    id: 'cat_celebrity_news',
    name: 'Celebrity News',
    slug: 'celebrity-news',
    description: 'Exclusive celebrity interviews, star spotlights, VIP red carpets, and behind-the-scenes access.',
    image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    sort_order: 6,
    article_count: 2
  },
  {
    id: 'cat_african_entertainment',
    name: 'African Entertainment',
    slug: 'african-entertainment',
    description: 'Spotlighting Afrobeats global takeover, Nigerian music royalty, Nollywood cinema, and Pan-African creators.',
    image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    sort_order: 7,
    article_count: 3
  }
];

export const FALLBACK_TAGS: Tag[] = [
  { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats', article_count: 4 },
  { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop', article_count: 3 },
  { id: 'tag_nollywood', name: 'Nollywood', slug: 'nollywood', article_count: 2 },
  { id: 'tag_grammys', name: 'Grammys', slug: 'grammys', article_count: 2 },
  { id: 'tag_vinyl', name: 'Vinyl', slug: 'vinyl', article_count: 1 },
  { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours', article_count: 3 },
  { id: 'tag_streaming', name: 'Streaming', slug: 'streaming', article_count: 3 },
  { id: 'tag_interviews', name: 'Interviews', slug: 'interviews', article_count: 2 },
  { id: 'tag_rnb', name: 'R&B', slug: 'r-and-b', article_count: 2 },
  { id: 'tag_pop', name: 'Pop', slug: 'pop', article_count: 2 }
];

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: 'art_afrobeats_global',
    title: 'Afrobeats To The World: How Asake, Burna Boy, and Tems Are Selling Out Global Stadiums',
    slug: 'afrobeats-to-the-world-asake-burna-boy-tems',
    excerpt: 'From Lagos street anthems to Madison Square Garden and London’s O2 Arena, African soundscapes have reshaped global popular music with infectious percussion and undeniable energy.',
    content: `<h2>The Global Soundscape Has Shifted East and South</h2>
<p>There was a time when Western radio programmers treated African music as an exotic curio, quarantined into niche 'World Music' categories. Today, the conversation has inverted entirely. In London, Paris, New York, and Tokyo, the defining tempo of contemporary nightlife is the syncopated, log-drum heavy swing of Afrobeats.</p>

<p>Leading this cultural vanguard is an eclectic constellation of Nigerian superstars. Burna Boy’s stadium tours in the UK and North America regularly draw over 60,000 screaming fans per night. Asake has transformed high-energy Fuji-infused street-pop into a global stadium phenomenon, selling out the Barclays Center with dizzying production.</p>

<blockquote>"We are not bringing African music to the world; the world is finally opening its ears to the rhythms that have sustained humanity since the beginning of sound." – Burna Boy</blockquote>

<h3>The Sonic Alchemy: Amapiano Log Drums & Yoruba Melodies</h3>
<p>What makes contemporary Afrobeats universally magnetic is its layered production. Top Nigerian and Ghanaian producers weave warm acoustic guitars, lush Rhodes pianos, syncopated 808 sub-bass, and polyrhythmic percussion into infectious club anthems. The genre bridges party escapism with profound spiritual nostalgia.</p>

<p>When Grammy-winner Tems steps to the microphone, her ethereal alto transcends geography, landing her collaborations with Beyoncé, Drake, and global cinema soundtracks. Her songwriting combines intimate Nigerian storytelling with timeless soul balladry.</p>

<h3>What This Means for the Music Industry</h3>
<ul>
  <li>Independent African record labels like Mavin Records and YBNL are commanding billion-dollar global distribution partnerships.</li>
  <li>Streaming services in Latin America, Southeast Asia, and Europe report double-digit quarter-over-quarter surges in West African music consumption.</li>
  <li>Live music festival promoters now view Afrobeats headliners as mandatory ticket-selling titans alongside hip-hop and electronic acts.</li>
</ul>

<p>As summer festival schedules take shape across the globe, one truth is undeniable: Afrobeats is no longer a trend. It is the reigning heartbeat of 21st-century popular culture.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Crowd dancing at a vibrant Afrobeats concert under stage lights',
    image_caption: 'Vibrant stage lights illuminating thousands of cheering fans at a sold-out stadium tour.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy across Lagos, London, and New York.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_african_entertainment',
    category_name: 'African Entertainment',
    category_slug: 'african-entertainment',
    status: 'published',
    is_featured: 1,
    published_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    views_count: 4820,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours' }
    ],
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: 'art_kendrick_sza',
    title: 'Kendrick Lamar & SZA Lead Historic Festival Lineups: What Fans Can Expect This Summer',
    slug: 'kendrick-lamar-sza-lead-historic-festival-lineups',
    excerpt: 'As summer festival season approaches, headlining sets from hip-hop’s sharpest lyricist and R&B’s most vulnerable storyteller promise unforgettable stage productions.',
    content: `<h2>The Defining Headliners of Modern Live Music</h2>
<p>Major festival promoters across the world have unveiled their marquee rosters, and two names dominate the summit: Kendrick Lamar and SZA. Their joint presence atop major festival posters represents the absolute peak of contemporary American music—where commercial juggernaut status meets peerless artistic integrity.</p>

<p>Kendrick Lamar's recent live performances have set a gold standard for theatrical rap concerts. Pairing stark lighting design with full choreography, live marching bands, and sharp narrative pacing, Lamar treats festival fields like experimental black-box theaters.</p>

<blockquote>"Live performance is where music ceases to be recorded data and becomes communal communion."</blockquote>

<h3>SZA’s Oceanic Staging & Vocal Prowess</h3>
<p>On the opposite end of the sonic spectrum, SZA’s headlining run cements her status as the preeminent voice of modern R&B. Performing tracks from her record-setting albums against dramatic lighthouse props, suspended rowboats, and misty blue oceanic lighting, she creates an intimate stadium experience that leaves audiences singing every syllable in unison.</p>

<h3>What Festival Attendees Need to Know</h3>
<ul>
  <li>Expect surprise guest cameos and live reimagined arrangements of chart-topping hits.</li>
  <li>Festival organizers recommend arriving at main stages at least two hours ahead to secure sightlines.</li>
  <li>New merchandise drops and limited vinyl colorways will be sold exclusively at festival merch superstores.</li>
</ul>`,
    featured_image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Concert stage with massive festival lighting rigs and pyrotechnics',
    image_caption: 'Massive stage lighting rigs illuminating a packed music festival arena.',
    author_id: 'author_jordan_cole',
    author_name: 'Jordan Cole',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    author_role: 'Senior Music Editor',
    author_bio: 'Jordan Cole is a music journalist covering hip-hop, contemporary soul, and festival culture worldwide.',
    author_twitter: 'jordancole_music',
    category_id: 'cat_music',
    category_name: 'Music',
    category_slug: 'music',
    status: 'published',
    is_featured: 1,
    published_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    views_count: 3640,
    tags: [
      { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop' },
      { id: 'tag_rnb', name: 'R&B', slug: 'r-and-b' },
      { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours' }
    ],
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: 'art_nollywood_streaming',
    title: 'Nollywood’s Golden Era: High-Budget Epic Films Shatter International Box Office and Streaming Records',
    slug: 'nollywood-golden-era-shatters-streaming-records',
    excerpt: 'Nigerian filmmakers are leveraging world-class cinematography, cultural folklore, and multi-million dollar budgets to capture worldwide audiences on Netflix, Prime Video, and global theaters.',
    content: `<h2>The Rise of Nigerian Prestige Cinema</h2>
<p>The era of low-budget VHS productions that launched Nollywood into the world’s second-largest film industry by volume has evolved into an era of majestic cinematic craft. Modern Nigerian films are competing on equal visual footing at international film festivals in Cannes, Toronto, and Sundance.</p>

<p>Backed by institutional financing and major international streaming deals, visionary directors are diving deep into African historical mythology, royal court intrigue, and gritty modern urban thrillers. The box office receipts both in Nigeria and across the diaspora are staggering.</p>

<blockquote>"We are no longer making cinema that asks for permission to be heard. We are making cinema that demands to be experienced on the biggest screen possible." – Femi Adebayo</blockquote>

<h3>Why Global Audiences Are Hooked</h3>
<p>Audiences from South America to the United Kingdom are drawn to the rich, uncompromised storytelling: vibrant traditional costuming, authentic Yoruba and Igbo dialogue with crisp English subtitles, visceral martial arts choreography, and stories rooted in profound moral and spiritual weight.</p>

<h3>Upcoming Nollywood Titles to Watch</h3>
<ul>
  <li>Period war epics featuring hundreds of costumed extras and drone-assisted practical cinematography.</li>
  <li>Lagos-centered neo-noir detective stories exploring the high-stakes world of modern luxury and crime.</li>
  <li>Animated family features celebrating folklore heroes with voice casts comprising Africa's premier music superstars.</li>
</ul>`,
    featured_image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Cinema theater projector casting cinematic light',
    image_caption: 'Prestige cinema audiences enjoying high-budget African film premieres.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy across Lagos, London, and New York.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_entertainment',
    category_name: 'Entertainment',
    category_slug: 'entertainment',
    status: 'published',
    is_featured: 1,
    published_at: new Date(Date.now() - 3600000 * 8).toISOString(),
    views_count: 2950,
    tags: [
      { id: 'tag_nollywood', name: 'Nollywood', slug: 'nollywood' },
      { id: 'tag_streaming', name: 'Streaming', slug: 'streaming' }
    ],
    created_at: new Date(Date.now() - 86400000 * 4).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 8).toISOString()
  },
  {
    id: 'art_wizkid_morayo',
    title: 'Inside Wizkid’s New Sonic Era: How Africa’s Starboy Balances Global Stardom with Raw Lagos Roots',
    slug: 'inside-wizkids-new-sonic-era',
    excerpt: 'A deep dive into Wizkid’s sophisticated new sound palette, blending jazz-infused saxophone melodies with sensual amapiano grooves and soulful lyrics.',
    content: `<h2>The Maturation of Ayodeji Ibrahim Balogun</h2>
<p>From the infectious bounce of his early breakout hit 'Holla At Your Boy' to the Grammy-nominated masterpiece 'Made In Lagos', Wizkid has traversed musical milestones that few artists in any continent can claim. His latest body of work reveals a musician in total control of his atmospheric craft.</p>

<p>Rather than chasing fleeting high-BPM radio formulas, Wizkid slows the tempo down. He creates intoxicating late-night mood music where live saxophones, understated basslines, and his signature silky vocals float effortlessly through the speakers.</p>

<h3>Collaborations and Artistic Sovereignty</h3>
<p>The album brings together an elite international circle of collaborators while keeping African music at the center of the aesthetic universe. Sessions recorded between London, Ghana, and Los Angeles feature live horn sections and organic percussion that reward high-fidelity headphone listening.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Vintage microphone and studio headphones in recording booth',
    image_caption: 'Intimate studio microphone capturing soulful vocal sessions.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy across Lagos, London, and New York.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_african_entertainment',
    category_name: 'African Entertainment',
    category_slug: 'african-entertainment',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 12).toISOString(),
    views_count: 5120,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_interviews', name: 'Interviews', slug: 'interviews' }
    ],
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 12).toISOString()
  },
  {
    id: 'art_vinyl_revival',
    title: 'Behind The Groove: The Vinyl Resurgence and Why Gen Z Is Falling in Love with Analog Audio',
    slug: 'vinyl-resurgence-gen-z-analog-audio',
    excerpt: 'In an era of fleeting streaming algorithms, physical records have achieved record-breaking sales. We explore the tactile joy of album artwork, turntable culture, and colored pressings.',
    content: `<h2>The Tactile Resistance to Algorithmic Fatigue</h2>
<p>For more than two decades, music was steadily dematerialized. Files became streams; streams became background noise curated by algorithmic recommendations. Yet, in one of the most stunning market reversals of the 21st century, physical vinyl record sales have outpaced CD sales for the fourth consecutive year.</p>

<p>Crucially, the demographic driving this boom isn't aging baby boomers reliving classic rock memories—it's listeners under 30 who grew up with Spotify in their pockets. Young music fans crave something tangible: gatefold sleeves, lyric inserts, colorful splatter vinyl pressings, and the deliberate ritual of placing a needle into a spinning groove.</p>

<h3>The Turntable as an Interior Centerpiece</h3>
<p>Modern audio manufacturers have responded with sleek, high-performing turntables that pair vintage warmth with modern Bluetooth connectivity and audiophile phono cartridges. Listening to a complete album from track 1 to 10 has once again become a celebrated artistic experience.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Turntable playing a spinning vinyl record in ambient warm lighting',
    image_caption: 'Turntable needle tracing analog vinyl grooves under warm ambient studio light.',
    author_id: 'author_tariq_vance',
    author_name: 'Tariq Vance',
    author_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    author_role: 'Pop Culture & Media Columnist',
    author_bio: 'Tariq Vance writes on vinyl culture, audio hardware, and cultural trends shaping entertainment.',
    author_twitter: 'tariqvance',
    category_id: 'cat_features',
    category_name: 'Features',
    category_slug: 'features',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 18).toISOString(),
    views_count: 2280,
    tags: [
      { id: 'tag_vinyl', name: 'Vinyl', slug: 'vinyl' },
      { id: 'tag_interviews', name: 'Interviews', slug: 'interviews' }
    ],
    created_at: new Date(Date.now() - 86400000 * 6).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 18).toISOString()
  },
  {
    id: 'art_rema_billion_streams',
    title: 'Rema’s Ultra-Modern Pop Blueprint: The Making of an International Phenomenon',
    slug: 'remas-ultra-modern-pop-blueprint',
    excerpt: 'Surpassing multi-billion streams and reinventing Afrorave for a new generation, Rema breaks down how unconventional melodies and Indian classical scales influenced his global smash hits.',
    content: `<h2>From Benin City to Global Dominance</h2>
<p>When Rema emerged with his self-titled EP in 2019, his signature bat logo and futuristic trap-infused melodies signaled a clean break from conventional Afrobeats orthodoxy. Fast forward to today, and his crossover anthem 'Calm Down' has become one of the most streamed songs in modern music history.</p>

<p>Rema's genius lies in his fearless vocal elasticity: bending notes with Arabic, Bollywood, and indigenous Nigerian scales that lodge instantly into the subconscious of listeners across every continent.</p>

<blockquote>"I don't make music to follow formulas. I make music that reflects the digital world our generation actually lives in." – Rema</blockquote>

<h3>The Evolution of Afrorave</h3>
<p>In his thrilling live arena performances, Rema merges gothic aesthetics, anime iconography, and frenetic rave energy with West African polyrhythms. It is an exhilarating vision of African pop as an ultra-modern global force.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Concert stage with laser lighting and artist silhouette',
    image_caption: 'Dynamic stage lasers illuminating high-energy live performance.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy across Lagos, London, and New York.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_trending',
    category_name: 'Trending',
    category_slug: 'trending',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    views_count: 6310,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_streaming', name: 'Streaming', slug: 'streaming' }
    ],
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 24).toISOString()
  },
  {
    id: 'art_grammy_predictions',
    title: 'Grammy Watch: The Heavyweight Contenders Battling for Album of the Year',
    slug: 'grammy-watch-contenders-battling-album-of-the-year',
    excerpt: 'Our music critics analyze this year’s most commercially potent and critically lauded records, ranking their chances of taking home the music industry’s ultimate prize.',
    content: `<h2>The Most Competitive Grammy Season in Decades</h2>
<p>The Recording Academy's flagship category—Album of the Year—is shaping up to be an epic clash of titans, spanning country-pop crossovers, boundary-pushing hip-hop, and avant-garde art pop.</p>

<p>With voting members increasingly prioritizing cohesion, cultural zeitgeist, and organic musicianship over algorithmic pop formulas, our editorial board breaks down the frontrunners and dark-horse contenders.</p>

<h3>Key Frontrunners in Contention</h3>
<ul>
  <li><strong>The Genre-Bending Maverick:</strong> Masterfully fusing traditional roots instrumentation with stadium pop hooks.</li>
  <li><strong>The Introspective Singer-Songwriter:</strong> Unfiltered lyrical vulnerability that swept critical consensus and streaming charts.</li>
  <li><strong>The Global African Vanguard:</strong> Historic nominations celebrating the international commercial explosion of Afrobeats.</li>
</ul>`,
    featured_image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Grammy style golden awards and spotlight gala atmosphere',
    image_caption: 'Gala spotlights illuminating the anticipation of music’s biggest night.',
    author_id: 'author_jordan_cole',
    author_name: 'Jordan Cole',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    author_role: 'Senior Music Editor',
    author_bio: 'Jordan Cole is a music journalist covering hip-hop, contemporary soul, and festival culture worldwide.',
    author_twitter: 'jordancole_music',
    category_id: 'cat_celebrity_news',
    category_name: 'Celebrity News',
    category_slug: 'celebrity-news',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 30).toISOString(),
    views_count: 4190,
    tags: [
      { id: 'tag_grammys', name: 'Grammys', slug: 'grammys' },
      { id: 'tag_pop', name: 'Pop', slug: 'pop' }
    ],
    created_at: new Date(Date.now() - 86400000 * 8).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 30).toISOString()
  },
  {
    id: 'art_davido_timeless_arena',
    title: 'Davido Announces Massive 2026 World Tour: New Single, Special Guests, and Stadium Dates',
    slug: 'davido-announces-massive-world-tour',
    excerpt: 'Afrobeats royalty Davido reveals dates for his upcoming global tour across North America, Europe, and Africa, promising his biggest high-energy stage set yet.',
    content: `<h2>OBO Returns to the World Stage</h2>
<p>Few performers on Earth generate the infectious joy and pure euphoria of David Adeleke, known to millions across the globe as Davido. Following a string of historic sold-out shows at the O2 Arena and State Farm Arena, the Nigerian superstar has officially revealed routing for his upcoming 2026 worldwide stadium run.</p>

<p>Kicking off in late spring, the tour will traverse 24 major cities, featuring an expanded 18-piece live band, dazzling pyrotechnics, and a roster of guest performers spotlighting emerging African talent.</p>

<blockquote>"Whenever we touch that stage, we represent a continent of over a billion people. We bring joy, excellence, and pure energy." – Davido</blockquote>`,
    featured_image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Energetic live concert stage with cheering fans in crowd',
    image_caption: 'Electric crowd energy during an arena music tour.',
    author_id: 'author_tariq_vance',
    author_name: 'Tariq Vance',
    author_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    author_role: 'Pop Culture & Media Columnist',
    author_bio: 'Tariq Vance writes on vinyl culture, audio hardware, and cultural trends shaping entertainment.',
    author_twitter: 'tariqvance',
    category_id: 'cat_latest_news',
    category_name: 'Latest News',
    category_slug: 'latest-news',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 36).toISOString(),
    views_count: 3820,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours' }
    ],
    created_at: new Date(Date.now() - 86400000 * 9).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 36).toISOString()
  },
  {
    id: 'art_burna_boy_stadium_lagos',
    title: 'Burna Boy Announces Epic Lagos Residency: Multi-Night Stadium Show with 30-Piece Orchestra',
    slug: 'burna-boy-announces-epic-lagos-stadium-residency',
    excerpt: 'The African Giant brings his colossal global stadium production home, pairing raw highlife horns with state-of-the-art stage pyrotechnics.',
    content: `<h2>The African Giant Comes Home</h2>
<p>Following consecutive sold-out tours at London Stadium, Citi Field in New York, and Paris La Défense Arena, Burna Boy has officially unveiled plans for his most ambitious live production to date: a multi-night stadium residency in Lagos, Nigeria.</p>
<p>Featuring an expanded 30-piece orchestra blending classical strings with traditional talking drums, the concert series promises to celebrate the complete catalog of one of Africa's most decorated living legends.</p>
<blockquote>"Performing across the globe is a blessing, but nothing compares to the energy of Lagos. We are bringing the biggest stage design in African history to our home soil." – Burna Boy</blockquote>
<h3>A New Benchmark for Live African Concerts</h3>
<p>Industry insiders confirm that the production will employ over 400 local technical specialists, featuring immersive holographic displays, aerial camera wire-systems, and unannounced guest appearances from global hip-hop royalty.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Massive concert crowd with glowing stage lights',
    image_caption: 'Burna Boy performing live on his worldwide arena tour.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_music',
    category_name: 'Music',
    category_slug: 'music',
    status: 'published',
    is_featured: 1,
    published_at: new Date(Date.now() - 3600000 * 40).toISOString(),
    views_count: 7420,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_concerts', name: 'Concerts & Tours', slug: 'concerts-tours' }
    ],
    created_at: new Date(Date.now() - 86400000 * 10).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 40).toISOString()
  },
  {
    id: 'art_nollywood_oscar_campaign',
    title: 'African Cinema at the Academy Awards: Inside the Groundbreaking Oscar Push for Nigerian Cinema',
    slug: 'african-cinema-at-the-academy-awards-nollywood-oscar-push',
    excerpt: 'How a unified coalition of Nollywood directors and international film distributors is positioning West African historical epics on the world’s most prestigious stage.',
    content: `<h2>A New Frontier for International Film Honors</h2>
<p>For decades, international feature film categories at major global awards overlooked the thriving storytelling power of Sub-Saharan Africa. Today, an ambitious coalition of Nigerian cinematic visionaries is executing a strategic, multi-city festival campaign designed to capture voters at the Academy of Motion Picture Arts and Sciences.</p>
<p>Focusing on high-concept cultural epics with breathtaking production design, authentic multilingual scripts, and visceral historical narratives, Nollywood is asserting its place as a heavyweight cinematic force.</p>
<h3>Critical Reception Across International Festivals</h3>
<p>Screenings in Toronto, London, and Berlin have generated standing ovations, with critics praising the seamless marriage of indigenous folklore with Hollywood-caliber cinematography.</p>`,
    featured_image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Cinema movie camera and clapperboard on film set',
    image_caption: 'Behind the scenes of high-production African cinema.',
    author_id: 'author_tariq_vance',
    author_name: 'Tariq Vance',
    author_avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    author_role: 'Pop Culture & Media Columnist',
    author_bio: 'Tariq Vance writes on vinyl culture, audio hardware, and cultural trends shaping entertainment.',
    author_twitter: 'tariqvance',
    category_id: 'cat_entertainment',
    category_name: 'Entertainment',
    category_slug: 'entertainment',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 44).toISOString(),
    views_count: 3180,
    tags: [
      { id: 'tag_nollywood', name: 'Nollywood', slug: 'nollywood' },
      { id: 'tag_streaming', name: 'Streaming', slug: 'streaming' }
    ],
    created_at: new Date(Date.now() - 86400000 * 11).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 44).toISOString()
  },
  {
    id: 'art_ayra_starr_billboard',
    title: 'Ayra Starr Shatters Global Streaming Milestone as Her Sensation Album Surpasses 1.5 Billion Plays',
    slug: 'ayra-starr-shatters-global-streaming-milestone',
    excerpt: 'The Celestial pop sensation continues her record-breaking trajectory, cementing her position as one of the fastest-growing pop superstars on earth.',
    content: `<h2>The Meteoric Ascent of Ayra Starr</h2>
<p>From the moment Oyinkansola Sarah Aderibigbe, known globally as Ayra Starr, signed to Mavin Records at age 18, her voice possessed an effortless transatlantic cool. In less than four years, she has transformed from a rising Afropop sensation into a Grammy-nominated global phenomenon.</p>
<p>Her latest LP has officially crossed 1.5 billion on-demand global streams, fueled by viral global anthems that topped charts in over 30 countries.</p>
<blockquote>"I want young girls everywhere to look at me and know that their voices are powerful enough to be heard across the entire world." – Ayra Starr</blockquote>`,
    featured_image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Singer on stage in spotlights',
    image_caption: 'Ayra Starr captivating a sold-out international audience.',
    author_id: 'author_amara_nwosu',
    author_name: 'Amara Nwosu',
    author_avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    author_role: 'Chief African Music & Culture Editor',
    author_bio: 'Amara Nwosu reports on Afrobeats, Pan-African youth culture, and the global creative economy.',
    author_twitter: 'amaranwosu_vibes',
    category_id: 'cat_trending',
    category_name: 'Trending',
    category_slug: 'trending',
    status: 'published',
    is_featured: 1,
    published_at: new Date(Date.now() - 3600000 * 48).toISOString(),
    views_count: 8940,
    tags: [
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' },
      { id: 'tag_streaming', name: 'Streaming', slug: 'streaming' }
    ],
    created_at: new Date(Date.now() - 86400000 * 12).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 48).toISOString()
  },
  {
    id: 'art_tiwa_savage_interview',
    title: 'Tiwa Savage on Longevity, Filmmaking, and Inspiring the Next Generation of African Women',
    slug: 'tiwa-savage-on-longevity-filmmaking-and-inspiring-women',
    excerpt: 'In an exclusive sit-down, the Queen of Afrobeats reflects on two decades of breaking barriers, her directorial debut, and what keeps her creatively hungry.',
    content: `<h2>The Enduring Reign of Tiwa Savage</h2>
<p>In an industry often notorious for short attention spans, Tiwa Savage has commanded center stage for over a decade with regal grace, impeccable songwriting, and fearless reinvention.</p>
<p>Sitting down with Globevibes in an exclusive interview, Savage discusses the transition from multi-platinum singer-songwriter to feature film producer and director, proving that African female creatives can occupy every seat at the executive table.</p>
<h3>Redefining What Stardom Means in 2026</h3>
<p>"When I first moved back to Nigeria, people told me a female artist could not headline a stadium or sustain a ten-year run," Savage recalls with a smile. "Every barrier placed in front of us is just another platform to jump higher."</p>`,
    featured_image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    featured_image_alt: 'Celebrity portrait in warm glamorous studio lighting',
    image_caption: 'Tiwa Savage in conversation with Globevibes.',
    author_id: 'author_jordan_cole',
    author_name: 'Jordan Cole',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    author_role: 'Senior Music Editor',
    author_bio: 'Jordan Cole is a music journalist covering hip-hop, contemporary soul, and festival culture worldwide.',
    author_twitter: 'jordancole_music',
    category_id: 'cat_celebrity_news',
    category_name: 'Celebrity News',
    category_slug: 'celebrity-news',
    status: 'published',
    is_featured: 0,
    published_at: new Date(Date.now() - 3600000 * 52).toISOString(),
    views_count: 5620,
    tags: [
      { id: 'tag_interviews', name: 'Interviews', slug: 'interviews' },
      { id: 'tag_afrobeats', name: 'Afrobeats', slug: 'afrobeats' }
    ],
    created_at: new Date(Date.now() - 86400000 * 13).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 52).toISOString()
  }
];

export const FALLBACK_ADS: AdSlot[] = [
  {
    id: 'ad_header_banner',
    slot_key: 'header_banner',
    name: 'Header Banner (Monetag Leaderboard / Push)',
    description: 'Clean responsive banner container directly beneath top navigation',
    is_enabled: 1,
    label: 'Advertisement',
    display_target: 'all',
    ad_html: ''
  },
  {
    id: 'ad_homepage_middle',
    slot_key: 'homepage_middle',
    name: 'Homepage Mid-Feed (Monetag In-Feed Native)',
    description: 'Embedded between featured stories and category grids',
    is_enabled: 1,
    label: 'Advertisement',
    display_target: 'all',
    ad_html: ''
  },
  {
    id: 'ad_article_middle',
    slot_key: 'article_middle',
    name: 'In-Article Inline Placement (Monetag Native In-Article)',
    description: 'Embedded midway through editorial article narrative',
    is_enabled: 1,
    label: 'Advertisement',
    display_target: 'all',
    ad_html: ''
  },
  {
    id: 'ad_article_bottom',
    slot_key: 'article_bottom',
    name: 'Article Post-Body Placement (Monetag Bottom Banner)',
    description: 'Positioned directly above comments and related articles',
    is_enabled: 1,
    label: 'Advertisement',
    display_target: 'all',
    ad_html: ''
  }
];
