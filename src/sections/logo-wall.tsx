"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { EASE_REVEAL } from "@/lib/ease";

type Investor = {
   name: string;
   src: string;
};

/**
 * Investor logo wall under the hero. Drop a file into `public/` and point `src`
 * at it here; a mark whose file hasn't landed yet renders as a text wordmark, so
 * the row never shows a broken image.
 */
const INVESTORS: Investor[] = [
   { name: "QED Investors", src: "/qed.png" },
   { name: "Andreessen Horowitz", src: "/a16z.svg" },
   { name: "Accel", src: "/accel.png" },
   { name: "Index Ventures", src: "/index-ventures.svg" },
   { name: "Sequoia", src: "/sequoia.svg" },
];

/** Scroll reveal: the wall lifts in as it enters view, then the logos follow. */
const REVEAL_DURATION = 0.7;
const REVEAL_OFFSET = 16;
const LOGO_START_DELAY = 0.15;
const LOGO_STAGGER = 0.12;

export default function LogoWall() {
   const [missing, setMissing] = useState<string[]>([]);
   const reduceMotion = useReducedMotion();

   return (
      <section
         data-reveal="off"
         className="border-t border-border/10 py-16 text-center"
      >
         <motion.h2
            initial={{ opacity: 0, y: REVEAL_OFFSET }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
               duration: reduceMotion ? 0 : REVEAL_DURATION,
               ease: EASE_REVEAL,
            }}
            className="px-6 font-numeric text-sm font-medium tracking-wider text-muted-foreground uppercase"
         >
            Backed and trusted by the best in fintech and venture capital
         </motion.h2>

         <ul className="mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-8 px-6 lg:gap-x-12">
            {INVESTORS.map((investor, index) => (
               <motion.li
                  key={investor.name}
                  initial={{ opacity: 0, y: REVEAL_OFFSET }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                     duration: reduceMotion ? 0 : REVEAL_DURATION,
                     delay: reduceMotion
                        ? 0
                        : LOGO_START_DELAY + index * LOGO_STAGGER,
                     ease: EASE_REVEAL,
                  }}
                  className="flex h-8 items-center justify-center"
               >
                  {missing.includes(investor.name) ? (
                     <span className="font-heading text-base font-semibold tracking-tighter whitespace-nowrap text-muted-foreground">
                        {investor.name}
                     </span>
                  ) : (
                     <span className="relative block h-7 w-20 sm:h-8 sm:w-24 lg:w-28">
                        <Image
                           src={investor.src}
                           alt={`${investor.name} logo`}
                           fill
                           sizes="128px"
                           className="object-contain"
                           onError={() =>
                              setMissing((prev) =>
                                 prev.includes(investor.name)
                                    ? prev
                                    : [...prev, investor.name],
                              )
                           }
                        />
                     </span>
                  )}
               </motion.li>
            ))}
         </ul>
      </section>
   );
}
