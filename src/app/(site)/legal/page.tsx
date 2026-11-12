import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import { LEGAL_DOCS } from "@/lib/legal";

export const metadata: Metadata = {
   title: "Legal",
   description:
      "Terms, privacy, cookies, complaints and regulatory disclosures for Loomra.",
};

export default function LegalIndexPage() {
   return (
      <>
         <PageHero
            eyebrow="Legal"
            title="The fine print, in plain English."
            description="Everything that governs the account, what we do with your data, and how to raise a complaint. Written to be read, not to be survived."
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {LEGAL_DOCS.map((doc) => (
                     <li key={doc.slug}>
                        <Link
                           href={`/legal/${doc.slug}`}
                           className="group flex h-full flex-col rounded-lg border border-border/70 bg-secondary/40 p-5 transition-colors hover:border-border hover:bg-secondary/70"
                        >
                           <span className="flex items-start justify-between gap-3">
                              <span className="font-heading text-lg font-medium tracking-tighter">
                                 {doc.title}
                              </span>
                              <HugeiconsIcon
                                 icon={ArrowUpRight01Icon}
                                 strokeWidth={1.8}
                                 className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                              />
                           </span>
                           <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {doc.description}
                           </span>
                           <span className="mt-auto pt-5 text-xs text-muted-foreground">
                              Updated {doc.updated}
                           </span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <PageCta
            title="Still need an answer?"
            description="Our support team reads every message, and legal questions are welcome too."
            primaryLabel="Contact us"
            primaryHref="/contact"
            secondaryLabel="Visit the help centre"
            secondaryHref="/help"
         />
      </>
   );
}
