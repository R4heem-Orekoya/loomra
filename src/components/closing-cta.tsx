import { Button } from "@/components/ui/button";

export default function ClosingCta() {
   return (
      <section
         id="open-account"
         aria-labelledby="cta-heading"
         className="scroll-mt-24 pb-24 lg:pb-32"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <div className="relative isolate overflow-hidden rounded-2xl bg-neutral-950 px-6 py-16 text-center sm:px-12 lg:py-20">
               <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_115%,rgba(13,92,58,0.28),transparent_70%)]"
               />

               <p className="text-sm font-semibold tracking-tight text-neutral-400">
                  Open an account
               </p>
               <h2
                  id="cta-heading"
                  className="mx-auto mt-3 max-w-xl text-balance font-heading text-3xl font-medium tracking-tighter text-white sm:text-4xl"
               >
                  Your money, everywhere you need it.
               </h2>
               <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-neutral-400">
                  Hold 40+ currencies, convert at the real rate and send in
                  seconds. No monthly fee, no minimum balance, no surprises.
               </p>

               <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row">
                  <Button
                     size="lg"
                     className="bg-white text-neutral-950 hover:bg-white/90"
                  >
                     Open an account
                  </Button>
                  <Button
                     size="lg"
                     variant="outline"
                     className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  >
                     Get the app
                  </Button>
               </div>

               <p className="mt-5 text-[11px] text-neutral-500">
                  Free to open · Close any time · Support in 12 languages
               </p>
            </div>
         </div>
      </section>
   );
}
