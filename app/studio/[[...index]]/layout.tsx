import type { Metadata } from "next";

import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "SLS G‑12 — Sanity Studio",
};

/** Re-export Sanity Studio viewport (matches Next defaults for embedded Studio). */
export const viewport = studioViewport satisfies typeof studioViewport;

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
