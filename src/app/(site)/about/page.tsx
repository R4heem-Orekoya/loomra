import {
   HeartCheckIcon,
   Idea01Icon,
   Shield01Icon,
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
      name: "Samuel",
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

const TEAM_STATS = [
   { value: "12", label: "Team members" },
   { value: "4", label: "Offices" },
   { value: "9", label: "Countries" },
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
               <dl className="grid grid-cols-2 overflow-hidden rounded-lg divide-x divide-border/50 border border-border/40 bg-muted/50 sm:grid-cols-4">
                  {STATS.map((stat) => (
                     <div key={stat.label} className={"px-5 py-6"}>
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

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <figure className="relative overflow-hidden rounded-xl border border-border/70 bg-secondary">
                  <Image
                     src="/careers/team-workshop.jpg"
                     alt="The Loomra team planning around a wall of sticky notes"
                     width={1600}
                     height={1000}
                     quality={90}
                     sizes="(min-width: 1152px) 1104px, 100vw"
                     className="h-[300px] w-full object-cover object-center sm:h-[400px] lg:h-[520px]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/50 to-transparent p-5 sm:p-6">
                     <p className="max-w-md text-pretty text-sm font-medium text-white">
                        Most of what we ship starts on a wall of sticky notes
                        and a long argument about exchange rates.
                     </p>
                  </figcaption>
               </figure>
            </div>
         </section>

         <section className="px-6 py-28">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
               <div>
                  <span className="text-sm font-medium text-muted-foreground">
                     Why we started
                  </span>
                  <h2 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter lg:text-5xl">
                     The border was never the hard part.
                  </h2>
               </div>

               <div className="space-y-4 text-pretty text-sm font-medium leading-relaxed mt-4 sm:text-base">
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

         <section className="px-6 py-36">
            <div className="mx-auto w-full max-w-6xl">
               <h2 className="max-w-md text-balance font-heading text-4xl font-medium tracking-tighter">
                  What we optimise for.
               </h2>

               <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {VALUES.map((value) => (
                     <li
                        key={value.title}
                        className="flex h-full flex-col rounded-lg border border-border/40 bg-muted/50 p-4"
                     >
                        <span className="grid size-7.5 place-items-center rounded border border-border/70 bg-background">
                           <HugeiconsIcon
                              icon={value.icon}
                              strokeWidth={1.7}
                              className="size-4 text-accent-strong"
                           />
                        </span>
                        <h3 className="mt-2.5 font-heading text-lg font-medium tracking-tighter">
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

         <section id="team" className="scroll-mt-24 px-6 py-36">
            <div className="mx-auto w-full max-w-6xl">
               <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-balance font-heading text-4xl font-medium tracking-tighter">
                     The people building it.
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                     A small team split across Lagos, Milan, Warsaw and Lisbon —
                     which is another way of saying we use the product every
                     day.
                  </p>

                  <dl className="mt-10 flex flex-wrap items-start justify-center gap-x-12 gap-y-8 sm:gap-x-16">
                     {TEAM_STATS.map((stat) => (
                        <div key={stat.label} className="text-center">
                           <dd className="font-sans text-2xl font-medium leading-none tracking-tighter tabular-nums sm:text-3xl">
                              {stat.value}
                           </dd>
                           <dt className="mt-2 text-xs font-medium text-muted-foreground">
                              {stat.label}
                           </dt>
                        </div>
                     ))}
                  </dl>
               </div>

               <ul className="mx-auto mt-20 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
                  {TEAM.map((person) => (
                     <li key={person.name}>
                        <figure className="group mx-auto w-full max-w-36">
                           <div className="relative aspect-square overflow-hidden rounded-full bg-secondary">
                              <Image
                                 src={person.image}
                                 alt={person.alt}
                                 fill
                                 sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 208px"
                                 className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                              />
                           </div>
                           <figcaption className="mt-4 text-center">
                              <p className="text-sm font-medium tracking-tight">
                                 {person.name}
                              </p>
                              <p className="mt-1 text-xs text-muted-foreground">
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
