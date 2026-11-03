import { cn } from "@/lib/utils";

const card =
   "absolute hidden w-40 select-none rounded-2xl border border-border/70 bg-card p-3 shadow-[0_24px_50px_-28px_rgb(0_0_0_/_0.35)] animate-float motion-reduce:animate-none lg:block";

/**
 * Floating fintech fragments that orbit the hero copy: a transfer, a live rate,
 * a cross-border route and an arrival receipt, plus a couple of loose coins.
 * Purely decorative and hidden on small screens where the copy needs the room.
 */
export default function HeroDecor() {
   return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
         {/* Live rate */}
         <div
            className={cn(
               card,
               "left-[4%] top-[13%] -rotate-3 [animation-delay:-1.5s]",
            )}
         >
            <div className="flex items-center justify-between text-[9px] font-medium text-muted-foreground">
               <span>USD → EUR</span>
               <span className="text-emerald-600 dark:text-emerald-400">
                  +0.12%
               </span>
            </div>
            <p className="mt-0.5 text-base font-semibold tracking-tight">
               0.9214
            </p>
            <svg
               aria-hidden="true"
               viewBox="0 0 96 28"
               fill="none"
               className="w-full"
            >
               <path
                  d="M2 22 14 18 24 20 34 13 44 15 56 9 68 12 80 6 94 8V28H2Z"
                  className="fill-emerald-500/10"
               />
               <path
                  d="M2 22 14 18 24 20 34 13 44 15 56 9 68 12 80 6 94 8"
                  className="stroke-emerald-500"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <circle cx="94" cy="8" r="2.5" className="fill-emerald-500" />
            </svg>
            <p className="text-[8px] text-muted-foreground">Mid-market rate</p>
         </div>

         {/* Transfer */}
         <div
            className={cn(
               card,
               "right-[4%] top-[9%] rotate-2 [animation-delay:-4s]",
            )}
         >
            <div className="flex items-center gap-2">
               <span className="grid size-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-[8px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  AO
               </span>
               <div className="min-w-0 leading-tight">
                  <p className="truncate text-[9px] font-medium">
                     Amara Okafor
                  </p>
                  <p className="text-[8px] text-muted-foreground">Lagos, NG</p>
               </div>
               <span className="ml-auto rounded-full bg-emerald-100 px-1.5 py-0.5 text-[7px] font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                  Sent
               </span>
            </div>
            <p className="mt-3 text-lg font-semibold tracking-tight">
               $1,240<span className="text-muted-foreground">.00</span>
            </p>
            <p className="text-[8px] text-muted-foreground">
               No fees · arrives in seconds
            </p>
         </div>

         {/* Route */}
         <div
            className={cn(
               card,
               "bottom-[14%] left-[4%] rotate-2 [animation-delay:-2.5s]",
            )}
         >
            <p className="flex items-center justify-between text-[9px] font-medium">
               <span className="flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-foreground/60" />
                  London
               </span>
               <span className="flex items-center gap-1">
                  Accra
                  <span className="size-1.5 rounded-full bg-emerald-500" />
               </span>
            </p>
            <svg
               aria-hidden="true"
               viewBox="0 0 160 48"
               fill="none"
               className="w-full"
            >
               <path
                  d="M8 38C42 4 118 4 152 32"
                  strokeDasharray="3 4"
                  className="stroke-border"
                  strokeWidth="1.5"
               />
               <circle cx="8" cy="38" r="3" className="fill-foreground/60" />
               <circle cx="152" cy="32" r="4.5" className="fill-emerald-500" />
               <path
                  d="M0 0 11 4.5 0 9 2.5 4.5Z"
                  transform="translate(73 3) rotate(12)"
                  className="fill-sky-500"
               />
            </svg>
            <p className="flex items-center justify-between text-[8px] text-muted-foreground">
               <span>2 seconds</span>
               <span className="text-emerald-600 dark:text-emerald-400">
                  $0.00 fee
               </span>
            </p>
         </div>

         {/* Arrival receipt */}
         <div
            className={cn(
               card,
               "bottom-[16%] right-[4%] -rotate-2 border-emerald-200/80 bg-emerald-50 [animation-delay:-6s] dark:border-emerald-500/20 dark:bg-emerald-500/10",
            )}
         >
            <div className="flex items-center gap-2">
               <span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-white shadow-sm">
                  <svg
                     aria-hidden="true"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="3"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="size-3.5"
                  >
                     <path d="m5 13 4 4L19 7" />
                  </svg>
               </span>
               <div className="leading-tight">
                  <p className="text-[9px] font-semibold text-emerald-900 dark:text-emerald-100">
                     Money arrived
                  </p>
                  <p className="text-[8px] text-emerald-700/80 dark:text-emerald-300/80">
                     ₦1,890,000 · 1.4s
                  </p>
               </div>
            </div>
         </div>

         {/* Loose coins */}
         <div className="absolute top-[44%] left-[12%] hidden lg:block">
            <div className="relative size-14 -rotate-12 animate-float [animation-delay:-3s] motion-reduce:animate-none">
               <span className="absolute inset-0 grid place-items-center rounded-full bg-amber-100 text-lg font-semibold text-amber-700 ring-1 ring-amber-300/60 shadow-[0_10px_24px_-12px_rgb(0_0_0_/_0.4)] dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-400/30">
                  €
               </span>
               <span className="absolute -right-4 -bottom-3 grid size-8 place-items-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-300/60 shadow-[0_8px_20px_-10px_rgb(0_0_0_/_0.35)] dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-400/30">
                  $
               </span>
            </div>
         </div>

         <div className="absolute top-[40%] right-[12%] hidden lg:block">
            <div className="relative size-12 rotate-12 animate-float [animation-delay:-5s] motion-reduce:animate-none">
               <span className="absolute inset-0 grid place-items-center rounded-full bg-sky-100 text-base font-semibold text-sky-700 ring-1 ring-sky-300/60 shadow-[0_10px_24px_-12px_rgb(0_0_0_/_0.4)] dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-400/30">
                  £
               </span>
               <span className="absolute -bottom-2 -left-3 grid size-7 place-items-center rounded-full bg-emerald-100 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-300/60 shadow-[0_8px_20px_-10px_rgb(0_0_0_/_0.35)] dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-400/30">
                  ¥
               </span>
            </div>
         </div>
      </div>
   );
}
