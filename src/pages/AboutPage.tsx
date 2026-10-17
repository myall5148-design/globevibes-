import React, { useEffect } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { updatePageSeo } from '../utils/seo';
import { ShieldCheck, Target, Award, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'About Our Publication – Globevibes',
      description: 'Our journalistic mission, code of ethics, standards of verification, and editorial background.',
      ogType: 'website'
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8">
      <Breadcrumb items={[{ label: 'About' }]} onNavigate={onNavigate} className="mb-6" />

      <header className="pb-8 border-b border-stone-200 mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-red-600 block mb-2 font-bold">
          Editorial Charter
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4 tracking-tight">
          The Global Pulse of Music, Entertainment, and Culture
        </h1>
        <p className="font-serif text-lg text-neutral-600 leading-relaxed italic">
          Globevibes is an independent entertainment publication delivering high-impact music journalism, artist exclusives, cinematic breakdowns, and worldwide pop culture analysis with a special spotlight on the global Afrobeats movement.
        </p>
      </header>

      <div className="prose prose-neutral font-editorial text-base sm:text-lg leading-relaxed text-neutral-800 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-neutral-950 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-600" />
            <span>Our Founding Philosophy</span>
          </h2>
          <p>
            In an era of fleeting viral snippets and algorithmic noise, meaningful music and entertainment storytelling is more essential than ever. We founded Globevibes on a singular premise: the sounds, films, and cultural creators shaping humanity deserve deep, respectful, and authoritative coverage.
          </p>
          <p>
            From the historic global rise of Afrobeats, Amapiano, and Nollywood to landmark album retrospectives and stadium tours, Globevibes documents culture as it happens—connecting artists with their worldwide fan communities.
          </p>
        </section>

        <section className="space-y-4 border-t border-neutral-200 pt-8">
          <h2 className="text-2xl font-black text-neutral-950 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-600" />
            <span>Editorial Standards &amp; Independence</span>
          </h2>
          <p>
            Our editorial integrity is paramount. All reviews, artist spotlights, and cultural dispatches are crafted with honesty and factual rigor:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 font-sans text-sm sm:text-base">
            <li><strong>Editorial Independence:</strong> Record labels and film studios have no preview rights, influence, or veto over our reviews or cultural commentary.</li>
            <li><strong>Cultural Authenticity:</strong> We collaborate with music journalists and cultural insiders across Lagos, London, New York, and Johannesburg.</li>
            <li><strong>Accurate Reporting:</strong> When updates or corrections occur, we issue prompt, transparent updates.</li>
          </ul>
        </section>

        <section className="space-y-4 border-t border-neutral-200 pt-8">
          <h2 className="text-2xl font-black text-neutral-950 flex items-center gap-2">
            <Users className="w-5 h-5 text-red-600" />
            <span>Editorial Bureaus</span>
          </h2>
          <p>
            Our journalists operate across specialized entertainment desks:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
            <div className="p-4 border border-neutral-200 bg-neutral-50 rounded-lg">
              <h3 className="font-bold text-neutral-900 text-base">Music &amp; Album Spotlights</h3>
              <p className="text-xs text-neutral-600 mt-1">Global charts, new singles, album breakdowns, concert tours, and vinyl culture.</p>
            </div>
            <div className="p-4 border border-neutral-200 bg-neutral-50 rounded-lg">
              <h3 className="font-bold text-neutral-900 text-base">African Entertainment</h3>
              <p className="text-xs text-neutral-600 mt-1">Afrobeats, Amapiano, Nollywood prestige cinema, and Pan-African creative stars.</p>
            </div>
            <div className="p-4 border border-neutral-200 bg-neutral-50 rounded-lg">
              <h3 className="font-bold text-neutral-900 text-base">Screen &amp; Television</h3>
              <p className="text-xs text-neutral-600 mt-1">Blockbuster cinema, streaming hits, Cannes, TIFF, and behind-the-scenes filmmaking.</p>
            </div>
            <div className="p-4 border border-neutral-200 bg-neutral-50 rounded-lg">
              <h3 className="font-bold text-neutral-900 text-base">Celebrity News &amp; Trending</h3>
              <p className="text-xs text-neutral-600 mt-1">Exclusive interviews, Grammy previews, viral social moments, and VIP events.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-200 pt-8 text-sm font-sans text-neutral-600">
          <p>
            For artist submissions, press releases, or general correspondence, reach out to our team at{' '}
            <button onClick={() => onNavigate('/contact')} className="text-red-600 font-bold underline underline-offset-4 hover:text-red-700 cursor-pointer">
              our Contact page
            </button>.
          </p>
        </section>
      </div>
    </div>
  );
};
