import {
   ArrowUpRight01Icon,
   CheckmarkCircle02Icon,
   Mail01Icon,
   PaletteIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
   title: "Press",
   description:
      "Press contact, brand assets and the facts behind Loomra, the multi-currency account for money that crosses borders.",
};

const FACTS = [
   { label: "Founded", value: "2021" },
   { label: "Headquarters", value: "Lagos, Nigeria" },
   { label: "Team", value: "180 people, 14 countries" },
   { label: "Currencies", value: "40+ held, 100+ countries reached" },
   { label: "Funding", value: "Series B, backed by QED, a16z, Accel" },
   { label: "Model", value: "1.5% per transfer, capped at $20" },
];

const COLOURS = [
   { name: "Loomra Green", hex: "#0D5C3A", className: "bg-[#0D5C3A]" },
   { name: "Ink", hex: "#121712", className: "bg-[#121712]" },
   { name: "Paper", hex: "#E9F0E9", className: "bg-[#E9F0E9]" },
   { name: "Chalk", hex: "#FFFFFF", className: "bg-white" },
];

const GUIDELINES = [
   "Use the wordmark as supplied — do not stretch, recolour or add effects.",
   "Keep clear space around the mark equal to the height of the capital L.",
   "On dark backgrounds use the white wordmark; on light backgrounds use ink.",
   "Write the name as “Loomra”, never in all caps or with a space.",
   "Describe us as a financial technology company, not a bank.",
];

export default function PressPage() {
   return (
      <>
         <PageHero
            eyebrow="Press"
            title="The story, and the pieces to tell it."
            description="Everything you need to write about Loomra: a short description, the facts, the brand assets, and a person who will reply quickly."
         />

         <section className="px-6 pb-16">
            <div className="mx-auto grid w-full max-w-6xl gap-3 lg:grid-cols-2">
               <div className="flex flex-col rounded-xl border border-border/40 bg-muted/50 p-5 sm:p-6">
                  <span className="grid size-8 place-items-center rounded border border-border/70 bg-background">
                     <HugeiconsIcon
                        icon={Mail01Icon}
                        strokeWidth={1.7}
                        className="size-4 text-accent-strong"
                     />
                  </span>
                  <h2 className="mt-4 font-heading text-xl font-medium tracking-tighter">
                     Press enquiries
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                     For interviews, data, or a comment on cross-border
                     payments, contact the communications team. We answer within
                     one business day.
                  </p>
                  <a
                     href="mailto:press@loomra.com"
                     className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium tracking-tight"
                  >
                     press@loomra.com
                     <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.8}
                        className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                     />
                  </a>
               </div>

               <div className="rounded-xl border border-border/40 bg-muted/50 p-5 sm:p-6">
                  <h2 className="font-heading text-xl font-medium tracking-tighter">
                     The short version
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                     Loomra is a multi-currency account for people whose money
                     crosses borders. It lets customers hold 40+ currencies,
                     convert at the mid-market rate, send to 100+ countries and
                     spend online with virtual cards — with one visible fee of
                     1.5% per transfer, capped at $20.
                  </p>
                  <dl className="mt-6 divide-y divide-border/70 border-t border-border/70">
                     {FACTS.slice(0, 4).map((fact) => (
                        <div
                           key={fact.label}
                           className="flex items-baseline justify-between gap-6 py-2.5"
                        >
                           <dt className="text-xs text-muted-foreground">
                              {fact.label}
                           </dt>
                           <dd className="text-right text-xs font-medium">
                              {fact.value}
                           </dd>
                        </div>
                     ))}
                  </dl>
               </div>
            </div>
         </section>

         <section className="border-t border-border/60 px-6 py-24">
            <div className="mx-auto w-full max-w-6xl">
               <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <HugeiconsIcon
                     icon={PaletteIcon}
                     strokeWidth={1.7}
                     className="size-4 text-accent-strong"
                  />
                  Brand assets
               </div>

               <div className="mt-8 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex flex-col gap-3">
                     <div className="flex aspect-[2/1] items-center justify-center rounded-xl border border-border/40 bg-[#E9F0E9]">
                        <span className="font-heading text-4xl font-semibold tracking-tighter text-[#121712]">
                           Loomra
                        </span>
                     </div>
                     <div className="flex aspect-[2/1] items-center justify-center rounded-xl border border-border/40 bg-[#0D5C3A]">
                        <span className="font-heading text-4xl font-semibold tracking-tighter text-white">
                           Loomra
                        </span>
                     </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                     {COLOURS.map((colour) => (
                        <div
                           key={colour.name}
                           className="overflow-hidden rounded-xl border border-border/40 bg-muted/50"
                        >
                           <div className={`h-24 ${colour.className}`} />
                           <div className="flex items-baseline justify-between px-4 py-3">
                              <span className="text-xs font-medium">
                                 {colour.name}
                              </span>
                              <span className="font-numeric text-[11px] text-muted-foreground">
                                 {colour.hex}
                              </span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="mt-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                  <div>
                     <h2 className="text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl">
                        Using the mark.
                     </h2>
                     <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        Instrument Sans for the wordmark, tightened. Inter for
                        everything else. The mark is set in one weight and never
                        outlined.
                     </p>
                  </div>

                  <ul className="space-y-3">
                     {GUIDELINES.map((rule) => (
                        <li
                           key={rule}
                           className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                           <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              strokeWidth={1.7}
                              className="mt-0.5 size-4 shrink-0 text-accent-strong"
                           />
                           {rule}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </section>

         <PageCta
            title="Writing about cross-border money?"
            description="We can share data on transfer costs and arrival times, or put you in touch with the team building the product."
            primaryLabel="Email press@loomra.com"
            primaryHref="mailto:press@loomra.com"
            secondaryLabel="Read the blog"
            secondaryHref="/blog"
         />
      </>
   );
}
