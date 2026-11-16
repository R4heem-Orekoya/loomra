"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Audience = {
   title: string;
   kicker: string;
   copy: string;
   image: string;
   alt: string;
};

const AUDIENCES: Audience[] = [
   {
      title: "Freelancers",
      kicker: "Paid by clients abroad",
      copy: "Invoice in USD, EUR or GBP and withdraw in your local currency at the real mid-market rate.",
      image: "/used-by/freelancers.jpg",
      alt: "Illustration of a freelance designer working at a sunlit desk",
   },
   {
      title: "Founders",
      kicker: "A team across borders",
      copy: "Run contractor payroll in 100+ countries from one shared balance, with every fee shown up front.",
      image: "/used-by/founders.jpg",
      alt: "Illustration of two founders working together at a studio table",
   },
   {
      title: "Families",
      kicker: "Money sent home",
      copy: "Send in the currency they actually use — no pickup paperwork, no branch queue, no surprises.",
      image: "/used-by/families.jpg",
      alt: "Illustration of a woman at home reading a phone with a relieved smile",
   },
   {
      title: "Digital nomads",
      kicker: "Living on local currency",
      copy: "Hold several currencies, spend from the one you need, and skip the airport kiosk.",
      image: "/used-by/nomads.jpg",
      alt: "Illustration of a nomad working on a laptop at a coastal balcony",
   },
   {
      title: "Online sellers",
      kicker: "Marketplace payouts",
      copy: "Get paid by marketplaces and pay suppliers abroad, keeping the margin in one account.",
      image: "/used-by/sellers.jpg",
      alt: "Illustration of a small seller packing parcels at a wooden table",
   },
];

function clamp01(value: number) {
   return Math.min(1, Math.max(0, value));
}

function subscribeReducedMotion(onChange: () => void) {
   const query = window.matchMedia("(prefers-reduced-motion: reduce)");
   query.addEventListener("change", onChange);
   return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () =>
   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function UsedBy() {
   const reduceMotion = useSyncExternalStore(
      subscribeReducedMotion,
      getReducedMotion,
      () => false,
   );
   const pinRef = useRef<HTMLDivElement | null>(null);
   const panelRef = useRef<HTMLDivElement | null>(null);
   const trackRef = useRef<HTMLUListElement | null>(null);
   // How far the track has to move sideways, in pixels. Zero until measured.
   const [travel, setTravel] = useState(0);

   useEffect(() => {
      if (reduceMotion) return;

      const panel = panelRef.current;
      const track = trackRef.current;
      if (!panel || !track) return;

      const measure = () =>
         setTravel(
            Math.max(0, Math.round(track.scrollWidth - panel.clientWidth)),
         );

      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(track);
      window.addEventListener("resize", measure);

      return () => {
         observer.disconnect();
         window.removeEventListener("resize", measure);
      };
   }, [reduceMotion]);

   useEffect(() => {
      if (reduceMotion || travel === 0) return;

      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      let frame = 0;

      const update = () => {
         frame = 0;
         const progress = clamp01(-pin.getBoundingClientRect().top / travel);

         track.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;
      };

      const onScroll = () => {
         if (frame === 0) frame = window.requestAnimationFrame(update);
      };

      update();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
         window.removeEventListener("scroll", onScroll);
         if (frame !== 0) window.cancelAnimationFrame(frame);
      };
   }, [reduceMotion, travel]);

   if (reduceMotion) {
      return (
         <section
            id="used-by"
            aria-labelledby="used-by-heading"
            data-reveal="off"
            className="py-28 lg:py-32"
         >
            <UsedByHeader />
            <ul className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-3">
               {AUDIENCES.map((audience, index) => (
                  <AudienceCard
                     key={audience.title}
                     audience={audience}
                     index={index}
                     className="w-full"
                  />
               ))}
            </ul>
         </section>
      );
   }

   return (
      <section
         id="used-by"
         aria-labelledby="used-by-heading"
         data-reveal="off"
         className="relative"
      >
         <div
            ref={pinRef}
            style={{ height: `calc(100svh + ${travel}px)` }}
            className="relative"
         >
            <div
               ref={panelRef}
               className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden"
            >
               <UsedByHeader />

               <div className="mt-8 overflow-hidden sm:mt-10">
                  <ul
                     ref={trackRef}
                     className="flex w-max items-stretch gap-4 px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))] will-change-transform motion-reduce:will-change-auto sm:gap-4"
                  >
                     {AUDIENCES.map((audience, index) => (
                        <AudienceCard
                           key={audience.title}
                           audience={audience}
                           index={index}
                           className="w-[calc(100vw-3rem)] sm:w-[min(44vw,32rem,60svh)]"
                        />
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

function UsedByHeader() {
   return (
      <header className="mx-auto w-full max-w-6xl px-6">
         <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div>
               <span className="text-sm font-semibold tracking-tight text-foreground/80">
                  Used by
               </span>
               <h2
                  id="used-by-heading"
                  className="mt-2 max-w-xl text-balance font-heading text-4xl font-medium tracking-tighter lg:text-5xl"
               >
                  People who move money across borders.
               </h2>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground lg:pb-1">
               Freelancers, founders, families — and everyone in between. One
               account for the way money actually moves.
            </p>
         </div>
      </header>
   );
}

function AudienceCard({
   audience,
   className,
}: {
   audience: Audience;
   index: number;
   className?: string;
}) {
   return (
      <li
         className={cn(
            "group relative aspect-square shrink-0 overflow-hidden rounded-lg border border-border/70 bg-secondary",
            className,
         )}
      >
         <Image
            src={audience.image}
            alt={audience.alt}
            fill
            sizes="(max-width: 640px) calc(100vw - 3rem), 44vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
         />

         <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/50"
         />

         <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
            <span className="text-[10px] font-medium tracking-wide text-white/90 uppercase">
               {audience.kicker}
            </span>
         </div>

         <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
            <h3 className="font-heading text-xl font-medium tracking-tight text-white sm:text-2xl">
               {audience.title}
            </h3>
            <p className="mt-2 max-w-[30ch] text-pretty text-xs leading-relaxed text-white/75 sm:text-sm">
               {audience.copy}
            </p>
         </div>
      </li>
   );
}
