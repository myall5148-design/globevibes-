import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { api } from '../services/api';
import { ArticleCard } from '../components/ArticleCard';
import { AdPlacement } from '../components/AdPlacement';
import { Breadcrumb } from '../components/Breadcrumb';
import { updatePageSeo } from '../utils/seo';
import { Search as SearchIcon } from 'lucide-react';

interface SearchPageProps {
  initialQuery?: string;
  onNavigate: (path: string) => void;
}

export const SearchPage: React.FC<SearchPageProps> = ({ initialQuery = '', onNavigate }) => {
  const [query, setQuery] = useState(initialQuery);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setQuery(initialQuery);
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setTotal(0);
      setSearched(false);
      return;
    }

    const runSearch = async () => {
      try {
        setLoading(true);
        setSearched(true);
        const res = await api.getArticles({ search: searchTerm.trim(), limit: 30 });
        setResults(res.articles);
        setTotal(res.total);

        updatePageSeo({
          title: `Search: "${searchTerm}" – Globevibes`,
          description: `Search results for query "${searchTerm}" on Globevibes news archive.`,
          ogType: 'website'
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    runSearch();
  }, [searchTerm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchTerm(query.trim());
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
      <Breadcrumb items={[{ label: 'Search' }]} onNavigate={onNavigate} className="mb-6" />

      {/* Header & Search Bar */}
      <header className="pb-8 border-b border-stone-200 mb-8 max-w-3xl">
        <h1 className="font-editorial text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Search the Archives
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search news articles, music stories, artists, entertainment..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-neutral-900"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>

        {searched && (
          <div className="mt-4 text-xs font-mono text-neutral-500">
            {loading ? (
              <span>Scanning editorial archives...</span>
            ) : (
              <span>
                Found <strong>{total}</strong> {total === 1 ? 'story' : 'stories'} matching &quot;{searchTerm}&quot;
              </span>
            )}
          </div>
        )}
      </header>

      {/* Search Page Ad Placement */}
      <AdPlacement slotKey="search_page" />

      {/* Results List */}
      {loading ? (
        <div className="py-20 text-center">
          <div className="inline-block w-8 h-8 border-2 border-neutral-300 border-t-red-600 rounded-full animate-spin mb-4" />
          <p className="text-sm font-mono text-neutral-500">Searching records...</p>
        </div>
      ) : searched && results.length === 0 ? (
        <div className="py-16 text-center border border-neutral-200 rounded-xl bg-neutral-50 max-w-2xl mx-auto space-y-3 p-6">
          <h3 className="text-xl font-black text-neutral-900">
            No matching stories found
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
            We could not find any published articles matching &quot;{searchTerm}&quot;. Try searching for popular topics such as &quot;Afrobeats&quot;, &quot;Burna Boy&quot;, &quot;Nollywood&quot;, &quot;Grammys&quot;, or &quot;Concerts&quot;.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                setQuery('Afrobeats');
                setSearchTerm('Afrobeats');
              }}
              className="px-3 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-semibold rounded-md cursor-pointer transition-colors"
            >
              Afrobeats
            </button>
            <button
              onClick={() => {
                setQuery('Music');
                setSearchTerm('Music');
              }}
              className="px-3 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-semibold rounded-md cursor-pointer transition-colors"
            >
              Music
            </button>
            <button
              onClick={() => {
                setQuery('Nollywood');
                setSearchTerm('Nollywood');
              }}
              className="px-3 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs font-semibold rounded-md cursor-pointer transition-colors"
            >
              Nollywood
            </button>
            <button
              onClick={() => onNavigate('/articles')}
              className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-red-700 cursor-pointer transition-colors"
            >
              Browse All Articles
            </button>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-stone-200 max-w-4xl">
          {results.map((art) => (
            <ArticleCard key={art.id} article={art} onNavigate={onNavigate} variant="horizontal" />
          ))}
        </div>
      )}
    </div>
  );
};
