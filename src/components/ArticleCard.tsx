import React from 'react';
import { Article } from '../types';
import { ArrowRight, Flame } from 'lucide-react';
import { formatArticleDate } from '../utils/date';

interface ArticleCardProps {
  article: Article;
  onNavigate: (path: string) => void;
  variant?: 'hero' | 'featured' | 'standard' | 'horizontal' | 'trending' | 'compact';
  rank?: number;
  priority?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onNavigate,
  variant = 'standard',
  rank,
  priority = false
}) => {
  const formattedDate = formatArticleDate(article.published_at, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const readTimeEst = Math.max(1, Math.ceil((article.content || '').split(/\s+/).length / 200));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(`/article/${article.slug}`);
  };

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (article.category_slug) {
      onNavigate(`/category/${article.category_slug}`);
    }
  };

  // 1. HERO VARIANT (uDiscover Music Marquee Showcase)
  if (variant === 'hero') {
    return (
      <article className="group relative bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
        <a href={`/article/${article.slug}`} onClick={handleClick} className="block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Large Cover Image with zoom */}
            <div className="lg:col-span-7 relative overflow-hidden bg-neutral-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto">
              <img
                src={article.featured_image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'}
                alt={article.featured_image_alt || article.title}
                loading={priority ? 'eager' : 'lazy'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              
              {/* Category Badge on Mobile Over Image */}
              <div className="absolute top-4 left-4 lg:hidden">
                <span className="inline-block bg-red-600 text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded shadow-md">
                  {article.category_name || 'Featured'}
                </span>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Desktop Category Badge & Meta */}
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                  <button
                    onClick={handleCategoryClick}
                    className="hidden lg:inline-block bg-red-600 text-white font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded hover:bg-red-700 transition-colors cursor-pointer"
                  >
                    {article.category_name || 'Featured'}
                  </button>
                  <time dateTime={article.published_at || undefined} className="text-neutral-500 font-medium">
                    {formattedDate}
                  </time>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="text-neutral-500">{readTimeEst} min read</span>
                </div>

                {/* Bold Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-neutral-950 group-hover:text-red-600 leading-[1.15] tracking-tight transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom Row with Author and Read More Button */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {article.author_avatar && (
                    <img
                      src={article.author_avatar}
                      alt={article.author_name || 'Author'}
                      className="w-8 h-8 rounded-full object-cover border border-neutral-200"
                    />
                  )}
                  <div className="text-xs">
                    <span className="font-bold text-neutral-900 block">{article.author_name || 'Globevibes Staff'}</span>
                    <span className="text-neutral-500 block text-[11px]">{article.author_role || 'Staff Writer'}</span>
                  </div>
                </div>

                {/* Prominent Read More button */}
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-950 text-white group-hover:bg-red-600 rounded text-xs font-bold uppercase tracking-wider transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </article>
    );
  }

  // 2. FEATURED VARIANT (Large Vertical Card)
  if (variant === 'featured') {
    return (
      <article className="group flex flex-col justify-between bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 h-full">
        <a href={`/article/${article.slug}`} onClick={handleClick} className="block relative overflow-hidden bg-neutral-900 aspect-[16/10]">
          <img
            src={article.featured_image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'}
            alt={article.featured_image_alt || article.title}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Category Pill over image */}
          <div className="absolute top-3 left-3">
            <button
              onClick={handleCategoryClick}
              className="bg-red-600 text-white font-black text-[11px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md hover:bg-red-700 transition-colors cursor-pointer"
            >
              {article.category_name || 'Entertainment'}
            </button>
          </div>
        </a>

        <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <time dateTime={article.published_at || undefined}>{formattedDate}</time>
              <span aria-hidden="true" className="text-neutral-300">·</span>
              <span>{readTimeEst} min read</span>
            </div>

            <a href={`/article/${article.slug}`} onClick={handleClick} className="block">
              <h3 className="text-xl sm:text-2xl font-black text-neutral-950 group-hover:text-red-600 leading-snug tracking-tight transition-colors line-clamp-2">
                {article.title}
              </h3>
            </a>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
            <span className="text-neutral-500 font-medium">By {article.author_name || 'Globevibes Staff'}</span>
            <a
              href={`/article/${article.slug}`}
              onClick={handleClick}
              className="inline-flex items-center gap-1 font-bold text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>Read More</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // 3. HORIZONTAL VARIANT (Feed style with left thumbnail)
  if (variant === 'horizontal') {
    return (
      <article className="group flex flex-col sm:flex-row gap-4 sm:gap-5 p-4 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-md transition-all duration-200">
        <div className="w-full sm:w-52 sm:h-36 shrink-0 relative overflow-hidden rounded-md bg-neutral-900 aspect-[16/10] sm:aspect-auto">
          <a href={`/article/${article.slug}`} onClick={handleClick} className="block h-full w-full">
            <img
              src={article.featured_image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'}
              alt={article.featured_image_alt || article.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
          {article.category_name && (
            <div className="absolute top-2 left-2 sm:hidden">
              <span className="bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                {article.category_name}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-between space-y-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1.5">
              {article.category_name && (
                <button
                  onClick={handleCategoryClick}
                  className="hidden sm:inline-block font-bold text-red-600 uppercase tracking-wider hover:underline"
                >
                  {article.category_name}
                </button>
              )}
              <span aria-hidden="true" className="text-neutral-300 hidden sm:inline">·</span>
              <time dateTime={article.published_at || undefined}>{formattedDate}</time>
            </div>

            <a href={`/article/${article.slug}`} onClick={handleClick} className="block">
              <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-red-600 leading-snug transition-colors line-clamp-2">
                {article.title}
              </h3>
            </a>

            <p className="text-neutral-600 text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="text-xs text-neutral-500 pt-1 flex items-center justify-between border-t border-neutral-100 mt-2">
            <span>By {article.author_name || 'Staff'}</span>
            <a
              href={`/article/${article.slug}`}
              onClick={handleClick}
              className="inline-flex items-center gap-1 font-bold text-neutral-900 group-hover:text-red-600 transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>Read More</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </article>
    );
  }

  // 4. TRENDING VARIANT (Numbered Rank Card)
  if (variant === 'trending') {
    const rankStr = rank ? (rank < 10 ? `0${rank}` : `${rank}`) : '01';
    return (
      <article className="group flex items-start gap-4 p-3.5 bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 rounded-lg transition-all duration-200">
        <div className="shrink-0 font-black text-2xl sm:text-3xl text-red-600 tracking-tighter w-8 text-center">
          {rankStr}
        </div>

        <div className="w-20 h-20 shrink-0 relative overflow-hidden rounded bg-neutral-800">
          <a href={`/article/${article.slug}`} onClick={handleClick} className="block w-full h-full">
            <img
              src={article.featured_image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80'}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 mb-1">
            <span className="font-bold text-red-500 uppercase tracking-wider truncate">
              {article.category_name || 'Trending'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-neutral-400">
              <Flame className="w-3 h-3 text-red-500" />
              {article.views_count ? `${article.views_count.toLocaleString()} views` : 'Trending'}
            </span>
          </div>

          <a href={`/article/${article.slug}`} onClick={handleClick} className="block">
            <h4 className="text-sm font-bold text-white group-hover:text-red-400 leading-snug line-clamp-2 transition-colors">
              {article.title}
            </h4>
          </a>
        </div>
      </article>
    );
  }

  // 5. COMPACT VARIANT (Text list for sidebars)
  if (variant === 'compact') {
    return (
      <article className="group py-3 border-b border-neutral-200 last:border-b-0">
        <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mb-1">
          {article.category_name && (
            <span className="font-bold text-red-600 uppercase tracking-wider">
              {article.category_name}
            </span>
          )}
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <time dateTime={article.published_at || undefined}>{formattedDate}</time>
        </div>

        <a href={`/article/${article.slug}`} onClick={handleClick} className="block">
          <h4 className="text-sm font-bold text-neutral-900 group-hover:text-red-600 leading-snug transition-colors line-clamp-2">
            {article.title}
          </h4>
        </a>
      </article>
    );
  }

  // 6. STANDARD CARD (Grid layout inspired by uDiscover Music)
  return (
    <article className="group flex flex-col justify-between bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300">
      <div>
        <div className="relative overflow-hidden bg-neutral-900 aspect-[16/10]">
          <a href={`/article/${article.slug}`} onClick={handleClick} className="block w-full h-full">
            <img
              src={article.featured_image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'}
              alt={article.featured_image_alt || article.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
            />
          </a>
          <div className="absolute top-3 left-3">
            <button
              onClick={handleCategoryClick}
              className="bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-sm hover:bg-red-700 transition-colors cursor-pointer"
            >
              {article.category_name || 'Music'}
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mb-2">
            <time dateTime={article.published_at || undefined}>{formattedDate}</time>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{readTimeEst} min read</span>
          </div>

          <a href={`/article/${article.slug}`} onClick={handleClick} className="block mb-2">
            <h3 className="text-base sm:text-lg font-black text-neutral-950 group-hover:text-red-600 leading-snug transition-colors line-clamp-2">
              {article.title}
            </h3>
          </a>

          <p className="text-neutral-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-500 font-medium">By {article.author_name || 'Staff'}</span>
        <a
          href={`/article/${article.slug}`}
          onClick={handleClick}
          className="inline-flex items-center gap-1 font-bold text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wider text-[11px]"
        >
          <span>Read More</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </article>
  );
};
