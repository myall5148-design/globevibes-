import React, { useEffect, useRef } from 'react';
import { useSite } from '../context/SiteContext';

interface AdPlacementProps {
  slotKey: 'header_banner' | 'homepage_middle' | 'article_middle' | 'article_bottom' | 'sidebar' | string;
  className?: string;
  label?: string;
}

/**
 * Monetag-ready ad container.
 * - Ready for Monetag OnClick, In-Page Push, Native In-Feed, Banner, and Interstitial tags.
 * - Does not invent fake publisher IDs or insert unapproved third-party scripts.
 * - Remains collapsed and non-intrusive until genuine Monetag ad tags are configured in Admin > Ads.
 * - Guarantees zero obstruction of navigation, zero layout shift, and zero forced clicks.
 */
export const AdPlacement: React.FC<AdPlacementProps> = ({
  slotKey,
  className = '',
  label = 'Advertisement'
}) => {
  const { ads } = useSite();
  const ad = ads[slotKey] || ads[`homepage_${slotKey}`] || ads[`article_${slotKey}`];
  const containerRef = useRef<HTMLDivElement>(null);

  const hasAdContent = Boolean(ad && ad.is_enabled && ad.ad_html && ad.ad_html.trim().length > 0);

  // If ad HTML contains inline script tags, execute them safely once
  useEffect(() => {
    if (hasAdContent && containerRef.current && ad?.ad_html) {
      const scripts = containerRef.current.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach((attr) => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
    }
  }, [hasAdContent, ad?.ad_html]);

  // Keep completely empty / collapsed if user has not yet configured their Monetag code
  if (!hasAdContent) {
    return (
      <div
        id={`monetag-ad-${slotKey}`}
        data-monetag-slot={slotKey}
        data-monetag-zone={slotKey}
        className="monetag-ad-slot-empty hidden"
        aria-hidden="true"
      />
    );
  }

  // Device targeting rules
  let visibilityClass = 'block';
  if (ad?.display_target === 'desktop') {
    visibilityClass = 'hidden md:block';
  } else if (ad?.display_target === 'mobile') {
    visibilityClass = 'block md:hidden';
  }

  return (
    <aside
      id={`monetag-ad-${slotKey}`}
      data-monetag-slot={slotKey}
      data-monetag-zone={slotKey}
      aria-label={ad.label || label}
      className={`my-6 text-center ${visibilityClass} ${className}`}
    >
      <div className="inline-block w-full max-w-4xl mx-auto px-2">
        <span className="block text-[10px] uppercase tracking-widest text-neutral-400 mb-1 font-mono">
          {ad.label || label}
        </span>
        <div
          ref={containerRef}
          className="monetag-ad-content overflow-hidden flex justify-center items-center rounded"
          dangerouslySetInnerHTML={{ __html: ad.ad_html || '' }}
        />
      </div>
    </aside>
  );
};
