import {
   ArrowUpRight01Icon,
   CheckmarkCircle02Icon,
   Globe02Icon,
   HeartCheckIcon,
   Rocket01Icon,
   UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import { HIRING_PROCESS, ROLES } from "@/lib/roles";

export const metadata: Metadata = {
   title: "Careers",
   description:
      "Open roles at Loomra. Remote-first, small team, and a product used by the people building it.",
};

const PERKS = [
   {
      icon: Globe02Icon,
      title: "Remote first",
      copy: "Work from anywhere within a few time zones of your team. We hire for the overlap, not the postcode.",
   },
   {
      icon: Rocket01Icon,
      title: "Equity from day one",
      copy: "Everyone owns a meaningful slice of what they build, with a ten-year exercise window.",
   },
   {
      icon: HeartCheckIcon,
      title: "Health, properly",
      copy: "Private health cover for you and your dependants, plus a monthly wellbeing stipend.",
   },
   {
      icon: UserGroupIcon,
      title: "Time to think",
      copy: "25 days of holiday, local public holidays, and one no-meeting day every week.",
   },
];

const TEAM_COUNT = new Set(ROLES.map((role) => role.team)).size;

export default function CareersPage() {
   return (
      <>
         <PageHero
            eyebrow="Careers"
            title="Build the boring version of money."
            description="A small team, a product people use every day, and a problem that is genuinely hard to solve well. We are hiring across engineering, design, compliance and operations."
            aside={
               <div className="rounded-xl border border-border/70 bg-secondary/40 p-5">
                  <p className="font-heading text-3xl font-medium tracking-tighter">
                     {ROLES.length} roles
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                     Open across {TEAM_COUNT} teams. Remote-first, with hubs in
                     Lagos, Lisbon and London.
                  </p>
               </div>
            }
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <figure className="relative overflow-hidden rounded-xl border border-border/70 bg-secondary">
                  <Image
                     src="/careers/team-workshop.jpg"
                     alt="The Loomra team working through a problem around a shared table"
                     width={1600}
                     height={1000}
                     priority
                     sizes="(min-width: 1152px) 1104px, 100vw"
                     className="h-[260px] w-full object-cover object-center sm:h-[340px] lg:h-[420px]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/25 to-transparent p-5 sm:p-6">
                     <p className="max-w-md text-pretty text-sm font-medium text-white">
                        Most of what we ship starts on a wall of sticky notes,
                        not in a roadmap tool.
                     </p>
                  </figcaption>
               </figure>
            </div>
         </section>

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {PERKS.map((perk) => (
                     <li
                        key={perk.title}
                        className="flex h-full flex-col rounded-lg border border-border/70 bg-secondary/40 p-5"
                     >
                        <span className="grid size-8 place-items-center rounded border border-border/70 bg-background">
                           <HugeiconsIcon
                              icon={perk.icon}
                              strokeWidth={1.7}
                              className="size-4 text-accent-strong"
                           />
                        </span>
                        <h2 className="mt-4 font-heading text-base font-medium tracking-tighter">
                           {perk.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                           {perk.copy}
                        </p>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <section className="border-t border-border/60 px-6 py-24">
            <div className="mx-auto w-full max-w-6xl">
               <div className="flex flex-wrap items-end justify-between gap-4">
                  <h2 className="text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                     Open roles.
                  </h2>
                  <p className="text-xs text-muted-foreground">
                     Applications are reviewed weekly.
                  </p>
               </div>

               <ul className="mt-8 divide-y divide-border/70 overflow-hidden rounded-lg border border-border/70">
                  {ROLES.map((role) => (
                     <li key={role.slug}>
                        <Link
                           href={`/careers/${role.slug}`}
                           className="group grid gap-2 px-5 py-4 transition-colors hover:bg-secondary/50 sm:grid-cols-[1.4fr_0.7fr_0.7fr_auto] sm:items-center sm:gap-6"
                        >
                           <span>
                              <span className="block text-sm font-medium tracking-tight">
                                 {role.title}
                              </span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">
                                 {role.team} · {role.type}
                              </span>
                           </span>
                           <span className="text-xs text-muted-foreground">
                              {role.location}
                           </span>
                           <span className="rounded-full border border-border/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground sm:justify-self-start">
                              {role.team}
                           </span>
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              className="hidden size-4 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none sm:block"
                           />
                        </Link>
                     </li>
                  ))}
               </ul>

               <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  Nothing quite fits? Send a note to careers@loomra.com and tell
                  us what you would build.
               </p>
            </div>
         </section>

         <section className="px-6 pb-24">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
               <div>
                  <h2 className="text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                     How we hire.
                  </h2>
                  <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     Four steps, roughly two weeks, and a decision either way.
                     No take-home that takes a weekend unless we are paying for
                     it.
                  </p>

                  <p className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent-strong">
                     <HugeiconsIcon
                        icon={CheckmarkCircle02Icon}
                        strokeWidth={1.7}
                        className="size-3.5"
                     />
                     Feedback within one week of every stage
                  </p>
               </div>

               <ol className="divide-y divide-border/70 overflow-hidden rounded-lg border border-border/70">
                  {HIRING_PROCESS.map((step) => (
                     <li key={step.step} className="flex gap-4 px-5 py-4">
                        <span className="mt-0.5 font-numeric text-xs font-medium tabular-nums text-accent-strong">
                           {step.step}
                        </span>
                        <div>
                           <h3 className="font-heading text-base font-medium tracking-tight">
                              {step.title}
                           </h3>
                           <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                              {step.copy}
                           </p>
                        </div>
                     </li>
                  ))}
               </ol>
            </div>
         </section>

         <PageCta
            title="Not seeing your role?"
            description="We keep a list of people we would like to work with before the role exists. Send us a note and tell us what you are good at."
            primaryLabel="Email careers@loomra.com"
            primaryHref="mailto:careers@loomra.com"
            secondaryLabel="About Loomra"
            secondaryHref="/about"
         />
      </>
   );
}
