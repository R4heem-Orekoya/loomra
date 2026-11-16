import {
   ArrowLeftRightIcon,
   CheckmarkCircle02Icon,
   CreditCardIcon,
   Globe02Icon,
   MoneySend01Icon,
   Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ActivityCard, VirtualCard } from "@/components/hero-visual";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Capabilities from "@/sections/capabilities";
import GetPaid from "@/sections/get-paid";

export const metadata: Metadata = {
   title: "The product",
   description:
      "A multi-currency account with local details, mid-market conversion, fast international transfers and virtual cards.",
};

const PILLARS = [
   {
      icon: Wallet01Icon,
      title: "Hold",
      copy: "Keep 40+ currencies in one balance, with local account details for the ones you use most.",
      stat: "40+ currencies",
   },
   {
      icon: ArrowLeftRightIcon,
      title: "Convert",
      copy: "Move between currencies at the mid-market rate. No markup folded into the number.",
      stat: "0% markup",
   },
   {
      icon: MoneySend01Icon,
      title: "Send",
      copy: "Pay people and businesses in 100+ countries over local rails, often in seconds.",
      stat: "100+ countries",
   },
   {
      icon: CreditCardIcon,
      title: "Spend",
      copy: "Create virtual cards against any balance, with limits, freezes and one-tap replacement.",
      stat: "Instant cards",
   },
];

const CURRENCIES = [
   { code: "USD", flag: "us" },
   { code: "EUR", flag: "eu" },
   { code: "GBP", flag: "gb" },
   { code: "NGN", flag: "ng" },
   { code: "CAD", flag: "ca" },
   { code: "AUD", flag: "au" },
   { code: "JPY", flag: "jp" },
   { code: "CHF", flag: "ch" },
   { code: "CNY", flag: "cn" },
   { code: "AED", flag: "ae" },
   { code: "INR", flag: "in" },
   { code: "ZAR", flag: "za" },
   { code: "KES", flag: "ke" },
   { code: "GHS", flag: "gh" },
   { code: "BRL", flag: "br" },
   { code: "MXN", flag: "mx" },
   { code: "SGD", flag: "sg" },
   { code: "HKD", flag: "hk" },
   { code: "SEK", flag: "se" },
   { code: "NOK", flag: "no" },
   { code: "DKK", flag: "dk" },
   { code: "PLN", flag: "pl" },
   { code: "TRY", flag: "tr" },
   { code: "KRW", flag: "kr" },
   { code: "NZD", flag: "nz" },
   { code: "SAR", flag: "sa" },
   { code: "EGP", flag: "eg" },
];

const CARD_POINTS = [
   "Create a separate card for every subscription, so one cancellation never touches the others.",
   "Set a monthly limit per card and freeze it the moment something looks wrong.",
   "Pay in the currency of the balance you choose, without a conversion at checkout.",
];

export default function ProductPage() {
   return (
      <>
         <PageHero
            eyebrow="The product"
            title="One account for money in every direction."
            description="Hold the currencies you earn, convert at the rate you can look up, send over local rails and spend online with cards you control. All of it in the same account."
            actions={
               <>
                  <Link
                     href="/signup"
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-10 px-6 text-sm",
                     )}
                  >
                     Open an account
                  </Link>
                  <Link
                     href="/pricing"
                     className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "h-10 px-6 text-sm",
                     )}
                  >
                     See pricing
                  </Link>
               </>
            }
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {PILLARS.map((pillar) => (
                     <li
                        key={pillar.title}
                        className="flex h-full flex-col rounded-lg border border-border/40 bg-muted/50 p-3"
                     >
                        <span className="grid size-7.5 place-items-center rounded border border-border/70 bg-background">
                           <HugeiconsIcon
                              icon={pillar.icon}
                              strokeWidth={1.7}
                              className="size-4 text-accent-strong"
                           />
                        </span>
                        <h2 className="mt-4 font-heading text-lg font-medium tracking-tighter">
                           {pillar.title}
                        </h2>
                        <p className="my-4 text-sm leading-snug text-muted-foreground">
                           {pillar.copy}
                        </p>
                        <p className="text-xs mt-2 font-medium text-accent-strong">
                           {pillar.stat}
                        </p>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <Capabilities />

         <section
            id="currencies"
            className="scroll-mt-24 border-border/60 px-6 py-28"
         >
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.15fr] lg:items-center lg:gap-16">
               <div>
                  <span className="text-sm font-medium text-muted-foreground">
                     Currencies
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter">
                     40+ currencies, held side by side.
                  </h2>
                  <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     Open a balance in any supported currency and keep it there
                     until you need it. Converting is a choice, not a step you
                     are forced through every time money arrives.
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                     <HugeiconsIcon
                        icon={Globe02Icon}
                        strokeWidth={1.7}
                        className="size-3.5"
                     />
                     Local details for major currencies
                  </p>
               </div>

               <ul
                  aria-label="Currencies supported"
                  className="flex flex-wrap gap-2"
               >
                  {CURRENCIES.map((currency) => (
                     <li
                        key={currency.code}
                        className="inline-flex items-center gap-2 rounded-full border border-border/30 bg-secondary py-0.5 pr-2 pl-0.5 text-xs font-semibold uppercase tracking-wide text-paper-ink/75"
                     >
                        <Image
                           src={`/flags/${currency.flag}.svg`}
                           alt=""
                           width={20}
                           height={20}
                           unoptimized
                           draggable={false}
                           className="size-5 shrink-0 rounded-full border border-border/20 object-cover"
                        />
                        {currency.code}
                     </li>
                  ))}
                  <li className="inline-flex items-center rounded-full border border-dashed border-border/70 px-3 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                     +13 more
                  </li>
               </ul>
            </div>
         </section>

         <GetPaid />

         <section id="cards" className="scroll-mt-24 px-6 pb-24">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
               <div className="order-2 lg:order-1">
                  <span className="text-sm font-medium text-muted-foreground">
                     Virtual cards
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter">
                     A card for every corner of your spending.
                  </h2>
                  <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                     Issue a card in seconds, name it after the thing it pays
                     for, and set a limit that makes sense. If a merchant gets
                     compromised, replace the card without touching the rest.
                  </p>

                  <ul className="mt-6 space-y-3">
                     {CARD_POINTS.map((point) => (
                        <li
                           key={point}
                           className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                           <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              strokeWidth={1.7}
                              className="mt-0.5 size-4 shrink-0 text-accent-strong"
                           />
                           {point}
                        </li>
                     ))}
                  </ul>

                  <Link
                     href="/signup"
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-8 h-10 px-6 text-sm",
                     )}
                  >
                     Create your first card
                  </Link>
               </div>

               <div className="order-1 lg:order-2">
                  <CardStack />
               </div>
            </div>
         </section>

         <PageCta />
      </>
   );
}

function CardStack() {
   return (
      <div
         aria-hidden="true"
         className="relative mx-auto w-full max-w-md select-none pb-20"
      >
         <div className="mx-2">
            <VirtualCard />
         </div>

         <div className="absolute right-0 bottom-0 w-[74%] -rotate-3">
            <ActivityCard />
         </div>
      </div>
   );
}
