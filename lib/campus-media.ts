/** Official branch page (social updates). */
export const campusFacebookPhotosPage =
  "https://www.facebook.com/branchheadg12campus/" as const;

/**
 * Brand-only assets — do not reuse as section photography.
 */
export const siteBrand = {
  logo: "/logo.jpg",
  principalPortrait: "/principalphoto.jpg",
} as const;

/**
 * User-supplied photography from `/public` (first screen + featured campus).
 */
export const siteImagery = {
  /** Served from `/public/coverphoto.jpg` (not `.png`). */
  heroCover: "/coverphoto.jpg",
  /** Served from `/public/campusphoto.jpg`. */
  campusPhoto: "/campusphoto.jpg",
} as const;

export const heroCoverAlt =
  "SLS G-12 Campus—exterior and grounds at the Islamabad branch.";

export const campusPhotoAlt =
  "Campus views at SLS G-12, Service Road, Sector G-12, Islamabad.";

export const principalPortraitAlt =
  "Portrait of Adeela Rehman, Principal of SLS Montessori & High School, G‑12 Campus, Islamabad.";

export const schoolLogoAlt =
  "SLS Montessori, School, and College emblem—Seek the Light & Spread It—with prism and spectrum motif.";
