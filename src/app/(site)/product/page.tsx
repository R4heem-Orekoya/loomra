import {
   ArrowLeftRightIcon,
   CheckmarkCircle02Icon,
   CreditCardIcon,
   Globe02Icon,
   MoneySend01Icon,
   NfcIcon,
   Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
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
   "USD",
   "EUR",
   "GBP",
   "NGN",
   "CAD",
   "AUD",
   "JPY",
   "CHF",
   "CNY",
   "AED",
   "INR",
   "ZAR",
   "KES",
   "GHS",
   "BRL",
   "MXN",
   "SGD",
   "HKD",
   "SEK",
   "NOK",
   "DKK",
   "PLN",
   "TRY",
   "ILS",
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
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-10 px-6 text-sm",
                     )}
                  >
                     See pricing
                  </Link>
               </>
            }
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-5xl">
               <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {PILLARS.map((pillar) => (
                     <li
                        key={pillar.title}
                        className="flex h-full flex-col rounded-lg border border-border/70 bg-secondary/40 p-3"
                     >
                        <span className="grid size-7 place-items-center rounded border border-border/70 bg-background">
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
                        <p className="text-xs font-medium text-accent-strong">
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
            className="scroll-mt-24 border-y border-border/60 px-6 py-24"
         >
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
               <div>
                  <span className="text-sm font-medium text-muted-foreground">
                     Currencies
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
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

               <ul className="flex flex-wrap gap-1.5">
                  {CURRENCIES.map((currency) => (
                     <li
                        key={currency}
                        className="rounded-md border border-border/70 bg-secondary/40 px-2.5 py-1.5 font-numeric text-xs font-medium tracking-tight text-muted-foreground"
                     >
                        {currency}
                     </li>
                  ))}
                  <li className="rounded-md border border-dashed border-border/70 px-2.5 py-1.5 text-xs font-medium tracking-tight text-muted-foreground">
                     +16 more
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
                  <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
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
         className="relative mx-auto aspect-[1.35] w-full max-w-md select-none"
      >
         <div className="absolute inset-x-8 top-6 h-[70%] rotate-6 rounded-xl border border-white/10 bg-[#0D5C3A] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]" />

         <div className="absolute inset-x-2 top-0 flex h-[78%] flex-col justify-between overflow-hidden rounded-xl bg-[#0b3d27] p-5 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)]">
            <div className="flex items-start justify-between">
               <span className="font-heading text-lg font-semibold tracking-tighter">
                  Loomra
               </span>
               <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/70">
                  Virtual
               </span>
            </div>

            <div>
               <div className="flex items-center gap-2">
                  <span className="h-6 w-8 rounded-sm bg-gradient-to-br from-[#e8c98a] to-[#b58f45]" />
                  <HugeiconsIcon
                     icon={NfcIcon}
                     strokeWidth={1.6}
                     className="size-4 text-white/60"
                  />
               </div>
               <p className="mt-3 font-numeric text-[13px] tracking-[0.14em] text-white/85">
                  •••• •••• •••• 4821
               </p>
               <div className="mt-3 flex items-end justify-between text-[10px] uppercase tracking-[0.12em] text-white/65">
                  <span>Raheem Orekoya</span>
                  <span>09/29</span>
               </div>
            </div>
         </div>

         <div className="absolute inset-x-10 top-[46%] flex h-[38%] flex-col justify-between rounded-xl border border-border/70 bg-background p-4 text-foreground shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
               <span className="text-xs font-medium tracking-tight">
                  Subscriptions
               </span>
               <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Frozen
               </span>
            </div>
            <div className="flex items-end justify-between">
               <p className="font-numeric text-xs tracking-[0.12em] text-muted-foreground">
                  •••• 9042
               </p>
               <p className="text-xs font-medium">$60 / month</p>
            </div>
         </div>
      </div>
   );
}
