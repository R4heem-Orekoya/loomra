"use client";

import NumberFlow from "@number-flow/react";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { transferFee } from "@/lib/fees";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../components/ui/button";

type FeeRow = {
   label: string;
   loomra: string;
   bank: string;
};

const RATE = 0.9214;
const PRESETS = [500, 1000, 2500];

const ROWS: FeeRow[] = [
   { label: "Transfer fee", loomra: "%1.5 capped at $20", bank: "$25–$45" },
   { label: "Exchange-rate markup", loomra: "0%", bank: "4–5%" },
   { label: "Hidden fees", loomra: "None", bank: "Common" },
   { label: "Time to arrive", loomra: "Seconds", bank: "1–3 business days" },
];

const euro = new Intl.NumberFormat("en-US", {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});

function formatDollars(value: number) {
   return value.toLocaleString("en-US", {
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
      maximumFractionDigits: 2,
   });
}

function parseAmount(value: string) {
   const parsed = Number.parseFloat(value);
   return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function sanitize(value: string) {
   const cleaned = value.replace(/[^0-9.]/g, "");
   const [whole, ...rest] = cleaned.split(".");
   return rest.length > 0 ? `${whole}.${rest.join("").slice(0, 2)}` : whole;
}

export default function FeesComparison() {
   const amountId = useId();
   const [amount, setAmount] = useState("1000");
   const [editing, setEditing] = useState(false);

   const sent = parseAmount(amount);
   const fee = transferFee(sent);
   const received = Math.round(sent * RATE * 100) / 100;
   const savings = sent > 0 ? Math.round(sent * 0.03 + 45 - fee) : 0;
   const sentLabel = formatDollars(sent);

   return (
      <section
         id="fees"
         aria-labelledby="fees-heading"
         className="scroll-mt-24 py-24 lg:py-32 bg-emerald-950"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-4xl text-center">
               <h2
                  id="fees-heading"
                  className="mt-3 text-balance font-heading text-background text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl"
               >
                  The same transfer. A very different receipt.
               </h2>
               <p className="mx-auto mt-4 max-w-md text-pretty text-sm md:text-lg leading-relaxed dark text-muted-foreground">
                  Hold, convert and send at the real exchange rate. Run the
                  numbers before you sign up.
               </p>

               <div className="flex items-center gap-0 mx-auto justify-center mt-12 dark">
                  <Link
                     href="#open-account"
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-10 max-w-fit px-8 text-sm",
                     )}
                  >
                     Open an account
                  </Link>
                  <Link
                     href="#how-it-works"
                     className={cn(
                        buttonVariants({ variant: "link", size: "lg" }),
                        "h-10 max-w-fit px-7 text-sm",
                     )}
                  >
                     Learn how to send money
                  </Link>
               </div>
            </header>

            <div className="mx-auto mt-12 max-w-3xl">
               <div className="overflow-hidden rounded-xl border bg-background">
                  <div className="grid sm:grid-cols-2">
                     <div className="px-5 py-5 focus-within:bg-neutral-50/60 sm:px-6">
                        <div className="flex items-center justify-between">
                           <label
                              htmlFor={amountId}
                              className="text-xs font-medium tracking-tight text-muted-foreground"
                           >
                              You send
                           </label>
                           <span className="inline-flex items-center gap-1.5 rounded-full border bg-neutral-50 py-[3px] pr-2 pl-[3px] text-[11px] font-medium tracking-tight">
                              <Image
                                 src="/flags/us.svg"
                                 alt=""
                                 width={16}
                                 height={16}
                                 unoptimized
                                 className="size-5 rounded-full object-cover"
                              />
                              USD
                           </span>
                        </div>

                        <div className="mt-3 flex items-baseline gap-1.5">
                           <span className="font-sans text-2xl tracking-tight text-muted-foreground">
                              $
                           </span>
                           <div className="relative min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                 <input
                                    id={amountId}
                                    value={amount}
                                    onChange={(event) =>
                                       setAmount(sanitize(event.target.value))
                                    }
                                    onFocus={(event) => {
                                       setEditing(true);
                                       event.currentTarget.select();
                                    }}
                                    onBlur={() => {
                                       setEditing(false);
                                       if (sent === 0) setAmount("1000");
                                    }}
                                    inputMode="decimal"
                                    autoComplete="off"
                                    maxLength={9}
                                    placeholder={editing ? "0.00" : undefined}
                                    className={cn(
                                       "min-w-0 bg-transparent font-sans text-4xl leading-none font-medium tracking-tighter tabular-nums outline-none placeholder:text-neutral-300 sm:text-5xl",
                                       !editing &&
                                          "text-transparent caret-transparent",
                                    )}
                                 />

                                 <span className="font-medium inline-flex items-center text-muted-foreground gap-1">
                                    <span className="text-lg text-foreground">
                                       +
                                    </span>
                                    <NumberFlow
                                       value={fee}
                                       format={{
                                          style: "currency",
                                          currency: "USD",
                                       }}
                                    />
                                 </span>
                              </div>
                              <span
                                 aria-hidden="true"
                                 className={cn(
                                    "pointer-events-none absolute inset-0 flex items-center font-sans text-3xl leading-none font-medium tracking-tighter sm:text-4xl",
                                    editing ? "opacity-0" : "opacity-100",
                                 )}
                              >
                                 <NumberFlow
                                    value={sent}
                                    locales="en-US"
                                    format={{ maximumFractionDigits: 2 }}
                                 />
                              </span>
                           </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                           {PRESETS.map((preset) => (
                              <button
                                 key={preset}
                                 type="button"
                                 onClick={() => setAmount(String(preset))}
                                 aria-pressed={sent === preset}
                                 className="cursor-pointer rounded-full border border-neutral-200/80 px-2.5 py-1 text-[11px] font-medium tracking-tight text-muted-foreground transition-colors hover:border-neutral-300 hover:text-foreground aria-pressed:border-neutral-900 aria-pressed:bg-neutral-900 aria-pressed:text-white"
                              >
                                 ${preset.toLocaleString("en-US")}
                              </button>
                           ))}
                        </div>
                     </div>

                     <div className="border-t border-neutral-200/80 px-5 py-5 sm:border-t-0 sm:border-l sm:px-6">
                        <div className="flex items-center justify-between">
                           <span className="text-xs font-medium tracking-tight text-muted-foreground">
                              They receive
                           </span>

                           <span className="inline-flex items-center gap-1.5 rounded-full border bg-neutral-50 py-[3px] pr-2 pl-[3px] text-[11px] font-medium tracking-tight">
                              <Image
                                 src="/flags/eu.svg"
                                 alt=""
                                 width={16}
                                 height={16}
                                 unoptimized
                                 className="size-5 rounded-full border border-border/80 object-cover"
                              />
                              EUR
                           </span>
                        </div>

                        <div className="mt-3 flex items-baseline gap-1.5">
                           <span
                              aria-hidden="true"
                              className="font-sans text-2xl tracking-tight text-muted-foreground"
                           >
                              €
                           </span>
                           <p
                              aria-hidden="true"
                              className="min-w-0 truncate font-sans text-3xl leading-none font-medium tracking-tighter tabular-nums sm:text-4xl"
                           >
                              <NumberFlow
                                 value={received}
                                 locales="en-US"
                                 format={{
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                 }}
                              />
                           </p>
                           <span className="sr-only" aria-live="polite">
                              €{euro.format(received)}
                           </span>
                        </div>

                        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                           Converted and sent in seconds. The fee is shown up
                           front and capped at $20.
                        </p>
                     </div>
                  </div>

                  <dl className="grid grid-cols-3 divide-x divide-neutral-200/80 border-t border-neutral-200/80 bg-neutral-50 text-[11px]">
                     <div className="px-4 py-3 sm:px-5">
                        <dt className="text-muted-foreground">Rate</dt>
                        <dd className="mt-0.5 font-medium tracking-tight tabular-nums">
                           1 USD = 0.9214 EUR
                        </dd>
                     </div>
                     <div className="px-4 py-3 sm:px-5">
                        <dt className="text-muted-foreground">Transfer fee</dt>
                        <dd className="mt-0.5 font-medium tracking-tight tabular-nums">
                           %1.5 capped at $20
                        </dd>
                     </div>
                     <div className="px-4 py-3 sm:px-5">
                        <dt className="text-muted-foreground">Arrives</dt>
                        <dd className="mt-0.5 font-medium tracking-tight">
                           In seconds
                        </dd>
                     </div>
                  </dl>
               </div>
            </div>

            <p className="mt-3 px-0.5 text-center dark text-[11px] text-muted-foreground">
               Indicative rate. The live rate is shown in the app before you
               confirm.
            </p>

            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg border bg-background">
               <table className="w-full border-separate border-spacing-0 text-left text-sm">
                  <caption className="sr-only">
                     Cost of a ${sentLabel} transfer with Loomra compared with a
                     typical bank
                  </caption>

                  <thead>
                     <tr>
                        <th
                           scope="col"
                           className="w-[38%] px-4 py-3.5 text-base font-medium tracking-tighter sm:px-6"
                        >
                           Cost
                        </th>
                        <th
                           scope="col"
                           className="px-4 py-3.5 text-base font-medium tracking-tighter sm:px-6"
                        >
                           Typical bank
                        </th>
                        <th
                           scope="col"
                           className="border-l px-4 py-3.5 text-base font-medium tracking-tighter sm:px-6"
                        >
                           Loomra
                        </th>
                     </tr>
                  </thead>

                  <tbody>
                     {ROWS.map((row) => (
                        <tr key={row.label}>
                           <th
                              scope="row"
                              className="border-t border-border/80 px-4 py-3.5 font-normal tracking-tight sm:px-6"
                           >
                              {row.label}
                           </th>
                           <td className="border-t font-medium text-orange-600 border-border/80 px-4 py-3.5 sm:px-6">
                              {row.bank}
                           </td>
                           <td className="border-t border-border/80 text-emerald-500 border-l px-4 py-3.5 font-medium sm:px-6">
                              {row.loomra}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>

               <div className="flex flex-col gap-4 border-t border-neutral-200/70 bg-neutral-50 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                     <p className="font-heading text-sm font-medium tracking-tight">
                        {savings > 0 ? (
                           <>
                              You keep{" "}
                              <span className="text-emerald-700 tabular-nums">
                                 ${savings.toLocaleString("en-US")}
                              </span>{" "}
                              more on a ${sentLabel} transfer.
                           </>
                        ) : (
                           "Enter an amount to see what you keep."
                        )}
                     </p>
                     <p className="mt-0.5 text-[11px] text-muted-foreground">
                        Illustrative. Bank fees and markups vary by provider.
                     </p>
                  </div>
                  <Button className="shrink-0">Open an account</Button>
               </div>
            </div>
         </div>
      </section>
   );
}
