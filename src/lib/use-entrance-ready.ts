"use client";

import { useEffect, useState } from "react";

/**
 * Turns on once React has hydrated and the browser has spare time.
 *
 * Entrance animations that start during hydration can burn their whole
 * duration while the main thread is blocked — the timeline keeps running even
 * though no frame is painted, so the reveal is never seen and everything just
 * pops in. Waiting for the first idle moment means every animation starts on
 * frames the browser can actually render.
 */
export function useEntranceReady() {
   const [ready, setReady] = useState(false);

   useEffect(() => {
      const start = () => setReady(true);
      const idle = typeof window.requestIdleCallback === "function";
      const pending = idle
         ? window.requestIdleCallback(start, { timeout: 400 })
         : window.setTimeout(start, 50);

      return () => {
         if (idle) {
            window.cancelIdleCallback(pending);
         } else {
            window.clearTimeout(pending);
         }
      };
   }, []);

   return ready;
}
