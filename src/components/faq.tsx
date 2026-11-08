type FaqItem = {
   question: string;
   answer: string;
};

const ITEMS: FaqItem[] = [
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
      question: "Is my money safe?",
      answer:
         "Client money is held in segregated accounts with regulated banking partners — separate from our own funds, and never lent out. Accounts are protected by two-factor sign-in, device approvals and 24/7 fraud monitoring, and you can freeze your account instantly.",
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
      question: "What do I need to open an account?",
      answer:
         "A government-issued ID, your address and a few minutes. Most accounts are verified the same day, and there's nothing to pay to get started.",
   },
];

export default function Faq() {
   return (
      <section
         id="faq"
         aria-labelledby="faq-heading"
         className="scroll-mt-24 py-24 lg:py-32"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <span className="text-sm font-semibold text-foreground/80 tracking-tight">
                  Questions
               </span>
               <h2
                  id="faq-heading"
                  className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
               >
                  The things people ask before signing up.
               </h2>
            </header>

            <div className="mx-auto mt-12 max-w-2xl border-t border-neutral-200/70">
               {ITEMS.map((item, index) => (
                  <details
                     key={item.question}
                     open={index === 0}
                     className="group border-b border-neutral-200/70"
                  >
                     <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-sm font-medium tracking-tight outline-none transition-colors hover:text-neutral-600 focus-visible:text-neutral-600 [&::-webkit-details-marker]:hidden">
                        {item.question}
                        <span
                           aria-hidden="true"
                           className="relative size-3.5 shrink-0 text-neutral-500"
                        >
                           <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                           <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current transition-transform duration-200 group-open:scale-y-0" />
                        </span>
                     </summary>
                     <p className="max-w-xl pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                     </p>
                  </details>
               ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
               Still deciding?{" "}
               <a
                  href="mailto:hello@loomra.com"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
               >
                  Talk to a human
               </a>{" "}
               — no sales script.
            </p>
         </div>
      </section>
   );
}
