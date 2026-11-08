"use client";

import { Tabs } from "@base-ui/react/tabs";
import Image from "next/image";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type Audience = {
   value: string;
   label: string;
   useCase: string;
   copy: string;
   points: string[];
   Card: () => ReactNode;
};

const AUDIENCES: Audience[] = [
   {
      value: "freelancers",
      label: "Freelancers",
      useCase: "Paid by clients abroad, without the wait.",
      copy: "Share an invoice link, get paid in USD, EUR or GBP, and withdraw in your local currency at the real rate.",
      points: ["Invoice links", "USD · EUR · GBP", "No client sign-up"],
      Card: InvoiceCard,
   },
   {
      value: "founders",
      label: "Founders",
      useCase: "A global team, paid from one balance.",
      copy: "Run contractor payroll across 100+ countries and see every rate and fee before a single payment leaves.",
      points: ["Contractor payroll", "100+ countries", "One shared balance"],
      Card: PayrollCard,
   },
   {
      value: "families",
      label: "Families",
      useCase: "Support home, in seconds not days.",
      copy: "Send to family in their local currency — no pickup paperwork, no branch queues, just money in their account.",
      points: ["Local currency", "No pickup paperwork", "Fee shown up front"],
      Card: FamilyCard,
   },
];

const CARD_CLASS =
   "w-full max-w-sm rounded-xl border border-neutral-200/80 bg-white p-5 shadow-[0_20px_50px_-34px_rgba(0,0,0,0.45)]";

const CONTRACTORS = [
   { name: "Amara Okafor", city: "Lagos", amount: "₦1,890,000", flag: "ng" },
   { name: "Léa Martin", city: "Paris", amount: "€1,200.00", flag: "eu" },
   { name: "Tom Hughes", city: "London", amount: "£980.00", flag: "gb" },
];

const AVATAR_SRC = "https://api.dicebear.com/10.x/glass/svg?seed=amara-okafor";

export default function WhoWeServe() {
   const [active, setActive] = useState(AUDIENCES[0].value);
   const [switches, setSwitches] = useState(0);

   return (
      <section
         id="who-we-serve"
         aria-labelledby="who-we-serve-heading"
         className="scroll-mt-24 py-24 lg:py-32"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <span className="text-sm font-semibold text-foreground/80 tracking-tight">
                  Who we serve
               </span>
               <h2
                  id="who-we-serve-heading"
                  className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
               >
                  Built around how you send.
               </h2>
            </header>

            <Tabs.Root
               value={active}
               onValueChange={(value) => {
                  setActive(value as string);
                  setSwitches((count) => count + 1);
               }}
               className="mt-10"
            >
               <Tabs.List
                  aria-label="Who we serve"
                  className="relative grid w-full grid-cols-3 gap-0.5 rounded-full border border-neutral-200/80 bg-neutral-50 p-1 sm:mx-auto sm:flex sm:w-fit sm:gap-1"
               >
                  <Tabs.Indicator className="tab-indicator pointer-events-none absolute top-(--active-tab-top) left-(--active-tab-left) z-0 h-(--active-tab-height) w-(--active-tab-width) rounded-full">
                     <span
                        key={switches}
                        className={cn(
                           "block size-full rounded-full bg-neutral-900",
                           switches > 0 && "tab-pill-stretch",
                        )}
                     />
                  </Tabs.Indicator>

                  {AUDIENCES.map((audience) => (
                     <Tabs.Tab
                        key={audience.value}
                        value={audience.value}
                        className="relative flex cursor-pointer items-center justify-center rounded-full px-3 py-1.5 text-[13px] font-medium tracking-tight text-muted-foreground outline-none transition-colors delay-0 duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 data-active:text-white data-active:delay-100 data-active:hover:text-white sm:px-4 sm:text-sm"
                     >
                        <span className="relative z-10">{audience.label}</span>
                     </Tabs.Tab>
                  ))}
               </Tabs.List>

               <div className="mt-10">
                  {AUDIENCES.map((audience) => {
                     const Card = audience.Card;
                     return (
                        <Tabs.Panel key={audience.value} value={audience.value}>
                           <div className="panel-in grid gap-8 rounded-lg border border-neutral-200/70 bg-neutral-50 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:p-10">
                              <div>
                                 <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-tight text-muted-foreground">
                                    <span className="size-1.5 rounded-full bg-[#0D5C3A]" />
                                    For {audience.label.toLowerCase()}
                                 </span>
                                 <h3 className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl">
                                    {audience.useCase}
                                 </h3>
                                 <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                                    {audience.copy}
                                 </p>
                                 <ul className="mt-6 flex flex-wrap gap-2">
                                    {audience.points.map((point) => (
                                       <li
                                          key={point}
                                          className="rounded-full border border-neutral-200/80 bg-white px-3 py-1 text-xs font-medium tracking-tight text-neutral-600"
                                       >
                                          {point}
                                       </li>
                                    ))}
                                 </ul>
                              </div>

                              <div className="flex justify-center lg:justify-end">
                                 <Card />
                              </div>
                           </div>
                        </Tabs.Panel>
                     );
                  })}
               </div>
            </Tabs.Root>
         </div>
      </section>
   );
}

