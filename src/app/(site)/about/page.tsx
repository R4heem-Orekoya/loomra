import {
   HeartCheckIcon,
   Idea01Icon,
   Shield01Icon,
   SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Image from "next/image";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import LogoWall from "@/sections/logo-wall";

export const metadata: Metadata = {
   title: "About",
   description:
      "Loomra is building a multi-currency account for people whose money crosses borders — without the fees and friction of a bank.",
};

const STATS = [
   { value: "2021", label: "Founded" },
   { value: "40+", label: "Currencies held" },
   { value: "100+", label: "Countries reached" },
   { value: "2M", label: "People served" },
];

const VALUES = [
   {
      icon: Shield01Icon,
      title: "Be boring with money",
      copy: "The most interesting thing a financial product can do is work exactly as described, every single time.",
   },
   {
      icon: Idea01Icon,
      title: "Show the whole price",
      copy: "No fee hiding inside a rate. No line that only appears at the end. If we cannot explain a charge in one sentence, it should not exist.",
   },
   {
      icon: HeartCheckIcon,
      title: "Build for the in-between",
      copy: "Our customers live across currencies, countries and time zones. The product should feel like it was made for that, not adapted to it.",
   },
];

const TEAM = [
   {
      name: "Raheem Orekoya",
      role: "Co-founder & CEO",
      image: "/team/raheem-orekoya-portrait.jpg",
      alt: "Portrait of Raheem Orekoya",
   },
   {
      name: "Maria Rossi",
      role: "Co-founder & CTO",
      image: "/team/maria-rossi-portrait.jpg",
      alt: "Portrait of Maria Rossi",
   },
   {
      name: "Amara Okafor",
      role: "Head of Product",
      image: "/team/amara-okafor-portrait.jpg",
      alt: "Portrait of Amara Okafor",
   },
   {
      name: "Jakub Nowak",
      role: "Head of Design",
      image: "/team/jakub-nowak-portrait.jpg",
      alt: "Portrait of Jakub Nowak",
   },
   {
      name: "Chinedu Okafor",
      role: "Head of Compliance",
      image: "/team/chinedu-okafor-portrait.jpg",
      alt: "Portrait of Chinedu Okafor",
   },
   {
      name: "Sofia Almeida",
      role: "Head of Operations",
      image: "/team/sofia-almeida-portrait.jpg",
      alt: "Portrait of Sofia Almeida",
   },
];

const TIMELINE = [
   {
      year: "2021",
      title: "A spreadsheet and a problem",
      copy: "Two founders working across three currencies get tired of losing a slice of every payment to fees they cannot see.",
   },
   {
      year: "2022",
      title: "The first account",
      copy: "Loomra opens to a small waitlist with four currencies, local details in two, and a single promise: the real rate, shown in full.",
   },
   {
      year: "2024",
      title: "Local rails, everywhere",
      copy: "Direct connections to local payment systems cut most transfer times from days to seconds and remove a layer of correspondent banks.",
   },
   {
      year: "2026",
      title: "One account, forty currencies",
      copy: "Virtual cards, multi-currency balances and transfers to 100+ countries live in a single account, with no monthly fee.",
   },
];

export default function AboutPage() {
   return (
      <>
         <PageHero
            eyebrow="About Loomra"
            title="Money should move like information."
            description="Loomra exists because sending money across a border still costs more and takes longer than sending an email. We think that is a design problem worth solving."
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <dl className="grid grid-cols-2 overflow-hidden rounded-lg border border-border/70 bg-secondary/40 sm:grid-cols-4">
                  {STATS.map((stat, index) => (
                     <div
                        key={stat.label}
                        className={
                           index % 2 === 1
                              ? "border-l border-border/70 px-5 py-6"
                              : "px-5 py-6"
                        }
                     >
                        <dd className="font-heading text-3xl font-medium leading-none tracking-tighter tabular-nums sm:text-4xl">
                           {stat.value}
                        </dd>
                        <dt className="mt-2 text-xs font-medium text-muted-foreground">
                           {stat.label}
                        </dt>
                     </div>
                  ))}
               </dl>
            </div>
         </section>

         <section className="border-t border-border/60 px-6 py-24">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
               <div>
                  <span className="text-sm font-medium text-muted-foreground">
                     Why we started
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl">
                     The border was never the hard part.
                  </h2>
               </div>

               <div className="space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                     Moving money between countries involves a chain of banks,
                     each taking a small cut and each adding a day. By the time
                     the money arrives, the recipient has lost a meaningful
                     share of it and nobody can say exactly where.
                  </p>
                  <p>
                     Loomra removes the chain. We connect directly to local
                     payment rails, hold balances in the currencies people
                     actually use, and convert at the rate anyone can look up.
                     The result is a transfer that behaves less like a wire and
                     more like a message.
                  </p>
                  <p>
                     We are a financial technology company, not a bank. That
                     distinction matters: our job is to make the experience
                     simple while licensed partners hold the money and the
                     regulatory responsibility.
                  </p>
               </div>
            </div>
         </section>

         <section className="px-6 pb-24">
            <div className="mx-auto w-full max-w-6xl">
               <h2 className="max-w-md text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                  What we optimise for.
               </h2>

               <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {VALUES.map((value) => (
                     <li
                        key={value.title}
                        className="flex h-full flex-col rounded-lg border border-border/70 bg-secondary/40 p-5"
                     >
                        <span className="grid size-8 place-items-center rounded border border-border/70 bg-background">
                           <HugeiconsIcon
                              icon={value.icon}
                              strokeWidth={1.7}
                              className="size-4 text-accent-strong"
                           />
                        </span>
                        <h3 className="mt-4 font-heading text-lg font-medium tracking-tighter">
                           {value.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                           {value.copy}
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
                     The people building it.
                  </h2>
                  <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     A small team split across Lagos, Milan, Warsaw and Lisbon —
                     which is another way of saying we use the product every
                     day.
                  </p>
               </div>

               <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {TEAM.map((person) => (
                     <li key={person.name}>
                        <figure className="group overflow-hidden rounded-lg border border-border/70 bg-secondary/40">
                           <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                              <Image
                                 src={person.image}
                                 alt={person.alt}
                                 fill
                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                 className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                              />
                           </div>
                           <figcaption className="border-t border-border/70 px-4 py-3.5">
                              <p className="text-sm font-medium tracking-tight">
                                 {person.name}
                              </p>
                              <p className="mt-0.5 text-xs text-muted-foreground">
                                 {person.role}
                              </p>
                           </figcaption>
                        </figure>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <LogoWall />

         <section className="px-6 py-24">
            <div className="mx-auto w-full max-w-6xl">
               <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <HugeiconsIcon
                     icon={SparklesIcon}
                     strokeWidth={1.7}
                     className="size-4 text-accent-strong"
                  />
                  How we got here
               </div>

               <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {TIMELINE.map((item) => (
                     <li
                        key={item.year}
                        className="flex h-full flex-col rounded-lg border border-border/70 p-5"
                     >
                        <span className="font-numeric text-xs font-medium tabular-nums text-accent-strong">
                           {item.year}
                        </span>
                        <h3 className="mt-3 font-heading text-base font-medium tracking-tighter">
                           {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                           {item.copy}
                        </p>
                     </li>
                  ))}
               </ol>
            </div>
         </section>

         <PageCta
            title="Come build the boring version of money."
            description="We are hiring across product, engineering and compliance. If the problem above sounds like your kind of problem, we would like to meet you."
            primaryLabel="See open roles"
            primaryHref="/careers"
            secondaryLabel="Read our story"
            secondaryHref="/blog"
         />
      </>
   );
}
