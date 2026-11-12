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
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
   title: "Security",
   description:
      "Segregated accounts, AES-256 encryption, 24/7 fraud monitoring and 2FA. How Loomra protects your money and your account.",
};

const CONTROLS = [
   {
      icon: BankIcon,
      title: "Safeguarded funds",
      copy: "Client money sits in segregated accounts with regulated banking partners — never mixed with ours, never lent out.",
      meta: "Regulated partners · Segregated accounts",
   },
   {
      icon: EncryptIcon,
      title: "Encrypted end to end",
      copy: "TLS 1.3 in transit and AES-256 at rest. Card and bank details are tokenised, never stored in plain text.",
      meta: "TLS 1.3 · AES-256 at rest",
   },
   {
      icon: EyeIcon,
      title: "Watched around the clock",
      copy: "Automated monitoring and human review flag unusual payments before they leave, every hour of every day.",
      meta: "Automated + human review",
   },
   {
      icon: Key01Icon,
      title: "You hold the keys",
      copy: "Two-factor sign-in, device approvals and instant freezes keep every account and card in your control.",
      meta: "2FA · Device approvals · Instant freeze",
   },
];

const STATUS = [
   { label: "Funds safeguarded", value: "Segregated", icon: BankIcon },
   { label: "Encryption", value: "AES-256", icon: EncryptIcon },
   { label: "Fraud monitoring", value: "Live", icon: EyeIcon },
   { label: "Account access", value: "2FA on", icon: Key01Icon },
];

const STATS = [
   { value: "24/7", label: "Fraud monitoring" },
   { value: "256-bit", label: "Encryption at rest" },
   { value: "0", label: "Funds lent out" },
   { value: "100+", label: "Countries covered" },
];

const BADGES = [
   { label: "Regulated partners", icon: BankIcon },
   { label: "PCI DSS Level 1", icon: CreditCardIcon },
   { label: "SOC 2 Type II", icon: SecurityCheckIcon },
   { label: "ISO 27001", icon: Certificate01Icon },
];

const STEPS = [
   {
      title: "Verified once, checked every time",
      copy: "Identity is verified before an account opens. Every later session is checked against the device and the usual pattern of activity.",
   },
   {
      title: "Screened before it moves",
      copy: "Each payment is screened against sanctions lists and fraud signals before it leaves. Anything unusual waits for a human.",
   },
   {
      title: "Protected if it goes wrong",
      copy: "Suspicious card payments can be reversed. If you report a lost device, cards and sessions are frozen in one tap.",
   },
];

