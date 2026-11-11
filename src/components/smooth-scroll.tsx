"use client";

import type { LenisOptions } from "lenis";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

/**
 * Scroll feel tuned for "melting butter" — a soft eased glide that still keeps
 * pace with the wheel, so the page never feels like it is dragging its feet.
 */
const SMOOTH_SCROLL_OPTIONS = {
   // How fast the scroll catches up to the input. `lerp` runs 0 (never
   // arrives) to 1 (no smoothing). 0.1 is Lenis' tuned default: the content
   // trails just behind the input, so stops and direction changes carry a
   // little opposing weight without feeling sluggish.
   lerp: 0.1,
   smoothWheel: true,
   // Neutral multipliers: travel stays 1:1 with the wheel and touch, so the
   // smoothing never fights the amount the user actually scrolled.
   wheelMultiplier: 1,
   touchMultiplier: 1,
   // Route in-page `#anchor` links (the navbar) through the same easing.
   anchors: true,
   // Don't let leftover momentum carry across a navigation.
   stopInertiaOnNavigate: true,
} satisfies LenisOptions;

export default function SmoothScroll({ children }: { children: ReactNode }) {
   return (
      <ReactLenis root options={SMOOTH_SCROLL_OPTIONS}>
         {children}
      </ReactLenis>
   );
}
