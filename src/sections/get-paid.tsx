import {
   CheckmarkCircle02Icon,
   PassportValidIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import type { ReactNode } from "react";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";

type Step = {
   number: string;
   title: string;
   copy: string;
   Art: () => ReactNode;
};

const CARD = "rounded-lg border border-border/80 bg-secondary/50";

const ACCOUNTS = [
   { code: "USD", flag: "us", tail: "4821" },
   { code: "EUR", flag: "eu", tail: "9014" },
   { code: "GBP", flag: "gb", tail: "3367" },
   { code: "NGN", flag: "ng", tail: "2208" },
];

const STEPS: Step[] = [
   {
      number: "01",
      title: "Sign up",
      copy: "Create your Loomra account with your email. It takes about two minutes, with no paperwork and no branch visit.",
      Art: SignUpArt,
   },
   {
      number: "02",
      title: "Verify identity",
      copy: "Upload a photo ID and a quick selfie. We confirm it in minutes, keeping your money and your account yours.",
      Art: VerifyArt,
   },
   {
      number: "03",
      title: "Get your accounts",
      copy: "Your USD, EUR, GBP and NGN account details are ready right away. Share them and start getting paid.",
      Art: AccountsArt,
   },
];

export default function GetPaid() {
   return (
      <section
         id="how-it-works"
         aria-labelledby="get-paid-heading"
         className="relative scroll-mt-24 py-24 lg:py-48"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <span className="text-sm font-semibold tracking-tight text-foreground/80">
                  How it works
               </span>
               <h2
                  id="get-paid-heading"
                  className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
               >
                  Get paid globally in{" "}
                  <span className="text-accent-strong">3 easy steps</span>.
               </h2>
               <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
                  Open an account, verify who you are and receive money in the
                  currencies you get paid in without the paperwork.
               </p>
            </header>

            <div className="mt-14 grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
               {STEPS.map((step, index) => {
                  const Art = step.Art;
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
                           className="relative grid aspect-3/2 place-items-center overflow-hidden rounded-lg border border-border/80 bg-secondary/50 p-4"
                        >
                           <Art />
                        </div>

                        <div className="flex flex-1 flex-col px-0.5 pt-2.5">
                           <span className="text-[11px] font-medium tabular-nums tracking-tight text-muted-foreground">
                              {step.number}
                           </span>
                           <h3 className="mt-0.5 font-heading text-lg font-medium tracking-tighter">
                              {step.title}
                           </h3>
                           <p className="mt-1 text-sm leading-snug tracking-tight text-muted-foreground">
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

function SignUpArt() {
   return (
      <div className="relative w-full max-w-[248px] rounded-lg border border-border/80 bg-card p-3 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
         <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground">
               Create your account
            </span>
            <span className="rounded-full bg-info/10 px-2 py-0.5 text-[9px] font-semibold text-info">
               Free
            </span>
         </div>

         <div className="mt-2 rounded-md border border-border/70 bg-secondary/50 px-2 py-1.5">
            <p className="text-[9px] leading-none text-muted-foreground">
               Email
            </p>
            <p className="mt-1 truncate text-[11px] font-medium tracking-tight">
               amara@loomra.com
            </p>
         </div>

         <div className="mt-1.5 rounded-md border border-border/70 bg-secondary/50 px-2 py-1.5">
            <p className="text-[9px] leading-none text-muted-foreground">
               Password
            </p>
            <p className="mt-1 text-[11px] tracking-[0.2em] text-foreground">
               ••••••••
            </p>
         </div>

         <div className="mt-2 rounded-full bg-foreground py-1.5 text-center text-[10px] font-medium tracking-tight text-background">
            Create account
         </div>
      </div>
   );
}

function VerifyArt() {
   return (
      <div className="relative w-full max-w-[248px] rounded-lg border border-border/80 bg-card p-3 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
         <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground">
               Verify identity
            </span>
            <span className="rounded-full bg-accent-strong/10 px-2 py-0.5 text-[9px] font-semibold text-accent-strong">
               Verified
            </span>
         </div>

         <div className={cn(CARD, "mt-2 flex items-center gap-2 px-2 py-1.5")}>
            <span className="grid size-6 shrink-0 place-items-center rounded-full border border-border/70 bg-card text-info">
               <HugeiconsIcon
                  icon={PassportValidIcon}
                  strokeWidth={1.8}
                  className="size-3"
               />
            </span>
            <div className="min-w-0 flex-1">
               <p className="text-[10px] font-medium tracking-tight">
                  Passport
               </p>
               <p className="text-[9px] text-muted-foreground">Uploaded</p>
            </div>
            <HugeiconsIcon
               icon={CheckmarkCircle02Icon}
               className="size-3.5 shrink-0 fill-accent-strong text-background"
               strokeWidth={1.4}
            />
         </div>

         <div
            className={cn(CARD, "mt-1.5 flex items-center gap-2 px-2 py-1.5")}
         >
            <UserAvatar name="Amara Okafor" className="size-6 shrink-0" />
            <div className="min-w-0 flex-1">
               <p className="text-[10px] font-medium tracking-tight">Selfie</p>
               <p className="text-[9px] text-muted-foreground">
                  Face match confirmed
               </p>
            </div>
            <HugeiconsIcon
               icon={CheckmarkCircle02Icon}
               className="size-3.5 shrink-0 fill-accent-strong text-background"
               strokeWidth={1.4}
            />
         </div>

         <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-green-600/15">
            <div className="h-full w-full rounded-full bg-green-600" />
         </div>
         <p className="mt-1 text-[9px] font-medium text-green-700 dark:text-green-400">
            Identity verified in 2 minutes
         </p>
      </div>
   );
}

function AccountsArt() {
   return (
      <div className="relative w-full max-w-[256px] rounded-lg border border-border/80 bg-card p-3 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
         <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium text-muted-foreground">
               Your accounts
            </span>
            <span className="rounded-full bg-info/10 px-2 py-0.5 text-[9px] font-semibold text-info">
               4 currencies
            </span>
         </div>

         <div className="mt-2 grid grid-cols-2 gap-1.5">
            {ACCOUNTS.map((account) => (
               <div
                  key={account.code}
                  className={cn(CARD, "flex items-center gap-2 px-2 py-1.5")}
               >
                  <Image
                     src={`/flags/${account.flag}.svg`}
                     alt=""
                     width={20}
                     height={20}
                     unoptimized
                     className="size-5 shrink-0 rounded-full border object-cover"
                  />
                  <div className="min-w-0">
                     <p className="text-[9px] font-medium leading-none text-muted-foreground">
                        {account.code}
                     </p>
                     <p className="mt-1 truncate text-[10px] font-medium leading-none tracking-tight tabular-nums">
                        •••• {account.tail}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-2 flex items-center justify-between">
            <span className="text-[9px] font-medium text-muted-foreground">
               Account details
            </span>
            <span className="text-[9px] font-semibold text-blue-600/80 dark:text-blue-400/80">
               Share
            </span>
         </div>
      </div>
   );
}