export default function SecurityPage() {
   return (
      <>
         <PageHero
            eyebrow="Security & trust"
            title="Built like a bank. Moves like the internet."
            description="Your money sits in segregated accounts with regulated partners, moves over encrypted rails, and is watched around the clock. Nothing leaves without you."
            actions={
               <>
                  <Link
                     href="/legal/disclosures"
                     className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "h-10 px-5 text-sm",
                     )}
                  >
                     Read our disclosures
                  </Link>
                  <Link
                     href="/contact"
                     className={cn(
                        buttonVariants({ variant: "ghost", size: "lg" }),
                        "h-10 px-5 text-sm",
                     )}
                  >
                     Report a security issue
                  </Link>
               </>
            }
            aside={
               <div className="rounded-xl border border-border/60 bg-surface p-4 shadow-[0_28px_70px_-48px_rgba(0,0,0,0.8)]">
                  <div className="flex items-center justify-between gap-3">
                     <span className="text-xs font-medium tracking-tight text-muted-foreground">
                        Protection status
                     </span>
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-strong/20 bg-accent-strong/10 px-2.5 py-1 text-xs font-medium tracking-tight text-accent-strong">
                        Active
                     </span>
                  </div>

                  <p className="mt-5 font-heading text-lg font-medium tracking-tight">
                     All safeguards running
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                     Every layer checked moments ago.
                  </p>

                  <ul className="mt-5 divide-y divide-border/60 overflow-hidden rounded-lg border border-border/60 bg-surface-inset">
                     {STATUS.map((status) => (
                        <li
                           key={status.label}
                           className="flex items-center justify-between gap-3 px-3 py-2.5"
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
                  </ul>

                  <p className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                     <HugeiconsIcon
                        icon={Clock01Icon}
                        strokeWidth={1.7}
                        className="size-3.5"
                     />
                     Last verified just now
                  </p>
               </div>
            }
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <ul className="grid gap-3 sm:grid-cols-2">
                  {CONTROLS.map((control) => (
                     <li
                        key={control.title}
                        className="flex h-full flex-col overflow-hidden rounded-lg border border-border/50 bg-surface"
                     >
                        <div className="px-5 py-5">
                           <div className="flex items-center gap-2.5">
                              <span className="grid size-8 shrink-0 place-items-center rounded border border-border/70 bg-surface-inset text-accent-strong">
                                 <HugeiconsIcon
                                    icon={control.icon}
                                    strokeWidth={1.7}
                                    className="size-4"
                                 />
                              </span>
                              <h2 className="font-heading text-base font-medium tracking-tight">
                                 {control.title}
                              </h2>
                           </div>

                           <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {control.copy}
                           </p>
                        </div>

                        <div className="mt-auto flex items-center gap-1.5 border-t border-border/50 px-5 py-3">
                           <HugeiconsIcon
                              icon={CheckmarkCircle02Icon}
                              strokeWidth={1.6}
                              className="size-3.5 shrink-0 text-accent-strong"
                           />
                           <span className="truncate text-xs font-medium tracking-tight text-muted-foreground">
                              {control.meta}
                           </span>
                        </div>
                     </li>
                  ))}
               </ul>

               <dl className="mt-3 grid grid-cols-2 overflow-hidden rounded-lg border border-border/50 bg-surface sm:grid-cols-4">
                  {STATS.map((stat, index) => (
                     <div
                        key={stat.label}
                        className={cn(
                           "flex flex-col-reverse gap-1.5 px-5 py-6",
                           index % 2 === 1 && "border-l border-border/50",
                           index >= 2 &&
                              "border-t border-border/50 sm:border-t-0",
                           index > 0 && "sm:border-l sm:border-border/50",
                        )}
                     >
                        <dt className="text-xs font-medium tracking-tight text-muted-foreground">
                           {stat.label}
                        </dt>
                        <dd className="text-2xl font-medium leading-none tracking-tighter tabular-nums sm:text-3xl">
                           {stat.value}
                        </dd>
                     </div>
                  ))}
               </dl>
            </div>
         </section>

         <section className="border-t border-border/50 px-6 py-24">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
               <div>
                  <span className="text-sm font-medium text-muted-foreground">
                     Under the hood
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                     Three checks between you and the money leaving.
                  </h2>
                  <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     Security is not a page on a website. It is the sequence
                     every session and every payment has to pass before it
                     becomes real.
                  </p>
               </div>

               <ol className="divide-y divide-border/50 overflow-hidden rounded-lg border border-border/50 bg-surface">
                  {STEPS.map((step, index) => (
                     <li key={step.title} className="flex gap-4 px-5 py-5">
                        <span className="mt-0.5 font-numeric text-xs font-medium tabular-nums text-accent-strong">
                           {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                           <h3 className="font-heading text-base font-medium tracking-tight">
                              {step.title}
                           </h3>
                           <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {step.copy}
                           </p>
                        </div>
                     </li>
                  ))}
               </ol>
            </div>
         </section>

         <section className="px-6 pb-24">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6">
               <ul className="flex flex-wrap items-center justify-center gap-2">
                  {BADGES.map((badge) => (
                     <li
                        key={badge.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-surface-chip px-3 py-1.5 text-xs font-medium tracking-tight text-muted-foreground"
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

               <p className="max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
                  Loomra is a financial technology company, not a bank. Banking
                  and card services are provided by licensed partners. The
                  certifications shown describe the standards this concept is
                  designed around.
               </p>
            </div>
         </section>

         <PageCta
            title="Keep your money, and your access, in your hands."
            description="Open an account, turn on two-factor sign-in, and freeze anything you don't recognise — instantly."
            primaryLabel="Open an account"
            primaryHref="/signup"
            secondaryLabel="Read the disclosures"
            secondaryHref="/legal/disclosures"
         />
      </>
   );
}
