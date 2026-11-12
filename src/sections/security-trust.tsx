"use client";

import {
   BankIcon,
   Certificate01Icon,
   CheckmarkCircle02Icon,
   Clock01Icon,
   CreditCardIcon,
   EncryptIcon,
   EyeIcon,
   Key01Icon,
   SecurityCheckIcon,
   type Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Control = {
   title: string;
   copy: string;
   meta: string;
   icon: typeof Shield01Icon;
};

type Status = {
   label: string;
   value: string;
   icon: typeof Shield01Icon;
};

type Stat = {
   value: string;
   label: string;
};

type Badge = {
   label: string;
   icon: typeof Shield01Icon;
};

const CONTROLS: Control[] = [
   {
      title: "Safeguarded funds",
      copy: "Client money sits in segregated accounts with regulated banking partners — never mixed with ours, never lent out.",
      meta: "Regulated partners · Segregated accounts",
      icon: BankIcon,
   },
   {
      title: "Encrypted end to end",
      copy: "TLS 1.3 in transit and AES-256 at rest. Card and bank details are tokenised, never stored in plain text.",
      meta: "TLS 1.3 · AES-256 at rest",
      icon: EncryptIcon,
   },
   {
      title: "Watched around the clock",
      copy: "Automated monitoring and human review flag unusual payments before they leave, every hour of every day.",
      meta: "Automated + human review",
      icon: EyeIcon,
   },
   {
      title: "You hold the keys",
      copy: "Two-factor sign-in, device approvals and instant freezes keep every account and card in your control.",
      meta: "2FA · Device approvals · Instant freeze",
      icon: Key01Icon,
   },
];

const STATUS: Status[] = [
   { label: "Funds safeguarded", value: "Segregated", icon: BankIcon },
   { label: "Encryption", value: "AES-256", icon: EncryptIcon },
   { label: "Fraud monitoring", value: "Live", icon: EyeIcon },
   { label: "Account access", value: "2FA on", icon: Key01Icon },
];

const STATS: Stat[] = [
   { value: "24/7", label: "Fraud monitoring" },
   { value: "256-bit", label: "Encryption at rest" },
   { value: "0", label: "Funds lent out" },
   { value: "170+", label: "Countries covered" },
];

const BADGES: Badge[] = [
   { label: "Regulated partners", icon: BankIcon },
   { label: "PCI DSS Level 1", icon: CreditCardIcon },
   { label: "SOC 2 Type II", icon: SecurityCheckIcon },
   { label: "ISO 27001", icon: Certificate01Icon },
];

/** Darken once the section top reaches the upper third of the viewport. */
const THEME_ENTER_AT = 0.32;
/** Lighten as soon as the section stops owning the screen on the way back up. */
const THEME_EXIT_AT = 0.45;
const THEME_SHIFT_MS = 500;

const SURFACE = "bg-muted/50";
const INSET = "bg-surface-inset";
const CHIP = "bg-surface-chip";

export default function SecurityTrust() {
   const sectionRef = useRef<HTMLElement>(null);

   useEffect(() => {
      const section = sectionRef.current;
      if (!section) return;

      const root = document.documentElement;
      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      );
      let frame = 0;
      let timer = 0;
      let dark = false;

      const setTheme = (next: boolean) => {
         if (next === dark) return;
         dark = next;

         if (!reduceMotion.matches) {
            root.classList.add("theme-shifting");
            window.clearTimeout(timer);
            timer = window.setTimeout(() => {
               root.classList.remove("theme-shifting");
            }, THEME_SHIFT_MS);
         }

         root.classList.toggle("dark", next);
      };

      const update = () => {
         frame = 0;
         const rect = section.getBoundingClientRect();
         const viewport = window.innerHeight;

         if (!dark) {
            // Darken only once the section has genuinely entered the viewport.
            if (rect.top <= viewport * THEME_ENTER_AT && rect.bottom > 0) {
               setTheme(true);
            }
            return;
         }

         // Hand the page back to light as soon as the section stops
         // owning the screen while scrolling back up.
         if (rect.top >= viewport * THEME_EXIT_AT || rect.bottom <= 0) {
            setTheme(false);
         }
      };

      const schedule = () => {
         if (!frame) frame = requestAnimationFrame(update);
      };

      update();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);

      return () => {
         cancelAnimationFrame(frame);
         window.removeEventListener("scroll", schedule);
         window.removeEventListener("resize", schedule);
         window.clearTimeout(timer);
         root.classList.remove("theme-shifting");
         root.classList.remove("dark");
      };
   }, []);

   return (
      <section
         ref={sectionRef}
         id="security"
         aria-labelledby="security-heading"
         className="relative scroll-mt-24 overflow-hidden py-24 lg:py-48"
      >
         <div className="relative mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <span className="text-sm font-medium text-foreground/80">
                  Security &amp; trust
               </span>

               <h2
                  id="security-heading"
                  className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl"
               >
                  Built like a bank. Moves like the internet.
               </h2>

               <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
                  Your money sits in segregated accounts with regulated
                  partners, moves over encrypted rails, and is watched around
                  the clock. Nothing leaves without you.
               </p>
            </header>

            <div className="mt-12 md:mt-16 grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
               <StatusPanel />

               <ul className="grid gap-3 sm:grid-cols-2">
                  {CONTROLS.map((control) => (
                     <ControlCard key={control.title} control={control} />
                  ))}
               </ul>
            </div>

            <dl
               className={cn(
                  "mt-3 grid grid-cols-2 overflow-hidden rounded-lg border border-border/40 sm:grid-cols-4",
                  SURFACE,
               )}
            >
               {STATS.map((stat, index) => (
                  <div
                     key={stat.label}
                     className={cn(
                        "flex flex-col-reverse gap-1.5 px-4 py-5 sm:px-5 sm:py-6",
                        index % 2 === 1 && "border-l border-border/06",
                        index >= 2 && "border-t border-border/60 sm:border-t-0",
                        index > 0 && "sm:border-l sm:border-border/60",
                     )}
                  >
                     <dt className="text-[11px] font-medium tracking-tight text-muted-foreground">
                        {stat.label}
                     </dt>
                     <dd className="text-2xl font-medium leading-none tracking-tighter tabular-nums sm:text-3xl">
                        {stat.value}
                     </dd>
                  </div>
               ))}
            </dl>

            <div className="mt-12 flex flex-col items-center gap-5">
               <ul className="flex flex-wrap items-center justify-center gap-2">
                  {BADGES.map((badge) => (
                     <li
                        key={badge.label}
                        className={cn(
                           "inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-[11px] font-medium tracking-tight text-muted-foreground",
                           CHIP,
                        )}
                     >
                        <HugeiconsIcon
                           icon={badge.icon}
                           strokeWidth={1.7}
                           className="size-3.5 text-accent-strong"
                        />
                        {badge.label}
                     </li>
                  ))}
               </ul>

               <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-xs text-muted-foreground">
                  <span>We never lend out your money.</span>
                  <span aria-hidden="true" className="text-border">
                     /
                  </span>
                  <span>We never sell your data.</span>
               </p>
            </div>
         </div>
      </section>
   );
}

