/**
 * Safe LocalStorage and SessionStorage wrapper that prevents fatal runtime exceptions
 * in restrictive mobile browsers, Incognito/Private modes, and sandboxed iframes.
 */

const memoryStore: Record<string, string> = {};
const sessionMemoryStore: Record<string, string> = {};

export const safeStorage = {
  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch {
      // Fallback silently if localStorage is restricted
    }
    return memoryStore[key] ?? null;
  },

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Fallback silently
    }
    memoryStore[key] = value;
  },

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Fallback silently
    }
    delete memoryStore[key];
  },

  getSessionItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        const val = window.sessionStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch {
      // Fallback silently if sessionStorage is restricted
    }
    return sessionMemoryStore[key] ?? null;
  },

  setSessionItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(key, value);
      }
    } catch {
      // Fallback silently
    }
    sessionMemoryStore[key] = value;
  },

  removeSessionItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(key);
      }
    } catch {
      // Fallback silently
    }
    delete sessionMemoryStore[key];
  }
};

