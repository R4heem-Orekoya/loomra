"use client";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
   question: string;
   answer: string;
};

type FaqGroup = {
   label: string;
   items: FaqItem[];
};

const GROUPS: FaqGroup[] = [
   {
      label: "General",
      items: [
         {
            question: "What do I need to open an account?",
            answer:
               "A government-issued ID, your address and a few minutes. Most accounts are verified the same day, and there's nothing to pay to get started.",
         },
         {
            question: "Which currencies can I hold?",
            answer:
               "You can hold 40+ currencies in one account, including US dollars, euros, pounds sterling and Nigerian naira. You can also get local account details for major currencies, so clients and employers can pay you like a local.",
         },
         {
            question: "Do I need the app?",
            answer:
               "No. Everything — balances, conversions, transfers, recipients — works in the browser. The mobile app adds instant notifications and biometric sign-in for when you're on the move.",
         },
         {
            question: "Can I get a card?",
            answer:
               "Yes. Virtual cards are issued instantly against your USD, EUR or GBP balance, and you can create a new one whenever you want a separate card for subscriptions.",
         },
      ],
   },
   {
      label: "Payments",
      items: [
         {
            question: "How long does a transfer take?",
            answer:
               "Most transfers land in seconds. A small number of routes depend on the receiving bank's cut-off times and can take up to one business day. You'll see the expected arrival time before you confirm.",
         },
         {
            question: "What does Loomra charge?",
            answer:
               "1.5% per transfer, capped at $20, and no markup hidden inside the rate. Currency conversion uses the mid-market rate, with the fee shown in full before you press send. There is no monthly fee and no minimum balance.",
         },
         {
            question: "Can I send to any country?",
            answer:
               "Loomra covers 100+ countries, with local rails in the major ones. A handful of routes need extra documents — you're told before you start, not after the money has left.",
         },
         {
            question: "What are my transfer limits?",
            answer:
               "Limits depend on how your account is verified. Your remaining allowance, and the limit for each route, is shown before you confirm a transfer.",
         },
      ],
   },
   {
      label: "Security",
      items: [
         {
            question: "Is my money safe?",
            answer:
               "Client money is held in segregated accounts with regulated banking partners — separate from our own funds, and never lent out. Accounts are protected by two-factor sign-in, device approvals and 24/7 fraud monitoring, and you can freeze your account instantly.",
         },
         {
            question: "Can I freeze my account?",
            answer:
               "Instantly, from the app or the browser. Freezing stops new payments and card authorisations while your balances and history stay intact, and unfreezing takes one tap.",
         },
      ],
   },
];

const FACTS = [
   { label: "Transfer fee", value: "1.5%, capped at $20" },
   { label: "Currencies held", value: "40+" },
   { label: "Countries covered", value: "100+" },
];

export default function Faq() {
   return (
      <section
         id="faq"
         aria-labelledby="faq-heading"
         className="scroll-mt-24 border-t border-border/60 py-24 lg:py-32"
      >
         <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)] lg:gap-20">
            <header className="lg:sticky lg:top-28 lg:self-start">
               <h2
                  id="faq-heading"
                  className="max-w-md text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
               >
                  The things people ask before signing up.
               </h2>
               <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                  Straight answers on fees, timing, limits and safety — with the
                  numbers shown before you send, not buried in a tariff sheet.
               </p>

               <dl className="mt-10 max-w-sm border-t border-border/70 text-sm">
                  {FACTS.map((fact) => (
                     <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-6 border-b border-border/70 py-3"
                     >
                        <dt className="text-xs text-muted-foreground">
                           {fact.label}
                        </dt>
                        <dd className="font-medium tracking-tight">
                           {fact.value}
                        </dd>
                     </div>
                  ))}
               </dl>

               <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted-foreground">
                  Still deciding?{" "}
                  <a
                     href="mailto:hello@loomra.com"
                     className="font-medium text-foreground underline-offset-4 hover:underline"
                  >
                     Talk to a human
                  </a>{" "}
                  — no sales script.
               </p>
            </header>

            <div className="flex flex-col gap-10">
               {GROUPS.map((group, index) => (
                  <FaqGroup
                     key={group.label}
                     group={group}
                     defaultOpen={
                        index === 0 ? group.items[0].question : undefined
                     }
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

function FaqGroup({
   group,
   defaultOpen,
}: {
   group: FaqGroup;
   defaultOpen?: string;
}) {
   return (
      <div>
         <h3 className="text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
            {group.label}
         </h3>

         <Accordion
            defaultValue={defaultOpen ? [defaultOpen] : undefined}
            className="mt-3 rounded-none border-x-0 border-t border-b-0 border-neutral-200/70"
         >
            {group.items.map((item) => (
               <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="border-b border-neutral-200/70 data-open:bg-transparent"
               >
                  <AccordionTrigger className="cursor-pointer items-center gap-6 border-0 px-0 py-4 font-heading text-base font-medium tracking-tight transition-colors hover:text-neutral-600 hover:no-underline focus-visible:text-neutral-600">
                     {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="-mx-2 max-w-xl pt-0 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                     {item.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </div>
   );
}
