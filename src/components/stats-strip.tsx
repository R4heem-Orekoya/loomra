"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = {
   value: number;
   suffix?: string;
   label: string;
};

const STATS: Stat[] = [
   { value: 40, suffix: "+", label: "currencies" },
   { value: 100, suffix: "+", label: "countries" },
   { value: 4, suffix: "s", label: "average transfer" },
   { value: 0, label: "hidden fees" },
];

export default function StatsStrip() {
   const listRef = useRef<HTMLDListElement>(null);
   const inView = useInView(listRef, { once: true, amount: 0.5 });
   const reduceMotion = useReducedMotion();
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      if (!inView) return;

      if (reduceMotion) {
         setProgress(1);
         return;
      }

      const controls = animate(0, 1, {
         duration: 1.8,
         ease: [0.33, 1, 0.68, 1],
         onUpdate: setProgress,
      });

      return () => controls.stop();
   }, [inView, reduceMotion]);

   return (
      <section
         aria-label="Loomra in numbers"
         className="border-y border-neutral-200/70"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <dl ref={listRef} className="grid grid-cols-2 sm:grid-cols-4">
               {STATS.map((stat, index) => (
                  <div
                     key={stat.label}
                     className={cn(
                        "flex flex-col-reverse items-center gap-2 px-3 py-10 sm:py-12",
                        index % 2 === 1 && "border-l border-neutral-200/70",
                        index >= 2 && "border-t border-neutral-200/70",
                        index > 0 && "sm:border-l sm:border-neutral-200/70",
                        index >= 2 && "sm:border-t-0",
                     )}
                  >
                     <dt className="text-sm font-medium tracking-tight text-muted-foreground">
                        {stat.label}
                     </dt>
                     <dd className="font-heading text-5xl font-medium leading-none tracking-tighter sm:text-6xl">
                        <span aria-hidden="true">
                           {Math.round(stat.value * progress)}
                        </span>
                        <span className="sr-only">{stat.value}</span>
                        {stat.suffix ? (
                           <span className="text-[#0D5C3A]">{stat.suffix}</span>
                        ) : null}
                     </dd>
                  </div>
               ))}
            </dl>
         </div>
      </section>
   );
}
