import React, { useState, useEffect } from 'react';
import { Article, Category } from '../types';
import { api } from '../services/api';
import { ArticleCard } from '../components/ArticleCard';
import { AdPlacement } from '../components/AdPlacement';
import { NewsletterBox } from '../components/NewsletterBox';
import { updatePageSeo } from '../utils/seo';
import {
  Flame,
  Music,
  Film,
  Globe2,
  Sparkles,
  TrendingUp,
  Clock,
  ArrowRight,
  Radio,
  ChevronRight
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

  const loadHomeData = async () => {
    try {
      const [articlesRes, catRes] = await Promise.all([
        api.getArticles({ limit: 25, sort: 'latest' }),
        api.getCategories()
      ]);

      if (articlesRes.articles && articlesRes.articles.length > 0) {
        setAllArticles(articlesRes.articles);
      }
      if (catRes.categories && catRes.categories.length > 0) {
        setCategories(catRes.categories);
      }
    } catch (err: any) {
      console.warn('[Globevibes] Live API unreachable on static host, retaining editorial data:', err);
    }
  };

  useEffect(() => {
    updatePageSeo({
      title: 'Globevibes – Music, Entertainment, African Beats & Trending News',
      description: 'Discover the latest music releases, Afrobeats superstars, Nollywood cinema, celebrity exclusives, and viral trending entertainment on Globevibes.',
      ogType: 'website'
    });

    loadHomeData();
  }, []);

  // Quick navigation categories requested by user
  const quickNavCategories = [
    { label: 'Music', path: '/category/music', icon: Music },
    { label: 'Entertainment', path: '/category/entertainment', icon: Film },
    { label: 'Latest News', path: '/category/latest-news', icon: Clock },
    { label: 'Trending', path: '/category/trending', icon: Flame },
    { label: 'Features', path: '/category/features', icon: Radio },
    { label: 'Celebrity News', path: '/category/celebrity-news', icon: Sparkles },
    { label: 'African Entertainment', path: '/category/african-entertainment', icon: Globe2 }
  ];

  // Section Data Slicing
  // A. Featured Stories: Top featured items
  const featuredArticles = allArticles.filter(a => Boolean(a.is_featured)).slice(0, 4);
  const mainHero = featuredArticles[0] || allArticles[0] || null;
  const secondaryFeatured = featuredArticles.slice(1, 4);

  // B. Latest News: Newest chronological
  const latestNewsArticles = [...allArticles]
    .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
    .slice(0, 5);

  // C. Trending Stories: Highest view count
  const trendingArticles = [...allArticles]
    .sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
    .slice(0, 5);

  // D. Music News: category 'music' or tagged music
  const musicArticles = allArticles.filter(
    a => a.category_slug === 'music' || a.tags?.some(t => ['hip-hop', 'r-and-b', 'vinyl', 'pop'].includes(t.slug))
  ).slice(0, 4);

  // E. Entertainment News: category 'entertainment' or 'features'
  const entertainmentArticles = allArticles.filter(
    a => a.category_slug === 'entertainment' || a.category_slug === 'features'
  ).slice(0, 4);

  // F. African Entertainment: category 'african-entertainment' or afrobeats/nollywood
  const africanArticles = allArticles.filter(
    a => a.category_slug === 'african-entertainment' || a.tags?.some(t => ['afrobeats', 'nollywood'].includes(t.slug))
  ).slice(0, 4);

  // G. Recommended Articles: diverse picks
  const recommendedArticles = allArticles.filter(
    a => a.id !== mainHero?.id && !secondaryFeatured.some(f => f.id === a.id)
  ).slice(0, 4);

  if (loading) {
    return (
      <div className="bg-neutral-950 min-h-screen py-20 px-4">
        <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center text-white shadow-xl">
          <div className="inline-block w-9 h-9 border-3 border-neutral-700 border-t-red-600 rounded-full animate-spin mb-4" />
          <h2 className="text-lg font-black tracking-tight text-white mb-1">
            <span className="text-white">GLOBE</span>
            <span className="text-red-600">VIBES</span>
          </h2>
          <p className="text-xs font-mono text-neutral-400">Loading front page editorial dispatches...</p>
        </div>
      </div>
    );
  }

  if (error && allArticles.length === 0) {
    return (
      <div className="bg-neutral-950 min-h-screen py-20 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-xl p-8 text-center shadow-xl border border-neutral-200">
          <h2 className="text-2xl font-black text-neutral-950 mb-2">Editorial Feed Temporarily Unavailable</h2>
          <p className="text-sm text-neutral-600 mb-6">{error}</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={loadHomeData}
              className="px-5 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-red-700 cursor-pointer transition-colors"
            >
              Retry Loading Feed
            </button>
            <button
              onClick={() => onNavigate('/articles')}
              className="px-5 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-200 cursor-pointer transition-colors"
            >
              Browse All Articles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-900 pb-16">
      {/* 8. Monetag Advertisement Container: Below the header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3">
        <AdPlacement slotKey="header_banner" />
      </div>

      {/* Main White Content Area against Black Background (uDiscover Music Inspired) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-neutral-800/20 overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">

          {/* Quick Sub-Navigation Bar for Homepage */}
          <nav
            aria-label="Homepage Quick Categories"
            className="pb-4 mb-6 border-b border-neutral-200"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-wider text-neutral-400 font-mono">
                Explore Sections:
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
                {quickNavCategories.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => onNavigate(item.path)}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-800 rounded-md text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-red-600" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* =========================================================================
              SECTION A: FEATURED STORIES (uDiscover Music Large Card Layout)
             ========================================================================= */}
          <section className="mb-12" aria-labelledby="featured-stories-heading">
            <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-950 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-6 bg-red-600 rounded-xs" />
                <h2 id="featured-stories-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 tracking-tight uppercase">
                  Featured Stories
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/articles?featured=1')}
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

          {/* 8. Monetag Advertisement Container: Between homepage article sections */}
          <AdPlacement slotKey="homepage_middle" />

          {/* =========================================================================
              SECTION B & C: LATEST NEWS + TRENDING STORIES (Side-by-Side Editorial Grid)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 my-12">
            {/* SECTION B: LATEST NEWS (Left 7 Cols) */}
            <section className="lg:col-span-7" aria-labelledby="latest-news-heading">
              <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-950 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-neutral-950 rounded-xs" />
                  <h2 id="latest-news-heading" className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight uppercase">
                    Latest News
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('/category/latest-news')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
                >
                  <span>See More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="space-y-4">
                {latestNewsArticles.map((art) => (
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
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-neutral-950 text-white hover:bg-red-600 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-sm"
                >
                  <span>Explore Full News Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </section>

            {/* SECTION C: TRENDING STORIES (Right 5 Cols - Dark Boxed Ranking) */}
            <section className="lg:col-span-5" aria-labelledby="trending-stories-heading">
              <div className="bg-neutral-950 text-white rounded-xl p-5 sm:p-6 shadow-xl border border-neutral-900 sticky top-24">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-5">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                    <h2 id="trending-stories-heading" className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">
                      Trending Stories
                    </h2>
                  </div>
                  <button
                    onClick={() => onNavigate('/category/trending')}
                    className="text-[11px] font-bold text-red-400 hover:text-red-300 uppercase tracking-wider cursor-pointer"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {trendingArticles.map((art, idx) => (
                    <ArticleCard
                      key={art.id}
                      article={art}
                      onNavigate={onNavigate}
                      variant="trending"
                      rank={idx + 1}
                    />
                  ))}
                </div>

                {/* Newsletter Box inside trending sidebar */}
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <NewsletterBox />
                </div>
              </div>
            </section>
          </div>

          {/* =========================================================================
              SECTION D: MUSIC NEWS (Releases, Artists, Albums, Industry)
             ========================================================================= */}
          <section className="my-14 pt-8 border-t border-neutral-200" aria-labelledby="music-news-heading">
            <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-950 mb-6">
              <div className="flex items-center gap-2">
                <Music className="w-6 h-6 text-red-600" />
                <h2 id="music-news-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 tracking-tight uppercase">
                  Music News &amp; Album Spotlights
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/category/music')}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span>All Music</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(musicArticles.length > 0 ? musicArticles : allArticles.slice(0, 4)).map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  onNavigate={onNavigate}
                  variant="standard"
                />
              ))}
            </div>
          </section>

          {/* =========================================================================
              SECTION E: ENTERTAINMENT NEWS (Movies, TV, Red Carpets, Hollywood)
             ========================================================================= */}
          <section className="my-14 pt-8 border-t border-neutral-200" aria-labelledby="entertainment-news-heading">
            <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-950 mb-6">
              <div className="flex items-center gap-2">
                <Film className="w-6 h-6 text-neutral-950" />
                <h2 id="entertainment-news-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 tracking-tight uppercase">
                  Entertainment &amp; Screen Culture
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/category/entertainment')}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span>All Entertainment</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(entertainmentArticles.length > 0 ? entertainmentArticles : allArticles.slice(2, 6)).map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  onNavigate={onNavigate}
                  variant="standard"
                />
              ))}
            </div>
          </section>

          {/* =========================================================================
              SECTION F: AFRICAN ENTERTAINMENT (Afrobeats, Nollywood, Superstars)
             ========================================================================= */}
          <section
            className="my-14 pt-8 pb-10 px-4 sm:px-8 bg-neutral-950 text-white rounded-xl shadow-xl border border-neutral-900"
            aria-labelledby="african-entertainment-heading"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800 mb-8">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-red-600 rounded-xs" />
                  <h2 id="african-entertainment-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight uppercase">
                    African Entertainment
                  </h2>
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  Spotlighting Afrobeats global takeover, Nigerian music royalty, Nollywood cinema, and African celebrities.
                </p>
              </div>
              <button
                onClick={() => onNavigate('/category/african-entertainment')}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>View Bureau</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(africanArticles.length > 0 ? africanArticles : allArticles.slice(0, 4)).map((art) => (
                <div key={art.id} className="bg-white rounded-lg overflow-hidden text-neutral-900">
                  <ArticleCard
                    article={art}
                    onNavigate={onNavigate}
                    variant="standard"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              SECTION G: RECOMMENDED ARTICLES (Related & Essential Reading)
             ========================================================================= */}
          <section className="my-12 pt-6 border-t border-neutral-200" aria-labelledby="recommended-articles-heading">
            <div className="flex items-center justify-between pb-3 border-b-2 border-neutral-950 mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-red-600" />
                <h2 id="recommended-articles-heading" className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 tracking-tight uppercase">
                  Recommended Articles
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/articles')}
                className="inline-flex items-center gap-1 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wider transition-colors cursor-pointer group"
              >
                <span>View More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedArticles.map((art) => (
                <ArticleCard
                  key={art.id}
                  article={art}
                  onNavigate={onNavigate}
                  variant="standard"
                />
              ))}
            </div>
          </section>

          {/* 8. Monetag Advertisement Container: Pre-footer Placement */}
          <AdPlacement slotKey="homepage_bottom" />

        </div>
      </div>
    </div>
  );
};
