"use client";

import createGlobe from "cobe";
import Image from "next/image";
import { type CSSProperties, useEffect, useRef } from "react";

type Currency = {
   id: string;
   code: string;
   flag: string;
   location: [number, number];
   /** Horizontal nudge so flags for neighbouring countries don't overlap. */
   nudgeX?: number;
   rotate: number;
};

type Projected = {
   x: number;
   y: number;
   visible: boolean;
};

type StickerStyle = CSSProperties & {
   "--x"?: string;
   "--y"?: string;
};

const LAGOS: [number, number] = [6.52, 3.38];

const CURRENCIES: Currency[] = [
   {
      id: "usd",
      code: "USD",
      flag: "us",
      location: [40.71, -74.01],
      rotate: -6,
   },
   {
      id: "eur",
      code: "EUR",
      flag: "eu",
      location: [50.11, 8.68],
      rotate: 4,
   },
   {
      id: "gbp",
      code: "GBP",
      flag: "gb",
      location: [51.51, -0.13],
      nudgeX: -40,
      rotate: -3,
   },
   {
      id: "chf",
      code: "CHF",
      flag: "ch",
      location: [47.37, 8.54],
      nudgeX: 40,
      rotate: 7,
   },
   {
      id: "jpy",
      code: "JPY",
      flag: "jp",
      location: [35.68, 139.65],
      nudgeX: -20,
      rotate: 5,
   },
   {
      id: "cny",
      code: "CNY",
      flag: "cn",
      location: [31.23, 121.47],
      nudgeX: 20,
      rotate: -5,
   },
   {
      id: "ngn",
      code: "NGN",
      flag: "ng",
      location: LAGOS,
      rotate: -2,
   },
];

/** A small set of corridors between real currency hubs. */
const ROUTES: Array<[string, string]> = [
   ["gbp", "usd"],
   ["gbp", "eur"],
   ["eur", "chf"],
   ["gbp", "ngn"],
   ["gbp", "jpy"],
   ["jpy", "cny"],
];

const THETA = 0.3;
const MARKER_ELEVATION = 0.02;
const MARKER_RADIUS = 0.8 + MARKER_ELEVATION;
const DEG = Math.PI / 180;

const globeMask =
   "linear-gradient(to bottom, transparent 0%, black 32px, black 52%, transparent 100%)";

const locationById = new Map(
   CURRENCIES.map((currency) => [currency.id, currency.location]),
);

const ARCS = ROUTES.map(([from, to]) => ({
   from: locationById.get(from) ?? LAGOS,
   to: locationById.get(to) ?? LAGOS,
}));

/**
 * Mirrors cobe's marker projection so labels can be positioned without relying
 * on CSS anchor positioning support.
 */
function project(location: [number, number], phi: number): Projected {
   const [latitude, longitude] = location;
   const lat = latitude * DEG;
   const lon = longitude * DEG - Math.PI;
   const cosLat = Math.cos(lat);

   const x = -cosLat * Math.cos(lon) * MARKER_RADIUS;
   const y = Math.sin(lat) * MARKER_RADIUS;
   const z = cosLat * Math.sin(lon) * MARKER_RADIUS;

   const sinPhi = Math.sin(phi);
   const cosPhi = Math.cos(phi);
   const sinTheta = Math.sin(THETA);
   const cosTheta = Math.cos(THETA);

   const screenX = cosPhi * x + sinPhi * z;
   const screenY = sinPhi * sinTheta * x + cosTheta * y - cosPhi * sinTheta * z;
   const depth = -sinPhi * cosTheta * x + sinTheta * y + cosPhi * cosTheta * z;

   return {
      x: (screenX + 1) / 2,
      y: (1 - screenY) / 2,
      visible: depth >= 0 || screenX * screenX + screenY * screenY >= 0.64,
   };
}

export default function HeroGlobe() {
   const canvasRef = useRef<HTMLCanvasElement>(null);
   const stickerRefs = useRef<Record<string, HTMLDivElement | null>>({});

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;

      let phi = 0.2;
      let size = canvas.offsetWidth;
      let frame = 0;

      const globe = createGlobe(canvas, {
         devicePixelRatio: 2,
         width: size * 2,
         height: size * 2,
         phi,
         theta: THETA,
         dark: 0,
         diffuse: 1.2,
         mapSamples: 20000,
         mapBrightness: 6,
         baseColor: [0.93, 1, 0.95],
         markerColor: [0.043, 0.8, 0.318], // #0BCC51
         glowColor: [0.043, 0.8, 0.318],
         markerElevation: MARKER_ELEVATION,
         arcColor: [0.98, 0.35, 0.1], // warm coral, contrasts the green globe
         arcWidth: 0.8,
         arcHeight: 0.22,
         markers: CURRENCIES.map((currency) => ({
            location: currency.location,
            size: currency.id === "ngn" ? 0.1 : 0.06,
         })),
         arcs: ARCS,
      });

      const paintStickers = (currentPhi: number) => {
         for (const currency of CURRENCIES) {
            const sticker = stickerRefs.current[currency.id];
            if (!sticker) continue;

            const { x, y, visible } = project(currency.location, currentPhi);
            sticker.style.setProperty("--x", `${x * 100}%`);
            sticker.style.setProperty("--y", `${y * 100}%`);
            sticker.style.opacity = visible ? "1" : "0";
         }
      };

      const animate = () => {
         if (!reduceMotion) phi += 0.003;
         globe.update({ phi, width: size * 2, height: size * 2 });
         paintStickers(phi);
         frame = requestAnimationFrame(animate);
      };

      paintStickers(phi);
      frame = requestAnimationFrame(animate);

      const onResize = () => {
         size = canvas.offsetWidth;
      };
      window.addEventListener("resize", onResize);

      return () => {
         cancelAnimationFrame(frame);
         globe.destroy();
         window.removeEventListener("resize", onResize);
      };
   }, []);

   return (
      <section aria-hidden="true" className="relative h-[440px] md:h-[200px]">
         <div
            className="absolute inset-0 overflow-hidden"
            style={{ WebkitMaskImage: globeMask, maskImage: globeMask }}
         >
            <div className="relative mx-auto aspect-square w-[min(620px,100vw)]">
               <canvas ref={canvasRef} className="size-full" />

               {CURRENCIES.map((currency) => (
                  <div
                     key={currency.id}
                     ref={(element) => {
                        stickerRefs.current[currency.id] = element;
                     }}
                     style={
                        {
                           position: "absolute",
                           left: `clamp(38px, calc(var(--x, 50%) + ${currency.nudgeX ?? 0}px), calc(100% - 38px))`,
                           top: "var(--y, 50%)",
                           translate: "-50% calc(-100% - 10px)",
                           rotate: `${currency.rotate}deg`,
                           opacity: 0,
                           transition: "opacity 0.25s ease",
                        } as StickerStyle
                     }
                     className="pointer-events-none flex w-9 flex-col items-center"
                  >
                     <Image
                        src={`/flags/${currency.flag}.svg`}
                        alt=""
                        width={28}
                        height={28}
                        unoptimized
                        draggable={false}
                        className="size-7 rounded-full border-2 border-white object-cover shadow-[0_2px_8px_rgba(0,0,0,0.28)]"
                     />
                     <span className="mt-0.5 rounded-full bg-white px-1.5 py-0.5 text-[8px] font-bold leading-none tracking-tight text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
                        {currency.code}
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
