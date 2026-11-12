import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import PageCta from "@/components/page-cta";
import PageHero from "@/components/page-hero";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
   title: "Blog",
   description:
      "Guides and explanations about international transfers, exchange rates and holding money in more than one currency.",
};

export default function BlogPage() {
   const [featured, ...rest] = POSTS;

   return (
      <>
         <PageHero
            eyebrow="Blog"
            title="Notes on money that moves."
            description="Plain-English guides to fees, exchange rates and the mechanics of getting paid across a border. No jargon, no hype."
         />

         <section className="px-6 pb-16">
            <div className="mx-auto w-full max-w-6xl">
               <article className="group relative overflow-hidden rounded-xl border border-border/70 bg-secondary/40">
                  <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                     <div className="flex flex-col p-6 sm:p-8">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                           <span className="rounded-full border border-border/70 bg-background px-2.5 py-1 font-medium">
                              {featured.category}
                           </span>
                           <span>{featured.date}</span>
                           <span aria-hidden="true">·</span>
                           <span>{featured.readingTime}</span>
                        </div>

                        <h2 className="mt-5 max-w-xl text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl">
                           <Link
                              href={`/blog/${featured.slug}`}
                              className="transition-opacity hover:opacity-80"
                           >
                              {featured.title}
                           </Link>
                        </h2>

                        <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                           {featured.description}
                        </p>

                        <Link
                           href={`/blog/${featured.slug}`}
                           className="group/link mt-8 inline-flex items-center gap-1.5 text-sm font-medium tracking-tight"
                        >
                           Read the guide
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              className="size-3.5 transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                           />
                        </Link>
                     </div>

                     <div
                        aria-hidden="true"
                        className="relative hidden min-h-64 items-center justify-center overflow-hidden border-l border-border/70 bg-[#0D5C3A] lg:flex"
                     >
                        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:18px_18px]" />
                        <div className="relative flex flex-col items-center text-center">
                           <span className="font-numeric text-5xl font-medium tracking-tighter text-white/90">
                              ₦ → $
                           </span>
                           <span className="mt-3 text-xs font-medium uppercase tracking-widest text-white/60">
                              The whole receipt
                           </span>
                        </div>
                     </div>
                  </div>
               </article>

               <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {rest.map((post) => (
                     <li key={post.slug}>
                        <Link
                           href={`/blog/${post.slug}`}
                           className="group flex h-full flex-col rounded-xl border border-border/70 p-6 transition-colors hover:border-border hover:bg-secondary/40"
                        >
                           <span className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              <span className="rounded-full border border-border/70 px-2.5 py-1 font-medium">
                                 {post.category}
                              </span>
                              <span>{post.date}</span>
                              <span aria-hidden="true">·</span>
                              <span>{post.readingTime}</span>
                           </span>

                           <span className="mt-5 flex items-start justify-between gap-4">
                              <span className="text-balance font-heading text-xl font-medium tracking-tighter sm:text-2xl">
                                 {post.title}
                              </span>
                              <HugeiconsIcon
                                 icon={ArrowUpRight01Icon}
                                 strokeWidth={1.8}
                                 className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                              />
                           </span>

                           <span className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {post.description}
                           </span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <PageCta
            title="Put the guides into practice."
            description="Open an account, run a transfer through the calculator, and see the fee before you commit."
            primaryLabel="Open an account"
            primaryHref="/signup"
            secondaryLabel="Try the calculator"
            secondaryHref="/pricing"
         />
      </>
   );
}
