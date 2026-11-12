import { ArrowUpRight01Icon, Message01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import HelpSearch from "@/components/help-search";
import PageHero from "@/components/page-hero";
import Faq from "@/sections/faq";

export const metadata: Metadata = {
   title: "Help centre",
   description:
      "Answers on accounts, transfers, cards and security — plus a direct line to the support team.",
};

export default function HelpPage() {
   return (
      <>
         <PageHero
            eyebrow="Help centre"
            title="How can we help?"
            description="Search the topics below, or read the questions people ask most. If the answer is not here, a person will reply."
         />

         <section className="px-6 pb-8">
            <div className="mx-auto w-full max-w-6xl">
               <HelpSearch />
            </div>
         </section>

         <Faq />

         <section className="px-6 pt-16 pb-24">
            <div className="mx-auto w-full max-w-6xl">
               <div className="flex flex-col items-start justify-between gap-6 rounded-xl border border-border/40 bg-muted/50 p-6 sm:flex-row sm:items-center sm:p-8">
                  <div className="flex items-start gap-4">
                     <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border/70 bg-background">
                        <HugeiconsIcon
                           icon={Message01Icon}
                           strokeWidth={1.7}
                           className="size-5 text-accent-strong"
                        />
                     </span>
                     <div>
                        <h2 className="font-heading text-xl font-medium tracking-tighter">
                           Still stuck?
                        </h2>
                        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                           Most messages are answered within four hours on
                           weekdays, and every message gets a human reply.
                        </p>
                     </div>
                  </div>

                  <Link
                     href="/contact"
                     className="group inline-flex items-center gap-1.5 text-sm font-medium tracking-tight"
                  >
                     Contact support
                     <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.8}
                        className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                     />
                  </Link>
               </div>
            </div>
         </section>
      </>
   );
}
