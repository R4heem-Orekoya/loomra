"use client";

import {
   type TargetAndTransition,
   type Transition,
   useReducedMotion,
   type ViewportOptions,
} from "motion/react";
import { EASE_ENTER } from "./ease";

/**
 * Every entrance on the page is the same move: a short rise out of a soft
 * blur. These hooks only decide when it starts — on mount for the hero, on
 * scroll for everything below it.
 */
const ENTRANCE = {
   stagger: 0.18,
   duration: 0.8,
   offset: 12,
   blur: 8,
   amount: 0.4,
};

export type RevealOptions = {
   /** Seconds between one element and the next. */
   stagger?: number;
   /** How long a single element takes. */
   duration?: number;
   /** Pixels the element rises from. */
   offset?: number;
   /** Starting blur in px. Pass 0 to leave the filter out. */
   blur?: number;
   /** Fraction of the element that must be on screen before it plays. */
   amount?: number;
};

function states({
   offset = ENTRANCE.offset,
   blur = ENTRANCE.blur,
}: RevealOptions) {
   const blurred = blur > 0;

   return {
      hidden: {
         opacity: 0,
         y: offset,
         ...(blurred ? { filter: `blur(${blur}px)` } : {}),
      } satisfies TargetAndTransition,
      visible: {
         opacity: 1,
         y: 0,
         ...(blurred ? { filter: "blur(0px)" } : {}),
      } satisfies TargetAndTransition,
   };
}

function timing(
   step: number,
   { stagger = ENTRANCE.stagger, duration = ENTRANCE.duration }: RevealOptions,
   reduceMotion: boolean | null,
): Transition {
   return {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : step * stagger,
      ease: EASE_ENTER,
   };
}

/**
 * Scroll reveal — one call per element, in stagger steps:
 *
 *   const copy = useReveal();
 *   <motion.h2 {...copy(0)}>…</motion.h2>
 *   <motion.p {...copy(1)}>…</motion.p>
 */
export function useReveal(options: RevealOptions = {}) {
   const reduceMotion = useReducedMotion();
   const { hidden, visible } = states(options);
   const viewport: ViewportOptions = {
      once: true,
      amount: options.amount ?? ENTRANCE.amount,
   };

   return (step = 0) => ({
      initial: hidden,
      whileInView: visible,
      viewport,
      transition: timing(step, options, reduceMotion),
   });
}

/**
 * The same motion for a page-load entrance, held at its hidden state until
 * `ready` so hydration can't swallow the animation.
 */
export function useEntrance(ready: boolean, options: RevealOptions = {}) {
   const reduceMotion = useReducedMotion();
   const { hidden, visible } = states(options);

   return (step = 0) => ({
      initial: hidden,
      animate: ready ? visible : hidden,
      transition: timing(step, options, reduceMotion),
   });
}
