import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Step = {
   number: string;
   title: string;
   copy: string;
   crop: "top" | "bottom";
   Screen: () => ReactNode;
};

const STEPS: Step[] = [
   {
      number: "01",
      title: "Send",
      copy: "Pick a recipient and enter the amount. No forms, no branch codes, no guesswork.",
      crop: "top",
      Screen: SendScreen,
   },
   {
      number: "02",
      title: "Convert",
      copy: "See the real mid-market rate and the exact fee before you commit. No hidden markup.",
      crop: "bottom",
      Screen: ConvertScreen,
   },
   {
      number: "03",
      title: "Confirm",
      copy: "One tap and it’s done. The money lands in their account in seconds, not days.",
      crop: "bottom",
      Screen: ConfirmScreen,
   },
];

const AVATAR_SRC = "https://api.dicebear.com/10.x/glass/svg?seed=amara-okafor";

export default function HowItWorks() {
   return (
      <section
         id="how-it-works"
         aria-labelledby="how-it-works-heading"
         className="relative scroll-mt-24 py-24 lg:py-32"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <span className="text-sm font-semibold text-foreground/80 tracking-tight">
                  How it works
               </span>
               <h2
                  id="how-it-works-heading"
                  className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
               >
                  Three steps.{" "}
                  <span className="relative inline-block">Zero surprises.</span>
               </h2>
               <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
                  From the first tap to the last, here’s exactly what happens to
                  your money — and why nothing about it is a surprise.
               </p>
            </header>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
               {STEPS.map((step, index) => {
                  const Screen = step.Screen;
                  return (
                     <div
                        key={step.number}
                        className={cn(
                           "group col-span-1",
                           // the third card sits alone on its row until three columns fit
                           index === 2 &&
                              "md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)] lg:col-span-1 lg:w-auto",
                        )}
                     >
                        <div
                           aria-hidden="true"
                           className="@container relative aspect-3/2 overflow-hidden rounded-lg bg-neutral-50 border border-neutral-200/70"
                        >
                           <div className="scale-75">
                              <Phone crop={step.crop}>
                                 <Screen />
                              </Phone>
                           </div>
                        </div>

                        <div className="flex flex-1 flex-col pt-2.5 px-0.5">
                           <h3 className="font-heading text-lg font-medium tracking-tighter">
                              {step.title}
                           </h3>
                           <p className="text-sm leading-snug tracking-tight mt-1 text-muted-foreground">
                              {step.copy}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

function ChevronLeftIcon({ className }: { className?: string }) {
   return (
      <svg
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={2.2}
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
         className={className}
      >
         <path d="m15 18-6-6 6-6" />
      </svg>
   );
}

function Avatar({ className }: { className?: string }) {
   return (
      <Image
         src={AVATAR_SRC}
         alt=""
         width={28}
         height={28}
         unoptimized
         draggable={false}
         className={cn("shrink-0 rounded-full", className)}
      />
   );
}

function SwapIcon({ className }: { className?: string }) {
   return (
      <svg
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
         className={className}
      >
         <path d="M7 20V5m0 0L4 8m3-3 3 3" />
         <path d="M17 4v15m0 0 3-3m-3 3-3-3" />
      </svg>
   );
}

function DeleteIcon({ className }: { className?: string }) {
   return (
      <svg
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={1.8}
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
         className={className}
      >
         <path d="M4 12 8.5 6H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8.5Z" />
         <path d="m12 9.5 5 5m0-5-5 5" />
      </svg>
   );
}

function LockIcon({ className }: { className?: string }) {
   return (
      <svg
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
         className={className}
      >
         <rect x="5" y="10" width="14" height="10" rx="2.5" />
         <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
   );
}

/* The heading face has no naira glyph and the fallback varies per platform,
   so the sign is drawn to match the weight of the digits. */
function Naira() {
   return (
      <svg
         viewBox="0 0 100 100"
         fill="none"
         stroke="currentColor"
         aria-hidden="true"
         className="mr-[0.06em] inline-block h-[0.72em] w-[0.62em] overflow-visible align-[-0.02em]"
      >
         <path
            d="M10 0v100M90 0v100M10 0l80 100"
            strokeWidth={16}
            strokeLinecap="butt"
         />
         <path d="M2 40h96M2 61h96" strokeWidth={11} strokeLinecap="butt" />
      </svg>
   );
}

function StatusIcons() {
   return (
      <span className="flex items-center gap-1 text-neutral-900">
         <svg
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="currentColor"
            aria-hidden="true"
            className="size-3.5 shrink-0"
         >
            <rect x="0" y="6.5" width="2.6" height="3.5" rx="0.8" />
            <rect x="4.1" y="4.5" width="2.6" height="5.5" rx="0.8" />
            <rect x="8.2" y="2.5" width="2.6" height="7.5" rx="0.8" />
            <rect
               x="12.3"
               y="0.5"
               width="2.6"
               height="9.5"
               rx="0.8"
               opacity="0.35"
            />
         </svg>

         <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-3.5 shrink-0"
         >
            <path d="M1 3.3a8.5 8.5 0 0 1 12 0" />
            <path d="M3.4 5.7a5.2 5.2 0 0 1 7.2 0" />
            <circle cx="7" cy="8.2" r="1" fill="currentColor" stroke="none" />
         </svg>

         <svg
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            aria-hidden="true"
            className="size-4.5 shrink-0"
         >
            <rect
               x="0.5"
               y="0.5"
               width="13.5"
               height="8"
               rx="2.4"
               stroke="currentColor"
               opacity="0.4"
            />
            <rect
               x="2"
               y="2"
               width="10.5"
               height="5"
               rx="1.4"
               fill="currentColor"
            />
            <rect
               x="15"
               y="3"
               width="2"
               height="3"
               rx="1"
               fill="currentColor"
               opacity="0.4"
            />
         </svg>
      </span>
   );
}

function StatusBar() {
   return (
      <div className="relative z-20 flex items-center justify-between px-6 pt-3.5 text-[10px] font-semibold text-neutral-900">
         <span className="tabular-nums ml-2">9:41</span>
         <StatusIcons />
      </div>
   );
}

function DynamicIsland() {
   return (
      <Squircle
         cornerRadius={50}
         className="absolute top-2.5 left-1/2 z-30 h-[24px] w-[30%] max-w-[92px] -translate-x-1/2 bg-black"
      >
         <span className="absolute top-1/2 right-2 size-2.5 -translate-y-1/2 rounded-full bg-[#1c1c1e]" />
      </Squircle>
   );
}

function HomeIndicator() {
   return (
      <Squircle
         cornerRadius={30}
         className="absolute bottom-1 left-1/2 z-30 h-[3px] w-[34%] -translate-x-1/2 bg-black/80"
      />
   );
}

function Phone({
   crop,
   children,
}: {
   crop: "top" | "bottom";
   children: ReactNode;
}) {
   return (
      <div
         className={cn(
            "absolute left-1/2 w-[78%] -translate-x-1/2 transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none",
            crop === "top" ? "top-6" : "-bottom-72",
         )}
      >
         <Squircle
            cornerRadius={45}
            cornerSmoothing={0.8}
            className="bg-[#0a0a0b] p-[4.5px] shadow-[0_45px_80px_-40px_rgba(0,0,0,0.65)] ring-1 ring-black/15"
         >
            <Squircle
               cornerRadius={41.5}
               cornerSmoothing={0.8}
               className="relative h-[480px] overflow-hidden rounded-[2.8rem] bg-white text-neutral-900"
            >
               {children}
            </Squircle>
         </Squircle>
      </div>
   );
}

/* ------------------------------ Screens ------------------------------ */

function SendScreen() {
   const keypad = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "0",
      "del",
   ];

   return (
      <>
         <div className="bg-neutral-100">
            <StatusBar />
            <DynamicIsland />
         </div>

         <div className="">
            <div className="relative flex items-center justify-between px-3 border-b border-neutral-200 pt-4 pb-2 bg-neutral-100">
               <ChevronLeftIcon className="size-3.5" />
               <span className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-tighter font-heading text-neutral-900">
                  Send money
               </span>
               <span className="text-[10px] leading-0 tracking-tight text-[#0BCC51]">
                  History
               </span>
            </div>

            <div className="px-3 mt-3">
               <div className="flex items-center justify-between pl-1">
                  <p className="text-[10px] font-medium tracking-tight text-neutral-500">
                     Recipient
                  </p>
               </div>

               <div className="flex items-center gap-2 mt-1.5 bg-neutral-100 rounded-lg border border-neutral-200/80 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <Avatar className="size-8.5" />
                  <div className="min-w-0 flex-1">
                     <p className="truncate text-xs font-semibold font-heading tracking-tighter">
                        Amara Okafor
                     </p>
                     <p className="text-[9px] text-neutral-500 -mt-0.5">
                        Lagos, Nigeria
                     </p>
                  </div>
                  <HugeiconsIcon
                     icon={CheckmarkCircle02Icon}
                     className="fill-green-600 text-white size-5"
                     strokeWidth={1.4}
                  />
               </div>

               <div className="mt-4 flex items-center justify-between pl-1">
                  <p className="text-[10px] font-medium tracking-tight text-neutral-500">
                     You send
                  </p>
                  <div className="rounded-full flex items-center bg-neutral-100 p-0.5 border border-neutral-200/80 pr-1.5 gap-1 text-[9px] font-semibold text-neutral-500">
                     <Image
                        src={`/flags/us.svg`}
                        alt=""
                        width={28}
                        height={28}
                        unoptimized
                        draggable={false}
                        className="size-3.5 rounded-full object-cover"
                     />
                     <span className="mt-px">USD</span>
                  </div>
               </div>

               <div className="mt-2 rounded-xl border-2 border-[#0BCC51]/50 bg-white p-3 pb-2">
                  <div className="flex items-baseline">
                     <span className="font-sans text-[clamp(20px,8.5cqw,28px)] leading-none font-semibold tracking-tight text-neutral-900">
                        $1,240
                     </span>
                     <span className="font-sans font-medium tracking-tight text-[clamp(15px,6.3cqw,21px)] leading-none text-neutral-500">
                        .00
                     </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[10px] text-neutral-500">
                     <span className="font-medium tracking-tight">
                        Fee{" "}
                        <span className="font-semibold font-sans text-emerald-600">
                           $0.00
                        </span>
                     </span>
                     <span className="text-[10px] font-medium tracking-tight">
                        Balance{" "}
                        <span className="text-neutral-900 font-sans font-semibold">
                           $8,420.00
                        </span>
                     </span>
                  </div>
               </div>

               <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-1">
                  {keypad.map((key) => (
                     <span
                        key={key}
                        className="flex h-7 items-center justify-center font-numeric text-[clamp(12px,4.5cqw,15px)] font-medium text-neutral-700"
                     >
                        {key === "del" ? (
                           <DeleteIcon className="size-4 text-neutral-500" />
                        ) : (
                           key
                        )}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}

function ConvertScreen() {
   return (
      <div className="absolute inset-0 flex flex-col">
         {/* The app, dimmed behind the sheet */}
         <div className="relative flex-1 bg-neutral-100">
            <div className="absolute inset-0 bg-neutral-950/20" />
            <div className="relative flex h-full flex-col items-center justify-end px-4 pb-[3cqw] text-center">
               <p className="text-[10px] font-medium tracking-tight text-neutral-500">
                  You send
               </p>
               <p className="mt-1 font-sans text-[clamp(16px,5.5cqw,20px)] leading-none font-semibold tracking-tight text-neutral-900">
                  $1,240
                  <span className="font-medium text-neutral-500">.00</span>
               </p>
            </div>
         </div>

         <div className="relative rounded-t-[1.75rem] bg-white px-4 pt-2 pb-4 shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.45)]">
            <span className="mx-auto block h-1 w-9 rounded-full bg-neutral-200" />

            <p className="mt-2.5 text-center text-[10px] font-medium tracking-tight text-neutral-500">
               Amara receives
            </p>
            <p className="mt-1 text-center font-sans text-[clamp(20px,8cqw,28px)] leading-none font-semibold tracking-tight text-neutral-900">
               ₦
               1,890,000
            </p>
            <p className="mt-1 text-center text-[10px] font-medium tracking-tight text-neutral-500">
               from{" "}
               <span className="font-sans font-semibold tracking-tight text-neutral-900">
                  $1,240.00
               </span>
            </p>

            <div className="mt-3 rounded-lg border border-neutral-200/80 bg-neutral-100 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
               <div className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 text-[10px] font-medium tracking-tight text-neutral-500">
                     <SwapIcon className="size-3 shrink-0" />
                     Rate
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-tight whitespace-nowrap text-neutral-900 [word-spacing:2px]">
                     1 USD = 1,524.19
                  </span>
               </div>
               <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-tight text-neutral-500">
                     Fee
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-tight text-emerald-600">
                     $0.00
                  </span>
               </div>
            </div>

            <div className="mt-2.5 rounded-full bg-[#0BCC51] py-2 text-center text-[12px] font-semibold tracking-tight text-white shadow-[0_10px_24px_-12px_rgba(11,204,81,0.9)]">
               Continue
            </div>
            <p className="mt-1.5 text-center text-[9px] font-medium tracking-tight text-neutral-500">
               Rate locked for 10:00
            </p>
         </div>

         <HomeIndicator />
      </div>
   );
}

function ConfirmScreen() {
   return (
      <div className="absolute inset-0 flex flex-col">
         {/* The app, dimmed behind the sheet */}
         <div className="relative flex-1 bg-neutral-100">
            <div className="absolute inset-0 bg-neutral-950/20" />
            <div className="relative flex h-full flex-col items-center justify-end px-4 pb-[3cqw] text-center">
               <p className="text-[10px] font-medium tracking-tight text-neutral-500">
                  Amara receives
               </p>
               <p className="mt-1 font-sans text-[clamp(16px,5.5cqw,20px)] leading-none font-semibold tracking-tight text-neutral-900">
                  ₦
                  1,890,000
               </p>
            </div>
         </div>

         <div className="relative rounded-t-[1.75rem] bg-white px-4 pt-2 pb-4 shadow-[0_-24px_60px_-30px_rgba(0,0,0,0.45)]">
            <span className="mx-auto block h-1 w-9 rounded-full bg-neutral-200" />

            <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-neutral-200/80 bg-neutral-100 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
               <Avatar className="size-8.5" />
               <div className="min-w-0 flex-1">
                  <p className="truncate font-heading text-xs font-semibold tracking-tighter">
                     Amara Okafor
                  </p>
                  <p className="-mt-0.5 text-[9px] text-neutral-500">
                     Lagos, Nigeria
                  </p>
               </div>
               <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  className="size-5 shrink-0 fill-green-600 text-white"
                  strokeWidth={1.4}
               />
            </div>

            <div className="mt-2.5 rounded-lg border border-neutral-200/80 bg-neutral-100 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-tight text-neutral-500">
                     You send
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-tight text-neutral-900">
                     $1,240.00
                  </span>
               </div>
               <div className="mt-1 flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-tight text-neutral-500">
                     Transfer fee
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-tight text-emerald-600">
                     $0.00
                  </span>
               </div>
               <div className="mt-1 flex items-center justify-between gap-2 border-t border-neutral-200/80 pt-1.5">
                  <span className="text-[10px] font-semibold tracking-tight text-neutral-900">
                     They receive
                  </span>
                  <span className="font-sans text-[11px] font-semibold tracking-tight whitespace-nowrap text-neutral-900">
                     <Naira />
                     1,890,000
                  </span>
               </div>
            </div>

            <div className="mt-2.5 rounded-full bg-[#0BCC51] py-2 text-center text-[12px] font-semibold tracking-tight text-white shadow-[0_10px_24px_-12px_rgba(11,204,81,0.9)]">
               Confirm &amp; send
            </div>
            <p className="mt-1 flex items-center justify-center gap-1 text-center text-[9px] font-medium tracking-tight whitespace-nowrap text-neutral-500">
               <LockIcon className="size-2.5 shrink-0" />
               Arrives in seconds
            </p>
         </div>

         <HomeIndicator />
      </div>
   );
}
