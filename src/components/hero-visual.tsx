import { NfcIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CreditCardServiceProvider } from "./kibo-ui/credit-card";
import UserAvatar from "./user-avatar";

type PanelProps = {
   className?: string;
};

const BALANCES = [
   { code: "USD", flag: "us", amount: "$6,420.00" },
   { code: "EUR", flag: "eu", amount: "€3,180.00" },
   { code: "GBP", flag: "gb", amount: "£1,960.00" },
   { code: "NGN", flag: "ng", amount: "₦4,190,000" },
];

export default function HeroVisual() {
   return (
      <div
         aria-hidden="true"
         className="relative mx-auto mt-10 w-full max-w-5xl select-none sm:mt-24"
      >
         <div className="absolute inset-x-8 top-10 bottom-0 -z-10 rounded-[50%] bg-[#0D5C3A]/5 blur-3xl" />

         <div className="mx-auto grid max-w-md grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <BalanceCard className="col-span-1 sm:col-span-2 lg:col-span-1 lg:-rotate-2 lg:translate-y-3" />
            <VirtualCard className="col-span-1 lg:-translate-y-1" />
            <ActivityCard className="col-span-1 lg:rotate-1 lg:translate-y-4" />
         </div>
      </div>
   );
}

function BalanceCard({ className }: PanelProps) {
   return (
      <div
         className={cn(
            "rounded-xl border border-border/80 bg-white p-4 shadow-[0_28px_60px_-42px_rgba(0,0,0,0.2)] sm:p-5",
            className,
         )}
      >
         <div className="flex items-start justify-between gap-2">
            <div>
               <p className="text-[10px] font-medium text-muted-foreground">
                  Total balance
               </p>
               <p className="mt-0.5 font-sans text-2xl font-medium tracking-tighter tabular-nums">
                  $15,090.32
               </p>
            </div>
            <span className="mt-0.5 shrink-0 rounded-full bg-blue-600/10 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
               4 currencies
            </span>
         </div>

         <div className="mt-4 grid grid-cols-2 gap-1.5">
            {BALANCES.map((balance) => (
               <div
                  key={balance.code}
                  className="flex items-center gap-2 rounded-md bg-neutral-50 px-2 py-1.5 ring-1 ring-neutral-200/60"
               >
                  <Image
                     src={`/flags/${balance.flag}.svg`}
                     alt=""
                     width={20}
                     height={20}
                     unoptimized
                     className="size-7 shrink-0 rounded-full object-cover border"
                  />
                  <div className="min-w-0">
                     <p className="text-[10px] font-medium leading-none text-muted-foreground">
                        {balance.code}
                     </p>
                     <p className="mt-1 truncate font-sans text-xs font-semibold leading-none tracking-tighter tabular-nums">
                        {balance.amount}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function VirtualCard({ className }: PanelProps) {
   return (
      // `@container` makes the card its own query container for the type scale.
      // Its own padding can't use `cqw` (an element can't query itself), so it
      // uses `%` — the grid area equals the card width, so it scales together.
      <div
         className={cn(
            "@container relative flex aspect-[1.586] w-full flex-col justify-between overflow-hidden rounded-xl bg-foreground p-[min(20px,6.5%)] text-white shadow-2xl",
            className,
         )}
      >
         <div className="pointer-events-none absolute -top-16 -right-12 size-44 rounded-full bg-green-500/30 blur-2xl" />
         <div className="pointer-events-none absolute -bottom-20 -left-10 size-40 rounded-full bg-rose-500/40 blur-2xl" />

         <div className="relative flex items-center justify-between">
            <span className="flex items-center gap-[min(8px,1.5cqw)]">
               <span className="font-heading text-[min(18px,6cqw)] font-semibold tracking-tighter">
                  Loomra
               </span>
            </span>
            <span className="text-[min(10px,2.5cqw)] font-medium tracking-wide text-white/70">
               VIRTUAL
            </span>
         </div>

         <div className="relative flex items-center gap-[min(10px,2.4cqw)]">
            <HugeiconsIcon
               icon={NfcIcon}
               className="size-[min(28px,8cqw)] text-white/80"
            />
         </div>

         <div className="relative">
            <p className="font-numeric text-[min(18px,3.8cqw)] tracking-[0.12em] whitespace-nowrap text-white/80">
               •••• •••• •••• 4821
            </p>

            <div className="mt-[min(12px,2.6cqw)] flex items-end justify-between">
               <div>
                  <p className="text-[min(12px,3.6cqw)] font-semibold tracking-[0.08em] text-white/90 uppercase">
                     Raheem Orekoya
                  </p>
                  <p className="mt-0.5 text-[min(10px,2.9cqw)] tracking-[0.12em] text-white/70">
                     09/29
                  </p>
               </div>
               <CreditCardServiceProvider
                  className="h-auto w-[min(72px,24cqw)] brightness-0 invert"
                  format="logo"
                  type="Visa"
               />
            </div>
         </div>
      </div>
   );
}

function ActivityCard({ className }: PanelProps) {
   return (
      <div
         className={cn(
            "flex h-full flex-col gap-2.5 rounded-xl p-4 border border-border/80 bg-white shadow-[0_28px_60px_-42px_rgba(0,0,0,0.2)] ",
            className,
         )}
      >
         <div className="flex items-center justify-between">
            <span className="text-xs font-medium ">Transactions</span>
            <span className="text-[11px] text-blue-700 font-medium tracking-tighter">
               See all
            </span>
         </div>

         <div className="grid grid-cols-1 gap-2 mt-4">
            <div className="flex items-center gap-2 border border-border/60 px-2 py-1.5 bg-secondary/50 rounded-md">
               <UserAvatar name="Jakub" className="size-7" />
               <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium tracking-tighter">
                     Payment received
                  </p>
                  <p className="truncate text-[10px] text-muted-foreground">
                     Jakub · Berlin
                  </p>
               </div>
               <span className="hidden shrink-0 text-xs tracking-tighter font-medium text-green-700 tabular-nums sm:inline">
                  +$2,450
               </span>
            </div>

            <div className="flex items-center gap-2 border border-border/60 px-2 py-1.5 bg-secondary/50 rounded-md">
               <UserAvatar name="Quadri" className="size-7" />
               <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium tracking-tighter">
                     Payment sent
                  </p>
                  <p className="truncate text-[10px] text-muted-foreground">
                     Quadri · Nigeria
                  </p>
               </div>
               <span className="hidden shrink-0 text-xs tracking-tighter font-medium text-rose-700 tabular-nums sm:inline">
                  -$2,450
               </span>
            </div>

            <div className="flex items-center gap-2 border border-border/60 px-2 py-1.5 bg-secondary/50 rounded-md">
               <svg
                  viewBox="0 0 256 256"
                  preserveAspectRatio="xMidYMid"
                  aria-hidden="true"
                  focusable="false"
                  className="size-7"
               >
                  <path
                     d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
                     fill="#1ED760"
                  />
               </svg>
               <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium tracking-tight">
                     Spotify
                  </p>
                  <p className="truncate text-[10px] text-muted-foreground">
                     Card payment
                  </p>
               </div>
               <span className="shrink-0 text-xs font-medium text-rose-700 tracking-tighter tabular-nums">
                  −€10.99
               </span>
            </div>
         </div>
      </div>
   );
}
