"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function LogoWall() {
   const [missing, setMissing] = useState<string[]>([]);

   return (
      <section className="border-t border-border/10 py-16 text-center">
         <h2 className="px-6 font-numeric text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Backed and trusted by the best in fintech and venture capital
         </h2>

         <ul className="mx-auto mt-10 flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-8 px-6 lg:gap-x-12">
            {INVESTORS.map((investor) => (
               <li
                  key={investor.name}
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
               </li>
            ))}
         </ul>
      </section>
   );
}