function StatusPanel() {
   return (
      <div
         className={cn(
            "relative flex flex-col overflow-hidden rounded-lg border border-border/40 shadow-[0_28px_70px_-48px_rgba(0,0,0,0.7)]",
            SURFACE,
         )}
      >
         <div className="p-4">
            <div className="relative flex items-center justify-between gap-3">
               <span className="text-xs font-medium tracking-tight text-muted-foreground">
                  Protection status
               </span>
               <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-strong/10 bg-accent-strong/5 px-2.5 py-1 text-xs font-medium tracking-tight text-accent-strong">
                  Active
               </span>
            </div>

            <div className="mt-6">
               <p className="font-heading text-lg font-medium tracking-tight">
                  All safeguards running
               </p>
               <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                  Every layer checked moments ago.
               </p>
            </div>

            <ul className="relative mt-6 border border-border/60 rounded-lg p-0.5">
               <div className="bg-background border border-border/60 rounded-md overflow-hidden divide-y divide-border/60">
                  {STATUS.map((status) => (
                     <li
                        key={status.label}
                        className={cn(
                           "flex items-center justify-between gap-3 px-3 py-2.5",
                           INSET,
                        )}
                     >
                        <span className="flex min-w-0 items-center gap-2 text-xs font-medium tracking-tight">
                           <HugeiconsIcon
                              icon={status.icon}
                              strokeWidth={1.7}
                              className="size-3.5 shrink-0 text-muted-foreground"
                           />
                           <span className="truncate">{status.label}</span>
                        </span>
                        <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold tracking-tight text-accent-strong">
                           {status.value}
                           <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              strokeWidth={1.6}
                              className="size-3"
                           />
                        </span>
                     </li>
                  ))}
               </div>
            </ul>
         </div>

         <div className="relative mt-4 flex items-center justify-between gap-3 border-t border-border/70 px-4 py-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
               <HugeiconsIcon
                  icon={Clock01Icon}
                  strokeWidth={1.7}
                  className="size-3.5"
               />
               Last verified just now
            </span>
            <span className="text-[11px] font-semibold tracking-tight text-accent-strong">
               24/7
            </span>
         </div>
      </div>
   );
}

function ControlCard({ control }: { control: Control }) {
   return (
      <li
         className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-lg border border-border/40 hover:border-accent-strong/20",
            SURFACE,
         )}
      >
         <div className="px-3 py-3.5">
            <div className="flex items-center gap-2.5">
               <span
                  className={cn(
                     "grid size-7 shrink-0 place-items-center rounded border border-border/70 text-accent-strong",
                     INSET,
                  )}
               >
                  <HugeiconsIcon
                     icon={control.icon}
                     strokeWidth={1.7}
                     className="size-3.5"
                  />
               </span>
               <h3 className="font-heading text-sm font-medium tracking-tight">
                  {control.title}
               </h3>
            </div>

            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
               {control.copy}
            </p>
         </div>

         <div className="mt-auto flex items-center gap-1.5 border-t border-border/40 px-3 py-2">
            <HugeiconsIcon
               icon={CheckmarkCircle02Icon}
               strokeWidth={1.6}
               className="size-3 shrink-0 text-accent-strong"
            />
            <span className="truncate text-[10px] font-medium tracking-tight text-muted-foreground">
               {control.meta}
            </span>
         </div>
      </li>
   );
}
