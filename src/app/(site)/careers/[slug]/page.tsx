import {
   ArrowLeft02Icon,
   ArrowUpRight01Icon,
   Briefcase01Icon,
   Calendar03Icon,
   CheckmarkCircle02Icon,
   Location01Icon,
   MoneyBag02Icon,
   UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageCta from "@/components/page-cta";
import { buttonVariants } from "@/components/ui/button";
import { getRole, HIRING_PROCESS, ROLES } from "@/lib/roles";
import { cn } from "@/lib/utils";

type RolePageProps = {
   params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
   return ROLES.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({
   params,
}: RolePageProps): Promise<Metadata> {
   const { slug } = await params;
   const role = getRole(slug);

   if (!role) return {};

   return {
      title: role.title,
      description: role.summary,
   };
}

export default function RolePage({ params }: RolePageProps) {
   // Same shape as the blog and legal documents: the params read lives inside a
   // boundary so an unlisted slug streams its 404 instead of blanking the App
   // Shell that partial prefetching served first.
   return (
      <Suspense fallback={<RoleFallback />}>
         <Role params={params} />
      </Suspense>
   );
}

async function Role({ params }: RolePageProps) {
   const { slug } = await params;
   const role = getRole(slug);

   if (!role) notFound();

   const applyHref = `mailto:careers@loomra.com?subject=${encodeURIComponent(
      `Application: ${role.title}`,
   )}`;
   const otherRoles = ROLES.filter((item) => item.slug !== role.slug).slice(
      0,
      3,
   );

   const facts = [
      { icon: Briefcase01Icon, label: "Team", value: role.team },
      { icon: Location01Icon, label: "Location", value: role.location },
      { icon: Calendar03Icon, label: "Contract", value: role.type },
      { icon: MoneyBag02Icon, label: "Salary", value: role.salary },
      { icon: UserIcon, label: "Reports to", value: role.reportsTo },
   ];

   return (
      <>
         <article className="px-6 pt-16">
            <div className="mx-auto w-full max-w-6xl">
               <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
               >
                  <HugeiconsIcon
                     icon={ArrowLeft02Icon}
                     strokeWidth={1.8}
                     className="size-3.5"
                  />
                  All open roles
               </Link>

               <header className="mt-8 max-w-3xl">
                  <span className="text-sm font-medium text-muted-foreground">
                     {role.team}
                  </span>

                  <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
                     {role.title}
                  </h1>

                  <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
                     {role.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                     <span className="rounded-full border border-border/70 px-2.5 py-1 font-medium">
                        {role.location}
                     </span>
                     <span className="rounded-full border border-border/70 px-2.5 py-1 font-medium">
                        {role.type}
                     </span>
                     <span className="rounded-full border border-border/70 px-2.5 py-1 font-medium">
                        {role.salary}
                     </span>
                  </div>
               </header>

               <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_0.7fr] lg:gap-16">
                  <div className="space-y-12">
                     <section>
                        <h2 className="font-heading text-xl font-medium tracking-tighter sm:text-2xl">
                           About the role
                        </h2>
                        <div className="mt-4 space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                           {role.about.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                           ))}
                        </div>
                     </section>

                     <section className="border-t border-border/60 pt-8">
                        <h2 className="font-heading text-xl font-medium tracking-tighter sm:text-2xl">
                           What you would do
                        </h2>
                        <ul className="mt-4 space-y-3">
                           {role.responsibilities.map((item) => (
                              <li
                                 key={item}
                                 className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                 <HugeiconsIcon
                                    icon={CheckmarkCircle02Icon}
                                    strokeWidth={1.7}
                                    className="mt-0.5 size-4 shrink-0 text-accent-strong"
                                 />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </section>

                     <section className="border-t border-border/60 pt-8">
                        <h2 className="font-heading text-xl font-medium tracking-tighter sm:text-2xl">
                           What we are looking for
                        </h2>
                        <ul className="mt-4 space-y-2.5">
                           {role.requirements.map((item) => (
                              <li
                                 key={item}
                                 className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                 <span
                                    aria-hidden="true"
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-strong/70"
                                 />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </section>

                     <section className="border-t border-border/60 pt-8">
                        <h2 className="font-heading text-xl font-medium tracking-tighter sm:text-2xl">
                           Nice to have
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                           None of these are required. They are simply the shape
                           of the person who tends to enjoy the work.
                        </p>
                        <ul className="mt-4 space-y-2.5">
                           {role.niceToHave.map((item) => (
                              <li
                                 key={item}
                                 className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                 <span
                                    aria-hidden="true"
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-border"
                                 />
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </section>
                  </div>

                  <aside className="lg:sticky lg:top-24 lg:self-start">
                     <div className="rounded-xl border border-border/70 bg-secondary/40 p-5">
                        <dl className="space-y-4">
                           {facts.map((fact) => (
                              <div key={fact.label}>
                                 <dt className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                                    <HugeiconsIcon
                                       icon={fact.icon}
                                       strokeWidth={1.7}
                                       className="size-3.5"
                                    />
                                    {fact.label}
                                 </dt>
                                 <dd className="mt-1 text-sm leading-snug tracking-tight">
                                    {fact.value}
                                 </dd>
                              </div>
                           ))}
                        </dl>

                        <a
                           href={applyHref}
                           className={cn(
                              buttonVariants({ size: "lg" }),
                              "group mt-6 h-10 w-full px-5 text-sm",
                           )}
                        >
                           Apply for this role
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                              data-icon="inline-end"
                           />
                        </a>

                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                           Applications are reviewed weekly. We reply either
                           way, and we never keep your details longer than the
                           process.
                        </p>
                     </div>
                  </aside>
               </div>

               <section className="mt-16 border-t border-border/60 pt-10">
                  <h2 className="text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl">
                     How we hire.
                  </h2>
                  <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                     Four steps, roughly two weeks, and a decision either way.
                     The exercise is paid, and you keep the work.
                  </p>

                  <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                     {HIRING_PROCESS.map((step) => (
                        <li
                           key={step.step}
                           className="rounded-lg border border-border/70 p-4"
                        >
                           <span className="font-numeric text-xs font-medium tabular-nums text-accent-strong">
                              {step.step}
                           </span>
                           <h3 className="mt-2 font-heading text-base font-medium tracking-tighter">
                              {step.title}
                           </h3>
                           <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {step.copy}
                           </p>
                        </li>
                     ))}
                  </ol>
               </section>

               <section className="mt-16 border-t border-border/60 pt-10">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                     <h2 className="font-heading text-2xl font-medium tracking-tighter sm:text-3xl">
                        Other open roles.
                     </h2>
                     <Link
                        href="/careers"
                        className="text-xs font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                     >
                        See all roles
                     </Link>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                     {otherRoles.map((item) => (
                        <li key={item.slug}>
                           <Link
                              href={`/careers/${item.slug}`}
                              className="group flex h-full flex-col rounded-lg border border-border/70 p-4 transition-colors hover:bg-secondary/40"
                           >
                              <span className="flex items-start justify-between gap-3">
                                 <span className="text-sm font-medium tracking-tight">
                                    {item.title}
                                 </span>
                                 <HugeiconsIcon
                                    icon={ArrowUpRight01Icon}
                                    strokeWidth={1.8}
                                    className="mt-0.5 size-3.5 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                                 />
                              </span>
                              <span className="mt-2 text-xs text-muted-foreground">
                                 {item.team} · {item.location}
                              </span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </section>
            </div>
         </article>

         <PageCta
            title="Not quite the right role?"
            description="We keep a list of people we would like to work with before the role exists. Tell us what you are good at and we will remember."
            primaryLabel="See all open roles"
            primaryHref="/careers"
            secondaryLabel="About Loomra"
            secondaryHref="/about"
         />
      </>
   );
}

function RoleFallback() {
   return (
      <div className="px-6 pt-16" aria-busy="true">
         <div className="mx-auto w-full max-w-3xl">
            <div className="h-3 w-24 animate-pulse rounded-full bg-secondary" />
            <div className="mt-8 space-y-3">
               <div className="h-3 w-24 animate-pulse rounded-full bg-secondary" />
               <div className="h-9 w-full animate-pulse rounded-md bg-secondary" />
               <div className="h-3 w-3/4 animate-pulse rounded-full bg-secondary" />
               <div className="h-3 w-1/2 animate-pulse rounded-full bg-secondary" />
            </div>
         </div>
         <span className="sr-only">Loading role</span>
      </div>
   );
}
