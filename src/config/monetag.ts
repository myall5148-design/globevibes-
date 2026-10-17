/**
 * Global Monetag Smart Link Configuration
 * Replace the placeholder with your actual Monetag Smart Link URL.
 * When left as the placeholder, View More buttons are gracefully disabled
 * to prevent visitor misdirection.
 */
export const MONETAG_SMART_LINK = "PASTE_MY_MONETAG_SMART_LINK_HERE";

/**
 * Validates whether the configured Smart Link is active and valid
 */
export function isMonetagSmartLinkActive(customUrl?: string | null): boolean {
  const url = customUrl || MONETAG_SMART_LINK;
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (trimmed === '' || trimmed === 'PASTE_MY_MONETAG_SMART_LINK_HERE') return false;
  return trimmed.startsWith('http://') || trimmed.startsWith('https://');
}

/**
 * Retrieves the effective Monetag Smart Link destination
 */
export function getMonetagSmartLink(customUrl?: string | null): string {
  if (customUrl && typeof customUrl === 'string' && customUrl.trim() !== '' && customUrl.trim() !== 'PASTE_MY_MONETAG_SMART_LINK_HERE') {
    return customUrl.trim();
  }
  return MONETAG_SMART_LINK.trim();
}
