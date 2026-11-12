import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DETAILS = ["Free to open", "No monthly fee", "Close any time"];

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

// The track loops by one copy at a time; extra copies keep it seamless on
// ultrawide screens.
const MARQUEE_KEYS = Array.from(
   { length: 4 },
   (_, index) => `copy-${index + 1}`,
);

export default function ClosingCta() {
   return (
      <section
         id="open-account"
         aria-labelledby="cta-heading"
         className="relative isolate scroll-mt-24 text-paper-ink"
      >
         <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-10 lg:pt-48">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
               <h2
                  id="cta-heading"
                  className="text-balance font-heading text-4xl font-medium leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
               >
                  Ready when you are.
               </h2>

               <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-paper-muted">
                  Hold 40+ currencies, convert at the real rate and send in
                  seconds. Opening an account takes minutes — keeping one costs
                  nothing.
               </p>

               <div className="mt-12 flex items-center justify-center gap-2">
                  <Link
                     href="/signup"
                     className="inline-flex h-10 items-center justify-center rounded-full bg-paper-ink px-7 text-sm font-medium text-paper transition-colors hover:bg-paper-ink/85"
                  >
                     Open an account
                  </Link>

                  <Link
                     href="#"
                     className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "group h-10 px-6 text-sm",
                     )}
                  >
                     Get the app
                     <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.8}
                        className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                     />
                  </Link>
               </div>

               <p className="mt-5 text-xs text-paper-muted">
                  {DETAILS.join(" · ")}
               </p>
            </div>
         </div>

         <div className="relative w-full max-w-2xl mx-auto overflow-hidden py-6">
            <div
               aria-hidden="true"
               className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent sm:w-40"
            />
            <div
               aria-hidden="true"
               className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent sm:w-40"
            />

            <div className="marquee-track flex w-max items-center">
               {MARQUEE_KEYS.map((copy, index) => (
                  <CurrencyGroup key={copy} hidden={index > 0} />
               ))}
            </div>
         </div>
      </section>
   );
}

function CurrencyGroup({ hidden = false }: { hidden?: boolean }) {
   return (
      <ul
         aria-hidden={hidden || undefined}
         aria-label={hidden ? undefined : "Currencies supported"}
         className="flex shrink-0 items-center gap-3 pr-3"
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
                  loading="eager"
                  draggable={false}
                  className="size-5 shrink-0 rounded-full border border-border/20 object-cover"
               />
               {currency.code}
            </li>
         ))}
      </ul>
   );
}
