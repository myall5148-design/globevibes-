import React, { useState, useEffect, useMemo } from 'react';
import { Article, Category } from '../types';
import { api } from '../services/api';
import { ArticleCard } from '../components/ArticleCard';
import { AdPlacement } from '../components/AdPlacement';
import { NewsletterBox } from '../components/NewsletterBox';
import { updatePageSeo } from '../utils/seo';
import {
  Flame,
  Music,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  Radio,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Compass,
  Disc3,
  Users
} from 'lucide-react';

import { FALLBACK_ARTICLES, FALLBACK_CATEGORIES } from '../data/fallbackData';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [allArticles, setAllArticles] = useState<Article[]>(FALLBACK_ARTICLES);
  const [categories, setCategories] = useState<Category[]>(FALLBACK_CATEGORIES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Artist explorer states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'alpha' | 'popular' | 'newest'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const loadHomeData = async () => {
    try {
      const [articlesRes, catRes] = await Promise.all([
        api.getArticles({ limit: 100, sort: 'latest' }),
        api.getCategories()
      ]);

      if (articlesRes.articles && articlesRes.articles.length > 0) {
        setAllArticles(articlesRes.articles);
      }
      if (catRes.categories && catRes.categories.length > 0) {
        setCategories(catRes.categories);
      }
    } catch (err: any) {
      console.warn('[Globevibes1] Retaining curated artist catalog:', err);
    }
  };

  useEffect(() => {
    updatePageSeo({
      title: 'Globevibes1 – Music Artist Biographies & Career Chronicles',
      description: 'Discover music artists, explore their biographies, learn about their musical careers, and discover interesting facts about their music.',
      ogType: 'website'
    });

    loadHomeData();
  }, []);

  // Quick navigation categories for artist genres
  const quickGenreFilters = [
    { label: 'All Artists', slug: 'all', icon: Users },
    { label: 'Electronic & Dance', slug: 'electronic-and-dance', icon: Disc3 },
    { label: 'Hip-Hop & Rap', slug: 'hip-hop-rap', icon: Flame },
    { label: 'Latin Music', slug: 'latin-music', icon: Compass },
    { label: 'Indie & Alternative', slug: 'indie-and-alternative', icon: Music },
    { label: 'Pop & R&B', slug: 'pop-and-rnb', icon: Sparkles },
    { label: 'Global Sounds', slug: 'global-sounds', icon: Radio }
  ];

  // Filtered and sorted artist list
  const filteredArtists = useMemo(() => {
    return allArticles.filter((article) => {
      // Filter by category
      if (selectedCategory !== 'all') {
        const matchesCategory =
          article.category_slug === selectedCategory ||
          (selectedCategory === 'electronic-and-dance' && article.category_slug?.includes('electronic')) ||
          (selectedCategory === 'hip-hop-rap' && article.category_slug?.includes('hiphop')) ||
          (selectedCategory === 'latin-music' && article.category_slug?.includes('latin')) ||
          (selectedCategory === 'indie-and-alternative' && article.category_slug?.includes('indie')) ||
          (selectedCategory === 'pop-and-rnb' && article.category_slug?.includes('pop')) ||
          (selectedCategory === 'global-sounds' && article.category_slug?.includes('global'));
        if (!matchesCategory) return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = article.title.toLowerCase().includes(q);
        const nameMatch = (article.artist_name || '').toLowerCase().includes(q);
        const excerptMatch = article.excerpt.toLowerCase().includes(q);
        const tagMatch = (article.tags || []).some(t => t.name.toLowerCase().includes(q));
        if (!titleMatch && !nameMatch && !excerptMatch && !tagMatch) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'alpha') {
        const nameA = a.artist_name || a.title;
        const nameB = b.artist_name || b.title;
        return nameA.localeCompare(nameB);
      }
      if (sortBy === 'popular') {
        return (b.views_count || 0) - (a.views_count || 0);
      }
      if (sortBy === 'newest') {
        return new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime();
      }
      // 'featured' sort: featured first, then view count
      const featA = a.is_featured ? 1 : 0;
      const featB = b.is_featured ? 1 : 0;
      if (featB !== featA) return featB - featA;
      return (b.views_count || 0) - (a.views_count || 0);
    });
  }, [allArticles, selectedCategory, searchQuery, sortBy]);

  // Section Data Slicing
  // A. Featured Marquee Artists: top featured items
  const featuredArticles = allArticles.filter(a => Boolean(a.is_featured)).slice(0, 4);
  const mainHero = featuredArticles[0] || allArticles[0] || null;
  const secondaryFeatured = featuredArticles.slice(1, 4);

  // B. Latest Biographies: Newest chronological
  const latestBiographies = [...allArticles]
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
    .slice(0, 5);

  // C. Popular Artist Articles: Highest view count
  const popularArticles = [...allArticles]
    .sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
    .slice(0, 6);

  const scrollToArtistSection = () => {
    const el = document.getElementById('artist-articles-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="bg-stone-950 min-h-screen py-20 px-4">
        <div className="max-w-md mx-auto bg-stone-900 border border-stone-800 rounded-xl p-8 text-center text-white shadow-xl">
          <div className="inline-block w-9 h-9 border-3 border-stone-700 border-t-red-600 rounded-full animate-spin mb-4" />
          <h2 className="text-lg font-black tracking-tight text-white mb-1">
            <span className="text-white">GLOBE</span>
            <span className="text-red-600">VIBES</span>
            <span className="text-white ml-0.5 text-xs bg-red-600 px-1 py-0.2 rounded font-black">1</span>
          </h2>
          <p className="text-xs font-mono text-stone-400">Loading artist biographies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-950 min-h-screen text-stone-900 pb-16 selection:bg-red-600 selection:text-white">
      {/* Monetag Advertisement: Below Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3">
        <AdPlacement slotKey="header_banner" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200/80 overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">

          {/* =========================================================================
              SECTION 1: PROMINENT WELCOME MESSAGE (Required by Brief)
             ========================================================================= */}
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-neutral-900 to-stone-900 text-white p-6 sm:p-8 md:p-12 mb-10 shadow-xl border border-stone-800">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-red-800/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Music className="w-3.5 h-3.5 text-red-500" />
                <span>Music Discovery & Artist Biography Magazine</span>
              </div>

              {/* Exact Required Welcome Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Welcome to Globevibes1!
              </h1>

              {/* Exact Required Message Copy */}
              <p className="text-stone-300 text-base sm:text-lg md:text-xl leading-relaxed mb-3 font-normal">
                Discover your favourite music artists, explore their biographies, learn about their musical journeys, and find out more about the people behind the music.
              </p>

              <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                Explore our latest artist biographies and discover something new today.
              </p>

              {/* Exact Required Action Button: "Explore Artists" */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToArtistSection}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Explore Artists</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => onNavigate('/categories')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer border border-stone-700"
                >
                  <Disc3 className="w-4 h-4 text-stone-400" />
                  <span>Browse Categories</span>
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 2: FEATURED ARTIST SPOTLIGHTS (Hero Showcase)
             ========================================================================= */}
          <section className="mb-12" aria-labelledby="featured-artists-heading">
            <div className="flex items-center justify-between pb-3 border-b-2 border-stone-950 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-red-600 rounded-xs" />
                <h2 id="featured-artists-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-stone-950 tracking-tight uppercase">
                  Featured Artists
                </h2>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSortBy('featured');
                  scrollToArtistSection();
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span>View All Featured</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Marquee Cover Story */}
            {mainHero && (
              <div className="mb-8">
                <ArticleCard
                  article={mainHero}
                  onNavigate={onNavigate}
                  variant="hero"
                  priority={true}
                />
              </div>
            )}

            {/* Secondary Featured Stories Grid */}
            {secondaryFeatured.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {secondaryFeatured.map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onNavigate={onNavigate}
                    variant="featured"
                  />
                ))}
              </div>
            )}
          </section>

          {/* Monetag Advertisement: Homepage Middle */}
          <AdPlacement slotKey="homepage_middle" />

          {/* =========================================================================
              SECTION 3: COMPLETE ARTIST DISCOVERY & BIOGRAPHIES (Interactive Section)
             ========================================================================= */}
          <section id="artist-articles-section" className="my-12 scroll-mt-24" aria-labelledby="artist-catalog-heading">
            <div className="pb-4 mb-6 border-b-2 border-stone-950">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-6 bg-stone-950 rounded-xs" />
                    <h2 id="artist-catalog-heading" className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight uppercase">
                      Artist Biographies Catalog
                    </h2>
                  </div>
                  <p className="text-stone-500 text-xs sm:text-sm">
                    Discover comprehensive biographies, musical careers, discographies, and interesting facts about world music artists.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-500 bg-stone-100 px-3 py-1.5 rounded-md self-start md:self-auto">
                  <span>Showing {Math.min(visibleCount, filteredArtists.length)} of {filteredArtists.length} Artists</span>
                </div>
              </div>

              {/* Genre Filter Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pt-4 pb-1">
                {quickGenreFilters.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = selectedCategory === tab.slug;
                  return (
                    <button
                      key={tab.slug}
                      onClick={() => {
                        setSelectedCategory(tab.slug);
                        setVisibleCount(12);
                      }}
                      className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? 'bg-stone-950 text-white shadow-md'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-red-500' : 'text-stone-500'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search & Sort Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mt-4 pt-3 border-t border-stone-100">
                <div className="sm:col-span-8 relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(12);
                    }}
                    placeholder="Search by artist name, country, genre (e.g. Tainy, Scotland, Drill)..."
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="sm:col-span-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-stone-400 shrink-0" />
                  <select
                    value={sortBy}
                    onChange={(e: any) => setSortBy(e.target.value)}
                    className="w-full py-2.5 px-3 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:border-red-600 font-medium cursor-pointer"
                  >
                    <option value="featured">Sort: Featured Picks</option>
                    <option value="alpha">Sort: Artist Name (A - Z)</option>
                    <option value="popular">Sort: Most Popular</option>
                    <option value="newest">Sort: Newest Articles</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Artist Cards Grid */}
            {filteredArtists.length === 0 ? (
              <div className="text-center py-16 bg-stone-50 rounded-xl border border-dashed border-stone-300 p-8">
                <Music className="w-10 h-10 text-stone-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-stone-900 mb-1">No artists found matching your search</h3>
                <p className="text-xs sm:text-sm text-stone-500 mb-4">Try clearing the search query or selecting a different category.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredArtists.slice(0, visibleCount).map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onNavigate={onNavigate}
                    variant="standard"
                  />
                ))}
              </div>
            )}

            {/* Load More Button */}
            {visibleCount < filteredArtists.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-950 text-white hover:bg-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors shadow-md cursor-pointer"
                >
                  <span>Load More Artist Biographies</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </section>

          {/* =========================================================================
              SECTION 4: LATEST ARTICLES & POPULAR RANKINGS (Editorial Grid)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-12 pt-8 border-t border-stone-200">
            {/* Left 7 Columns: Latest Articles */}
            <section className="lg:col-span-7" aria-labelledby="latest-artists-heading">
              <div className="flex items-center justify-between pb-3 border-b-2 border-stone-950 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-stone-950 rounded-xs" />
                  <h2 id="latest-artists-heading" className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight uppercase">
                    Latest Biographies
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('/articles')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
                >
                  <span>See All</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="space-y-4">
                {latestBiographies.map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onNavigate={onNavigate}
                    variant="horizontal"
                  />
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => onNavigate('/articles')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-950 text-white hover:bg-red-600 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-sm"
                >
                  <span>Explore Full Music Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* Right 5 Columns: Popular Artist Articles */}
            <section className="lg:col-span-5" aria-labelledby="popular-artists-heading">
              <div className="bg-stone-950 text-white rounded-xl p-5 sm:p-6 shadow-xl border border-stone-900 sticky top-24">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-5">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                    <h2 id="popular-artists-heading" className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">
                      Popular Artist Biographies
                    </h2>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider">
                    Most Read
                  </span>
                </div>

                <div className="space-y-3">
                  {popularArticles.map((art, idx) => (
                    <ArticleCard
                      key={art.id}
                      article={art}
                      onNavigate={onNavigate}
                      variant="trending"
                      rank={idx + 1}
                    />
                  ))}
                </div>

                {/* Newsletter Box in Sidebar */}
                <div className="mt-6 pt-5 border-t border-stone-800">
                  <NewsletterBox />
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};
