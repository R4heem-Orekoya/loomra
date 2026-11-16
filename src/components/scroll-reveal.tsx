"use client";

import { animate } from "motion/react";
import { useEffect } from "react";
import { EASE_REVEAL } from "@/lib/ease";
import { useEntranceReady } from "@/lib/use-entrance-ready";

/**
 * The site-wide half of the reveal system.
 *
 * Each section is split into its visible blocks — headers, card grids,
 * figures, stat rows — and every block rises in on its own as it is scrolled
 * to. Revealing blocks rather than whole sections is what makes the motion
 * legible: a section can be a thousand pixels tall, so a single reveal on the
 * section plays off the bottom of the screen and is over long before the copy
 * is anywhere near the reader. The move is the same one the hero plays: rise
 * out of an 8px blur.
 *
 * The trigger line sits at 72% of the viewport, above the bottom edge, so a
 * block has genuinely entered the screen before it plays. Blocks with their
 * own entrance opt their section out with `data-reveal="off"` (the fees
 * calculator, the logo wall, the pinned used-by section), and anything already
 * past the line at mount is left visible so nothing flashes or plays twice.
 *
 * The hiding happens after hydration rather than during it: writing inline
 * styles onto markup React has not hydrated yet makes hydration see attributes
 * the server never sent. Waiting for the first idle moment also means the
 * styles land on frames the browser can actually paint.
 */
const OFFSET = 40;
const DURATION = 0.8;
const STAGGER = 0.08;
/** Starting blur in px, matching the entrance the hero and fees already use. */
const BLUR = 8;
/** Fraction of the viewport a block must reach before it reveals. */
const TRIGGER_LINE = 0.72;

type Target = {
   el: HTMLElement;
   step: number;
};

/** The blocks inside a section that should carry the reveal. */
function collectTargets(section: HTMLElement): HTMLElement[] {
   const wrappers = Array.from(section.children).filter(
      (child): child is HTMLElement =>
         child instanceof HTMLElement && child.tagName === "DIV",
   );
   const containers =
      wrappers.length === 1 ? Array.from(wrappers[0].children) : wrappers;

   // A single wrapper around a layout (a panel, a two-column grid, a list)
   // reads better when its children rise one after another than when the
   // whole wrapper moves as one block. Figures keep their own caption timing.
   if (
      containers.length === 1 &&
      containers[0] instanceof HTMLElement &&
      ["DIV", "UL", "OL", "DL"].includes(containers[0].tagName) &&
      containers[0].children.length > 1
   ) {
      return Array.from(containers[0].children) as HTMLElement[];
   }

   return containers as HTMLElement[];
}

/** Undo anything a previous mount left on a block. */
function clearReveal(el: HTMLElement) {
   el.style.opacity = "";
   el.style.transform = "";
   el.style.filter = "";
   el.style.willChange = "";
}

export default function ScrollReveal() {
   const ready = useEntranceReady();

   useEffect(() => {
      if (!ready) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
         return;
      }

      const main = document.getElementById("main");
      if (!main) return;

      const sections = Array.from(
         main.querySelectorAll<HTMLElement>("section"),
      ).filter(
         (section) =>
            section.dataset.reveal !== "off" &&
            !section.parentElement?.closest("section"),
      );

      const targets: Target[] = [];
      for (const section of sections) {
         collectTargets(section).forEach((el, step) => {
            const { position } = getComputedStyle(el);
            if (position === "absolute" || position === "fixed") return;
            // A block with no area never crosses the trigger line, so hiding
            // it would hide it for good.
            const rect = el.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) {
               clearReveal(el);
               return;
            }
            targets.push({ el, step });
         });
      }

      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (!entry.isIntersecting) continue;

               const el = entry.target as HTMLElement;
               observer.unobserve(el);

               const step = Number(el.dataset.revealStep ?? 0);

               animate(
                  el,
                  {
                     opacity: [0, 1],
                     y: [OFFSET, 0],
                     filter: [`blur(${BLUR}px)`, "blur(0px)"],
                  },
                  {
                     duration: DURATION,
                     delay: step * STAGGER,
                     ease: EASE_REVEAL,
                  },
               )
                  .finished.then(() => {
                     // Drop the filter on the next frame: a standing
                     // `blur(0px)` keeps a compositing layer (and a containing
                     // block) on every block for the rest of the page's life,
                     // but the animation writes its last keyframe after this
                     // promise resolves, so clearing any sooner is undone.
                     requestAnimationFrame(() => {
                        el.style.filter = "";
                        el.style.willChange = "auto";
                     });
                  })
                  .catch(() => {
                     // Navigating away mid-reveal cancels the animation; the
                     // element is going with it, so there is nothing to reset.
                  });
            }
         },
         {
            threshold: 0,
            rootMargin: `0px 0px ${-(1 - TRIGGER_LINE) * 100}% 0px`,
         },
      );

      for (const { el, step } of targets) {
         const top = el.getBoundingClientRect().top + window.scrollY;

         // Already past the line when the page mounts (a deep link that lands
         // mid-page, or a restored scroll position): it belongs to the
         // entrance, not the scroll. Clear anything a previous mount left
         // behind, because the router can restore the same nodes with the
         // hidden styles still on them.
         if (top < window.scrollY + window.innerHeight * TRIGGER_LINE) {
            clearReveal(el);
            continue;
         }

         el.dataset.revealStep = String(step);
         el.style.opacity = "0";
         el.style.transform = `translateY(${OFFSET}px)`;
         el.style.filter = `blur(${BLUR}px)`;
         el.style.willChange = "transform, opacity, filter";
         observer.observe(el);
      }

      return () => observer.disconnect();
   }, [ready]);

   return null;
}
