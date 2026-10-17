import { Article, Category, Tag } from '../types';
import { RAW_ARTISTS } from './artistsList';
import { RAW_ARTISTS_TWO } from './artistsListTwo';
import { RAW_ARTISTS_THREE } from './artistsListThree';

export interface ArtistProfile {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  category_name: string;
  category_slug: string;
  genre: string;
  origin: string;
  tags: Tag[];
  image: string;
  imageAlt: string;
  isFeatured: boolean;
  publishedDate: string;
  relatedArtists: string[];
  intro: string;
  whoIs: string;
  earlyJourney: string;
  styleGenres: string;
  highlights: string;
  popularSongs: string[];
  interestingFacts: string[];
  discoverMore: string;
}

export const ALL_ARTIST_PROFILES: ArtistProfile[] = [
  ...RAW_ARTISTS,
  ...RAW_ARTISTS_TWO,
  ...RAW_ARTISTS_THREE
];

export const ARTIST_CATEGORIES: Category[] = [
  {
    id: 'cat_electronic_dance',
    name: 'Electronic and Dance',
    slug: 'electronic-and-dance',
    description: 'Deep house, ambient techno, EDM, future bass, and innovative dance music pioneers.',
    image_url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    sort_order: 1,
    article_count: 11
  },
  {
    id: 'cat_hiphop_rap',
    name: 'Hip-Hop and Rap',
    slug: 'hip-hop-rap',
    description: 'Lyrical heavyweights, UK drill pioneers, trap sensations, and underground rap innovators.',
    image_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    sort_order: 2,
    article_count: 13
  },
  {
    id: 'cat_latin_music',
    name: 'Latin Music',
    slug: 'latin-music',
    description: 'Latin trap champions, reggaeton super-producers, and Mexican regional balladeers.',
    image_url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    sort_order: 3,
    article_count: 4
  },
  {
    id: 'cat_indie_alternative',
    name: 'Indie and Alternative',
    slug: 'indie-and-alternative',
    description: 'Jangle pop, post-punk storytellers, indie folk poets, and grunge revival outfits.',
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    sort_order: 4,
    article_count: 9
  },
  {
    id: 'cat_pop_rnb',
    name: 'Pop and R&B',
    slug: 'pop-and-rnb',
    description: 'Neo-soul vocalists, soulful singer-songwriters, dance-pop icons, and chart-topping melodists.',
    image_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    sort_order: 5,
    article_count: 11
  },
  {
    id: 'cat_global_sounds',
    name: 'Global Sounds',
    slug: 'global-sounds',
    description: 'Psychedelic Thai funk, Balkan folk-pop, Ukrainian hip-hop, and orchestral cinematic composers.',
    image_url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80',
    sort_order: 6,
    article_count: 9
  },
  {
    id: 'cat_music',
    name: 'Music',
    slug: 'music',
    description: 'All artist biographies, music retrospectives, discography breakdowns, and artist spotlights.',
    image_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    sort_order: 7,
    article_count: 57
  }
];

export const ARTIST_TAGS: Tag[] = [
  { id: 'tag_electronic', name: 'Electronic', slug: 'electronic', article_count: 11 },
  { id: 'tag_house', name: 'House', slug: 'house', article_count: 7 },
  { id: 'tag_techno', name: 'Techno', slug: 'techno', article_count: 4 },
  { id: 'tag_hiphop', name: 'Hip-Hop', slug: 'hip-hop', article_count: 14 },
  { id: 'tag_rap', name: 'Rap', slug: 'rap', article_count: 12 },
  { id: 'tag_drill', name: 'Drill', slug: 'drill', article_count: 2 },
  { id: 'tag_trap', name: 'Trap', slug: 'trap', article_count: 6 },
  { id: 'tag_latin', name: 'Latin', slug: 'latin', article_count: 5 },
  { id: 'tag_reggaeton', name: 'Reggaeton', slug: 'reggaeton', article_count: 3 },
  { id: 'tag_indie', name: 'Indie', slug: 'indie', article_count: 10 },
  { id: 'tag_rock', name: 'Rock', slug: 'rock', article_count: 7 },
  { id: 'tag_rnb', name: 'R&B', slug: 'rnb', article_count: 7 },
  { id: 'tag_pop', name: 'Pop', slug: 'pop', article_count: 12 },
  { id: 'tag_eurovision', name: 'Eurovision', slug: 'eurovision', article_count: 4 },
  { id: 'tag_composer', name: 'Composer', slug: 'composer', article_count: 2 },
  { id: 'tag_reggae', name: 'Reggae', slug: 'reggae', article_count: 2 }
];

export function artistProfileToArticle(p: ArtistProfile, index: number): Article {
  const content = `
<div class="artist-bio-overview mb-6">
  <p class="text-base sm:text-lg leading-relaxed text-stone-700 font-medium mb-4">${p.intro}</p>
</div>

<h3>Who Is ${p.name}?</h3>
<p>${p.whoIs}</p>

<h3>Musical Roots & Early Journey</h3>
<p>${p.earlyJourney}</p>

<h3>Musical Style, Genres & Artistic Identity</h3>
<p>${p.styleGenres}</p>

<h3>Career Milestones & Breakthrough Achievements</h3>
<p>${p.highlights}</p>

<h3>Notable Songs & Landmark Releases</h3>
<ul class="my-4 space-y-1.5 list-disc pl-5">
  ${p.popularSongs.map(s => `<li><strong>${s}</strong></li>`).join('\n')}
</ul>

<h3>Interesting Facts About ${p.name}</h3>
<ul class="my-4 space-y-2 list-disc pl-5">
  ${p.interestingFacts.map(f => `<li>${f}</li>`).join('\n')}
</ul>

<h3>Discover More</h3>
<p>${p.discoverMore}</p>
  `.trim();

  // Generate staggered realistic view counts and consistent timestamps
  const baseViews = 4500 + ((index * 137) % 5200);

  return {
    id: `art_${p.id}`,
    title: `${p.name}: Biography, Musical Career & Journey`,
    slug: `${p.slug}-biography`,
    artist_name: p.name,
    excerpt: p.intro,
    content,
    featured_image: p.image,
    featured_image_alt: p.imageAlt,
    image_caption: `${p.name} (${p.origin}) · ${p.genre}`,
    author_id: 'author_jordan_cole',
    author_name: 'Jordan Cole',
    author_role: 'Senior Music Editor',
    author_avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    category_id: p.category_id,
    category_name: p.category_name,
    category_slug: p.category_slug,
    status: 'published',
    is_featured: p.isFeatured ? 1 : 0,
    published_at: p.publishedDate,
    seo_title: `${p.name} Biography, Career Milestones & Music | Globevibes1`,
    seo_description: `Discover the biography of music artist ${p.name} (${p.origin}) on Globevibes1. Explore their career milestones, ${p.genre} musical style, hit releases, and interesting facts.`,
    views_count: baseViews,
    tags: p.tags,
    related_artists: p.relatedArtists,
    created_at: p.publishedDate,
    updated_at: p.publishedDate
  };
}

export const ARTIST_ARTICLES: Article[] = ALL_ARTIST_PROFILES.map((p, index) =>
  artistProfileToArticle(p, index)
);
