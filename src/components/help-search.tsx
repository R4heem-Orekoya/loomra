"use client";

import {
   ArrowUpRight01Icon,
   CreditCardIcon,
   CustomerSupportIcon,
   LegalDocument01Icon,
   Search01Icon,
   Shield01Icon,
   Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Topic = {
   title: string;
   description: string;
   href: string;
   icon: typeof Wallet01Icon;
};

const TOPICS: Topic[] = [
   {
      title: "Opening an account",
      description: "What you need, how long it takes, and who can open one.",
      href: "/signup",
      icon: Wallet01Icon,
   },
   {
      title: "Payments and transfers",
      description: "Fees, exchange rates, limits and arrival times.",
      href: "/pricing",
      icon: ArrowUpRight01Icon,
   },
   {
      title: "Cards",
      description: "Creating a card, setting limits and freezing it.",
      href: "/product#cards",
      icon: CreditCardIcon,
   },
   {
      title: "Security",
      description: "Two-factor sign-in, device approvals and reporting fraud.",
      href: "/security",
      icon: Shield01Icon,
   },
   {
      title: "Legal documents",
      description: "Terms, privacy, cookies, complaints and disclosures.",
      href: "/legal",
      icon: LegalDocument01Icon,
   },
   {
      title: "Talk to a person",
      description: "Contact support, press or careers.",
      href: "/contact",
      icon: CustomerSupportIcon,
   },
];

export default function HelpSearch() {
   const [query, setQuery] = useState("");

   const needle = query.trim().toLowerCase();
   const results = needle
      ? TOPICS.filter(
           (topic) =>
              topic.title.toLowerCase().includes(needle) ||
              topic.description.toLowerCase().includes(needle),
        )
      : TOPICS;

   return (
      <div>
         <label htmlFor="help-search" className="sr-only">
            Search help topics
         </label>
         <div className="relative">
            <HugeiconsIcon
               icon={Search01Icon}
               strokeWidth={1.8}
               aria-hidden="true"
               className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
               id="help-search"
               type="search"
               value={query}
               onChange={(event) => setQuery(event.target.value)}
               placeholder="Search help topics"
               className="h-11 w-full rounded-full border border-border/80 bg-background pr-4 pl-10 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
            />
         </div>

         <p aria-live="polite" className="mt-3 text-xs text-muted-foreground">
            {results.length} {results.length === 1 ? "topic" : "topics"}
            {needle ? ` matching “${query.trim()}”` : ""}
         </p>

         {results.length === 0 ? (
            <div className="mt-6 rounded-lg border border-dashed border-border/80 px-5 py-10 text-center">
               <p className="text-sm font-medium">No topics match that.</p>
               <p className="mx-auto mt-1.5 max-w-sm text-sm text-muted-foreground">
                  Try a shorter phrase, or{" "}
                  <Link
                     href="/contact"
                     className="font-medium text-foreground underline underline-offset-4"
                  >
                     send us a message
                  </Link>
                  .
               </p>
            </div>
         ) : (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
               {results.map((topic) => (
                  <li key={topic.title}>
                     <Link
                        href={topic.href}
                        className={cn(
                           "group flex h-full flex-col rounded-lg border border-border/70 bg-secondary/40 p-5 transition-colors",
                           "hover:border-border hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                        )}
                     >
                        <span className="flex items-start justify-between gap-3">
                           <span className="grid size-8 place-items-center rounded border border-border/70 bg-background">
                              <HugeiconsIcon
                                 icon={topic.icon}
                                 strokeWidth={1.7}
                                 className="size-4 text-accent-strong"
                              />
                           </span>
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              className="mt-1 size-4 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                           />
                        </span>
                        <span className="mt-4 text-sm font-medium tracking-tight">
                           {topic.title}
                        </span>
                        <span className="mt-1 text-sm leading-relaxed text-muted-foreground">
                           {topic.description}
                        </span>
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
