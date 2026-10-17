import { safeStorage } from './storage';
import { DeviceType, VisitorUserType } from '../types';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || '/api';

/**
 * Returns a persistent privacy-conscious visitor identifier stored in localStorage.
 * No personally identifiable hardware hashes or IP tracking are performed.
 */
export function getOrCreateVisitorId(): { visitorId: string; isNew: boolean } {
  const STORAGE_KEY = 'globevibes_visitor_id';
  let visitorId = safeStorage.getItem(STORAGE_KEY);
  let isNew = false;

  if (!visitorId) {
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    visitorId = `gv_vis_${Date.now().toString(36)}_${randomSuffix}`;
    safeStorage.setItem(STORAGE_KEY, visitorId);
    isNew = true;
  }

  return { visitorId, isNew };
}

/**
 * Returns a session identifier stored in sessionStorage.
 */
export function getOrCreateSessionId(): string {
  const SESSION_KEY = 'globevibes_session_id';
  let sessionId = safeStorage.getSessionItem(SESSION_KEY);

  if (!sessionId) {
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    sessionId = `gv_ses_${Date.now().toString(36)}_${randomSuffix}`;
    safeStorage.setSessionItem(SESSION_KEY, sessionId);
  }

  return sessionId;
}

/**
 * Classifies device category from user agent and screen geometry.
 */
export function detectDeviceCategory(): DeviceType {
  if (typeof window === 'undefined') return 'desktop';

  const ua = (navigator.userAgent || '').toLowerCase();
  const width = window.innerWidth || screen.width || 1024;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) || (width >= 640 && width <= 1024)) {
    return 'tablet';
  }

  if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(ua) || width < 640) {
    return 'mobile';
  }

  return 'desktop';
}

/**
 * Classifies traffic source based on document.referrer.
 */
export function detectTrafficSource(): { source: string; referrer: string | null } {
  if (typeof document === 'undefined') {
    return { source: 'direct', referrer: null };
  }

  const referrer = document.referrer ? document.referrer.trim() : '';
  if (!referrer) {
    return { source: 'direct', referrer: null };
  }

  try {
    const refUrl = new URL(referrer);
    const host = refUrl.hostname.toLowerCase();
    const currentHost = window.location.hostname.toLowerCase();

    if (host === currentHost) {
      return { source: 'direct', referrer: null };
    }

    if (host.includes('google.') || host.includes('google-analytics') || host.includes('googlesyndication')) {
      return { source: 'google_search', referrer };
    }
    if (host.includes('facebook.') || host.includes('fb.me') || host.includes('fb.com')) {
      return { source: 'facebook', referrer };
    }
    if (host.includes('instagram.')) {
      return { source: 'instagram', referrer };
    }
    if (host.includes('tiktok.')) {
      return { source: 'tiktok', referrer };
    }
    if (host.includes('twitter.') || host.includes('t.co') || host.includes('x.com')) {
      return { source: 'twitter', referrer };
    }
    if (host.includes('youtube.') || host.includes('youtu.be')) {
      return { source: 'youtube', referrer };
    }

    return { source: 'referral', referrer };
  } catch {
    return { source: 'referral', referrer };
  }
}

/**
 * Simple OS detection from userAgent string.
 */
function detectOperatingSystem(): string {
  if (typeof navigator === 'undefined') return 'Unknown';
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
  if (/windows/i.test(ua)) return 'Windows';
  if (/macintosh|mac os x/i.test(ua)) return 'macOS';
  if (/linux/i.test(ua)) return 'Linux';
  return 'Other';
}

/**
 * Simple Browser detection.
 */
function detectBrowser(): string {
  if (typeof navigator === 'undefined') return 'Unknown';
  const ua = navigator.userAgent || '';
  if (/edg/i.test(ua)) return 'Edge';
  if (/chrome|crios/i.test(ua) && !/opr|opera/i.test(ua)) return 'Chrome';
  if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) return 'Safari';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/opera|opr/i.test(ua)) return 'Opera';
  return 'Browser';
}

// Last recorded path to prevent rapid duplicate events
let lastRecordedPath = '';
let lastRecordedTime = 0;

/**
 * Automatically records a page view event across all user categories.
 * Never blocks rendering; fails silently in case of network disconnects.
 */
export async function trackPageView(
  pagePath: string,
  pageTitle?: string
): Promise<void> {
  if (typeof window === 'undefined') return;

  // Prevent duplicate track events on the exact same path within 3 seconds
  const now = Date.now();
  if (pagePath === lastRecordedPath && now - lastRecordedTime < 3000) {
    return;
  }
  lastRecordedPath = pagePath;
  lastRecordedTime = now;

  try {
    const { visitorId, isNew } = getOrCreateVisitorId();
    const sessionId = getOrCreateSessionId();
    const deviceType = detectDeviceCategory();
    const { source, referrer } = detectTrafficSource();
    const browser = detectBrowser();
    const os = detectOperatingSystem();

    // Check user state: Admin / Registered / Subscriber / Anonymous
    let userType: VisitorUserType = 'anonymous';
    let userId: string | null = null;
    let userIdentifier: string | null = null;

    try {
      const storedUserRaw = safeStorage.getItem('globevibes_auth_user') || safeStorage.getItem('apex_auth_user');
      if (storedUserRaw) {
        const userObj = JSON.parse(storedUserRaw);
        if (userObj?.id) {
          userId = userObj.id;
          if (userObj.role === 'admin' || userObj.role === 'superadmin' || userObj.is_initial_admin === 1) {
            userType = 'admin';
            userIdentifier = `Admin (${userObj.name || userObj.email || 'Desk'})`;
          } else {
            userType = 'registered';
            userIdentifier = `Member (${userObj.name || 'Registered'})`;
          }
        }
      }

      // Check if subscriber email is saved in local storage
      if (userType === 'anonymous') {
        const subEmail = safeStorage.getItem('globevibes_subscriber_email');
        if (subEmail && typeof subEmail === 'string') {
          userType = 'subscriber';
          const parts = subEmail.split('@');
          const masked = parts[0].length > 2 ? `${parts[0].slice(0, 2)}***@${parts[1] || ''}` : subEmail;
          userIdentifier = `Subscriber (${masked})`;
        }
      }
    } catch {
      // Ignore user resolution error
    }

    if (!userIdentifier && userType === 'anonymous') {
      userIdentifier = `Anonymous Visitor #${visitorId.slice(-4)}`;
    }

    const payload = {
      visitor_id: visitorId,
      session_id: sessionId,
      page_path: pagePath,
      page_title: pageTitle || document.title || 'Globevibes',
      referrer,
      traffic_source: source,
      device_type: deviceType,
      browser,
      os,
      user_type: userType,
      user_id: userId,
      user_identifier: userIdentifier,
      is_new_visitor: isNew ? 1 : 0
    };

    // Attempt navigator.sendBeacon if available for non-blocking fire-and-forget
    const endpoint = `${API_BASE}/analytics/visit`;
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      const sent = navigator.sendBeacon(endpoint, blob);
      if (sent) return;
    }

    // Fallback to fetch
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {
      // Silently fail on offline/static hosting
    });
  } catch (err) {
    // Non-fatal, analytics must never throw or disrupt page experience
  }
}
