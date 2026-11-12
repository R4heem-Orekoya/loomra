import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageCta from "@/components/page-cta";
import ProseBlocks from "@/components/prose-blocks";
import { headingsOf } from "@/lib/content";
import { getLegalDoc, LEGAL_DOCS } from "@/lib/legal";

type LegalPageProps = {
   params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
   return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
   params,
}: LegalPageProps): Promise<Metadata> {
   const { slug } = await params;
   const doc = getLegalDoc(slug);

   if (!doc) return {};

   return {
      title: doc.title,
      description: doc.description,
   };
}

export default function LegalDocPage({ params }: LegalPageProps) {
   // The params read sits inside a boundary so an unlisted slug can stream its
   // 404 instead of failing the App Shell that partial prefetching sent first.
   return (
      <Suspense fallback={<LegalDocFallback />}>
         <LegalDoc params={params} />
      </Suspense>
   );
}

async function LegalDoc({ params }: LegalPageProps) {
   const { slug } = await params;
   const doc = getLegalDoc(slug);

   if (!doc) notFound();

   const headings = headingsOf(doc.blocks);
   const related = LEGAL_DOCS.filter((item) => item.slug !== doc.slug).slice(
      0,
      3,
   );

   return (
      <>
         <div className="px-6 pt-16">
            <div className="mx-auto w-full max-w-6xl">
               <Link
                  href="/legal"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
               >
                  <HugeiconsIcon
                     icon={ArrowLeft02Icon}
                     strokeWidth={1.8}
                     className="size-3.5"
                  />
                  All legal documents
               </Link>

               <header className="mt-8 max-w-2xl">
                  <span className="text-sm font-medium text-muted-foreground">
                     Legal
                  </span>
                  <h1 className="mt-2 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
                     {doc.title}
                  </h1>
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                     {doc.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                     Last updated {doc.updated}
                  </p>
               </header>
            </div>
         </div>

         <div className="px-6 pt-12 pb-16">
            <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
               <nav aria-label="On this page" className="hidden lg:block">
                  <div className="sticky top-28">
                     <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        On this page
                     </p>
                     <ul className="mt-4 space-y-2.5 border-l border-border/70 pl-4">
                        {headings.map((heading) => (
                           <li key={heading.id}>
                              <a
                                 href={`#${heading.id}`}
                                 className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                              >
                                 {heading.label}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </nav>

               <article className="max-w-2xl">
                  <ProseBlocks blocks={doc.blocks} />

                  <div className="mt-14 border-t border-border/70 pt-8">
                     <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Related documents
                     </p>
                     <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                        {related.map((item) => (
                           <li key={item.slug}>
                              <Link
                                 href={`/legal/${item.slug}`}
                                 className="flex h-full items-center rounded-lg border border-border/70 px-3 py-2.5 text-sm font-medium tracking-tight transition-colors hover:bg-secondary/60"
                              >
                                 {item.title}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </article>
            </div>
         </div>

         <PageCta
            title="Questions about this document?"
            description="Send us a note and the right person will get back to you."
            primaryLabel="Contact us"
            primaryHref="/contact"
            secondaryLabel="Read the disclosures"
            secondaryHref="/legal/disclosures"
         />
      </>
   );
}

function LegalDocFallback() {
   return (
      <div className="px-6 pt-16" aria-busy="true">
         <div className="mx-auto w-full max-w-6xl">
            <div className="h-3 w-36 animate-pulse rounded-full bg-secondary" />
            <div className="mt-8 max-w-2xl space-y-3">
               <div className="h-3 w-16 animate-pulse rounded-full bg-secondary" />
               <div className="h-9 w-3/4 animate-pulse rounded-md bg-secondary" />
               <div className="h-3 w-full animate-pulse rounded-full bg-secondary" />
               <div className="h-3 w-2/3 animate-pulse rounded-full bg-secondary" />
            </div>
         </div>
         <span className="sr-only">Loading document</span>
      </div>
   );
}
