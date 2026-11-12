import {
   ArrowLeftRightIcon,
   CheckmarkCircle02Icon,
   CreditCardIcon,
   MoneySend01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import Faq from "@/sections/faq";
import FeesComparison from "@/sections/fees-comparison";

export const metadata: Metadata = {
   title: "Pricing",
   description:
      "1.5% per transfer capped at $20, the mid-market rate, and no monthly fee. Run the numbers before you sign up.",
};

const PRINCIPLES = [
   {
      icon: MoneySend01Icon,
      title: "1.5%, capped at $20",
      copy: "One visible fee per transfer. It is the same whether you send $50 or $5,000, and it never goes above $20.",
   },
   {
      icon: ArrowLeftRightIcon,
      title: "The mid-market rate",
      copy: "Conversion uses the rate you see on a search engine, with no margin added on top. The rate on the confirmation screen is the rate you get.",
   },
   {
      icon: CreditCardIcon,
      title: "Nothing monthly",
      copy: "No monthly fee, no minimum balance and no charge for holding a currency. Virtual cards are issued without an account fee.",
   },
];

const EXTRAS = [
   {
      label: "Receiving money",
      value: "Free",
      detail: "Inbound transfers to your Loomra account.",
   },
   {
      label: "Holding a balance",
      value: "Free",
      detail: "No monthly account fee and no minimum balance.",
   },
   {
      label: "Virtual cards",
      value: "Free",
      detail: "Issue, freeze and replace cards at no cost.",
   },
   {
      label: "Third-party charges",
      value: "Passed through",
      detail:
         "Some receiving banks add their own fee. We show a warning when we know one applies.",
   },
];

export default function PricingPage() {
   return (
      <>
         <PageHero
            eyebrow="Pricing"
            title="One fee. No asterisk."
            description="A flat 1.5% per transfer, capped at $20, and the real exchange rate. No monthly fee, no hidden markup, and no surprise on the confirmation screen."
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <ul className="grid gap-3 sm:grid-cols-3">
                  {PRINCIPLES.map((principle) => (
                     <li
                        key={principle.title}
                        className="flex h-full flex-col rounded-lg border border-border/40 bg-muted/50 p-5"
                     >
                        <span className="grid size-8 place-items-center rounded border border-border/70 bg-background">
                           <HugeiconsIcon
                              icon={principle.icon}
                              strokeWidth={1.7}
                              className="size-4 text-accent-strong"
                           />
                        </span>
                        <h2 className="mt-4 font-heading text-lg font-medium tracking-tighter">
                           {principle.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                           {principle.copy}
                        </p>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <FeesComparison />

         <section className="px-6 py-24">
            <div className="mx-auto w-full max-w-6xl">
               <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <div>
                     <h2 className="text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                        The whole price list.
                     </h2>
                     <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                        There is no matrix of account tiers to compare. This is
                        the complete list of what we charge, and most of it is
                        nothing.
                     </p>
                     <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                        <HugeiconsIcon
                           icon={CheckmarkCircle02Icon}
                           strokeWidth={1.7}
                           className="size-3.5"
                        />
                        Shown in full before every payment
                     </p>
                  </div>

                  <dl className="divide-y divide-border/40 overflow-hidden rounded-lg border border-border/40 bg-muted/50">
                     {EXTRAS.map((extra) => (
                        <div
                           key={extra.label}
                           className="grid gap-1 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                        >
                           <div>
                              <dt className="text-sm font-medium tracking-tight">
                                 {extra.label}
                              </dt>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                 {extra.detail}
                              </p>
                           </div>
                           <dd className="text-sm font-medium tracking-tight">
                              {extra.value}
                           </dd>
                        </div>
                     ))}
                  </dl>
               </div>
            </div>
         </section>

         <Faq />

         <PageCta
            title="Run a real number."
            description="Try your own amount in the calculator above. The fee and the landing amount are shown before you commit to anything."
            primaryLabel="Open an account"
            primaryHref="/signup"
            secondaryLabel="See the product"
            secondaryHref="/product"
         />
      </>
   );
}