function InvoiceCard() {
   return (
      <div className={CARD_CLASS}>
         <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">
               Invoice #LM-0427
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
               <span className="size-1.5 rounded-full bg-emerald-500" />
               Paid
            </span>
         </div>

         <p className="mt-4 text-[10px] font-medium text-neutral-500">
            Billed to
         </p>
         <p className="font-heading text-sm font-semibold tracking-tight">
            Northwind Studio
         </p>
         <p className="mt-4 font-sans text-3xl font-semibold tracking-tight">
            $2,400.00
         </p>

         <dl className="mt-3 space-y-1.5 border-t border-neutral-200/80 pt-3 text-[11px]">
            <div className="flex justify-between gap-4">
               <dt className="text-neutral-500">Rate</dt>
               <dd className="font-sans font-medium tracking-tight">
                  1 USD = 1,524.19
               </dd>
            </div>
            <div className="flex justify-between gap-4">
               <dt className="text-neutral-500">You receive</dt>
               <dd className="font-sans font-semibold tracking-tight">
                  ₦3,657,600
               </dd>
            </div>
         </dl>

         <p className="mt-4 text-[10px] font-medium text-emerald-700">
            In your account · 4 seconds
         </p>
      </div>
   );
}

function PayrollCard() {
   return (
      <div className={CARD_CLASS}>
         <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-500">
               Payroll · October
            </span>
            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600">
               3 contractors
            </span>
         </div>

         <ul className="mt-3 divide-y divide-neutral-200/70">
            {CONTRACTORS.map((contractor) => (
               <li
                  key={contractor.name}
                  className="flex items-center gap-2.5 py-2.5"
               >
                  <Image
                     src={`/flags/${contractor.flag}.svg`}
                     alt=""
                     width={20}
                     height={20}
                     unoptimized
                     draggable={false}
                     className="size-5 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                     <p className="truncate font-heading text-xs font-semibold tracking-tight">
                        {contractor.name}
                     </p>
                     <p className="-mt-0.5 text-[10px] text-neutral-500">
                        {contractor.city}
                     </p>
                  </div>
                  <span className="font-sans text-[11px] font-semibold tracking-tight">
                     {contractor.amount}
                  </span>
               </li>
            ))}
         </ul>

         <div className="mt-2 flex items-center justify-between border-t border-neutral-200/80 pt-3">
            <span className="text-[11px] font-medium text-neutral-500">
               Total this run
            </span>
            <span className="font-sans text-sm font-semibold tracking-tight">
               $3,776.00
            </span>
         </div>
      </div>
   );
}

function FamilyCard() {
   return (
      <div className={CARD_CLASS}>
         <p className="text-xs font-medium text-neutral-500">Transfer to</p>

         <div className="mt-2 flex items-center gap-2.5">
            <Image
               src={AVATAR_SRC}
               alt=""
               width={36}
               height={36}
               unoptimized
               draggable={false}
               className="size-9 rounded-full"
            />
            <div>
               <p className="font-heading text-sm font-semibold tracking-tight">
                  Amara Okafor
               </p>
               <p className="-mt-0.5 text-[10px] text-neutral-500">
                  Lagos, Nigeria · Family
               </p>
            </div>
         </div>

         <div className="mt-5">
            <p className="text-[10px] font-medium text-neutral-500">
               They receive
            </p>
            <p className="mt-0.5 font-sans text-2xl font-semibold tracking-tight">
               ₦1,890,000
            </p>
            <p className="text-[10px] font-medium text-neutral-500">
               from $1,240.00
            </p>
         </div>

         <div className="mt-4 flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-2 text-[10px] font-semibold text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            In her account in 4 seconds
         </div>
      </div>
   );
}
