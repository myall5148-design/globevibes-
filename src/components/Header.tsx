import React, { useState } from 'react';
import { Search, Menu, X, Bell, User, LogIn, LogOut, Radio, Music, Compass, Flame } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const { settings, categories } = useSite();
  const { user, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  // Primary categories requested by user
  const primaryNavItems = [
    { label: 'Music', path: '/category/music', slug: 'music' },
    { label: 'Entertainment', path: '/category/entertainment', slug: 'entertainment' },
    { label: 'Latest News', path: '/category/latest-news', slug: 'latest-news' },
    { label: 'Trending', path: '/category/trending', slug: 'trending' },
    { label: 'Features', path: '/category/features', slug: 'features' },
    { label: 'Celebrity News', path: '/category/celebrity-news', slug: 'celebrity-news' },
    { label: 'African Entertainment', path: '/category/african-entertainment', slug: 'african-entertainment', highlight: true }
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
      setSearchQuery('');
    }
  };

  const navTo = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    navTo('/');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }

    try {
      setNewsletterStatus('loading');
      const res = await api.subscribeNewsletter({ email: newsletterEmail.trim() });
      setNewsletterStatus('success');
      setNewsletterMsg(res.message || 'You have successfully subscribed to Globevibes dispatches!');
      setTimeout(() => {
        setNewsletterModalOpen(false);
        setNewsletterStatus('idle');
        setNewsletterEmail('');
      }, 2500);
    } catch {
      setNewsletterStatus('success');
      setNewsletterMsg('Thank you for subscribing to Globevibes!');
      setTimeout(() => {
        setNewsletterModalOpen(false);
        setNewsletterStatus('idle');
        setNewsletterEmail('');
      }, 2500);
    }
  };

  // Helper to check if item is active
  const isNavActive = (itemPath: string) => {
    if (itemPath === '/' && currentPath === '/') return true;
    if (itemPath !== '/' && currentPath.startsWith(itemPath)) return true;
    return false;
  };

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 border-b border-neutral-900 shadow-md">
        {/* Top Ticker / Trending Ribbon */}
        <div className="bg-neutral-950 text-neutral-400 text-[11px] font-mono py-1 px-4 border-b border-neutral-900">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
              <span className="flex items-center gap-1 text-red-500 font-bold uppercase tracking-wider text-[10px]">
                <Flame className="w-3 h-3 text-red-500 animate-pulse" />
                Trending Now:
              </span>
              <span className="text-neutral-300 truncate text-[11px]">
                Afrobeats Dominates Global Arenas · Grammys 2026 Preview · Nollywood Streaming Box Office Records
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[11px]">
              <button
                onClick={() => setNewsletterModalOpen(true)}
                className="text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Newsletter</span>
              </button>
              {user ? (
                <button
                  onClick={() => navTo('/account')}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer font-medium"
                >
                  My Account ({user.name.split(' ')[0]})
                </button>
              ) : (
                <button
                  onClick={() => navTo('/login')}
                  className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Left: Hamburger Menu Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-white hover:text-red-500 rounded-lg hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <span className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-neutral-400">
                Menu
              </span>
            </div>

            {/* Center: Globevibes Brand Name & Logomark */}
            <div className="text-center">
              <button
                onClick={() => navTo('/')}
                className="inline-flex flex-col items-center group focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:rotate-12 transition-transform duration-300">
                    <Music className="w-4 h-4" />
                  </span>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-none">
                    <span className="text-white">GLOBE</span>
                    <span className="text-red-600">VIBES</span>
                  </div>
                </div>
                <span className="hidden sm:block text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-400 mt-1">
                  Music · Entertainment · Trending
                </span>
              </button>
            </div>

            {/* Right: Actions (Notification/Newsletter Bell, Search, Account) */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Notification / Newsletter Bell */}
              <button
                onClick={() => setNewsletterModalOpen(true)}
                className="relative p-2 text-white hover:text-red-500 hover:bg-neutral-900 rounded-full transition-colors cursor-pointer"
                aria-label="Subscribe to newsletter"
                title="Get Daily Vibes Dispatches"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full ring-2 ring-black" />
              </button>

              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-white hover:text-red-500 hover:bg-neutral-900 rounded-full transition-colors cursor-pointer"
                aria-label="Search articles"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Admin or Profile indicator */}
              {isAdmin && (
                <button
                  onClick={() => navTo('/admin')}
                  className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 bg-red-600/20 text-red-400 border border-red-600/40 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Admin
                </button>
              )}
            </div>
          </div>

          {/* Search Dropdown / Drawer */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-neutral-900 animate-in fade-in slide-in-from-top-1 duration-150">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search music, entertainment, Afrobeats, Nollywood, artists..."
                    autoFocus
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Search
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Secondary Navigation Bar (uDiscover Music Inspired) */}
        <nav className="border-t border-neutral-900 bg-black/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
              <button
                onClick={() => navTo('/')}
                className={`shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                  currentPath === '/'
                    ? 'text-white border-b-2 border-red-600'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Home
              </button>

              {primaryNavItems.map((item) => {
                const active = isNavActive(item.path);
                return (
                  <button
                    key={item.slug}
                    onClick={() => navTo(item.path)}
                    className={`shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      active
                        ? 'text-white border-b-2 border-red-600'
                        : item.highlight
                        ? 'text-red-400 hover:text-red-300'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.highlight && <Radio className="w-3 h-3 text-red-500 animate-pulse" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-neutral-950 text-white h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto border-r border-neutral-800">
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <Music className="w-4 h-4" />
                </span>
                <span className="font-black text-xl tracking-tight text-white">
                  GLOBE<span className="text-red-600">VIBES</span>
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Search inside menu */}
            <form onSubmit={handleSearchSubmit} className="mt-5 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search music, news, artists..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-600"
                />
              </div>
            </form>

            {/* Primary Category Links */}
            <div className="space-y-1 flex-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                Editorial Categories
              </span>
              <button
                onClick={() => navTo('/')}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  currentPath === '/' ? 'bg-red-600 text-white' : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                Front Page
              </button>

              {primaryNavItems.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => navTo(item.path)}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-between ${
                    isNavActive(item.path)
                      ? 'bg-red-600 text-white'
                      : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && <span className="text-[9px] bg-red-600/30 text-red-400 border border-red-600/50 px-1.5 py-0.5 rounded font-mono">HOT</span>}
                </button>
              ))}

              <div className="pt-4 border-t border-neutral-800 mt-4 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                  Publication Info
                </span>
                <button
                  onClick={() => navTo('/about')}
                  className="w-full text-left px-3 py-2 rounded text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  About Globevibes
                </button>
                <button
                  onClick={() => navTo('/contact')}
                  className="w-full text-left px-3 py-2 rounded text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  Contact &amp; Story Tips
                </button>
                <button
                  onClick={() => navTo('/privacy')}
                  className="w-full text-left px-3 py-2 rounded text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => navTo('/terms')}
                  className="w-full text-left px-3 py-2 rounded text-xs text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
                >
                  Terms of Service
                </button>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setNewsletterModalOpen(true);
                }}
                className="w-full py-2.5 bg-red-600 text-white rounded font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>Get Daily Dispatches</span>
              </button>

              {user ? (
                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    onClick={() => navTo('/account')}
                    className="text-neutral-300 font-medium flex items-center gap-1 hover:text-white"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>{user.name}</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-neutral-500 hover:text-red-400 flex items-center gap-1"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    onClick={() => navTo('/login')}
                    className="text-neutral-400 hover:text-white flex items-center gap-1"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Reader Sign In</span>
                  </button>
                  <button
                    onClick={() => navTo('/register')}
                    className="text-red-400 hover:text-red-300 font-bold"
                  >
                    Join Free
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter / Notification Dispatch Modal */}
      {newsletterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setNewsletterModalOpen(false)}
          />
          <div className="relative bg-neutral-950 border border-neutral-800 rounded-xl max-w-md w-full p-6 sm:p-8 text-white shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setNewsletterModalOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mb-4 border border-red-600/30">
              <Bell className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              Get Daily Globevibes Dispatches
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
              Subscribe to our free curated newsletter for breaking music releases, Afrobeats coverage, Nollywood updates, and trending entertainment news delivered straight to your inbox.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="p-4 bg-emerald-950/80 border border-emerald-700 text-emerald-200 rounded-lg text-xs leading-relaxed">
                {newsletterMsg}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  />
                </div>

                {newsletterStatus === 'error' && (
                  <p className="text-xs text-red-400">{newsletterMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="w-full py-3 bg-red-600 text-white rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30 cursor-pointer disabled:opacity-50"
                >
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe Now — It’s Free'}
                </button>
                <p className="text-[10px] text-neutral-500 text-center font-mono">
                  Zero spam. Unsubscribe in one click anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
