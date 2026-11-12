import {
   ArrowLeft02Icon,
   ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import PageCta from "@/components/page-cta";
import ProseBlocks from "@/components/prose-blocks";
import UserAvatar from "@/components/user-avatar";
import { getPost, POSTS } from "@/lib/posts";

type PostPageProps = {
   params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
   return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
   params,
}: PostPageProps): Promise<Metadata> {
   const { slug } = await params;
   const post = getPost(slug);

   if (!post) return {};

   return {
      title: post.title,
      description: post.description,
   };
}

export default function PostPage({ params }: PostPageProps) {
   // Same shape as the legal documents: the params read belongs inside a
   // boundary, so an unlisted slug streams its 404 rather than blanking the
   // App Shell that partial prefetching served first.
   return (
      <Suspense fallback={<PostFallback />}>
         <Post params={params} />
      </Suspense>
   );
}

async function Post({ params }: PostPageProps) {
   const { slug } = await params;
   const post = getPost(slug);

   if (!post) notFound();

   const related = POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);

   return (
      <>
         <article className="px-6 pt-16">
            <div className="mx-auto w-full max-w-2xl">
               <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
               >
                  <HugeiconsIcon
                     icon={ArrowLeft02Icon}
                     strokeWidth={1.8}
                     className="size-3.5"
                  />
                  All guides
               </Link>

               <header className="mt-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                     <span className="rounded-full border border-border/70 px-2.5 py-1 font-medium">
                        {post.category}
                     </span>
                     <time dateTime={post.dateTime}>{post.date}</time>
                     <span aria-hidden="true">·</span>
                     <span>{post.readingTime}</span>
                  </div>

                  <h1 className="mt-5 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
                     {post.title}
                  </h1>

                  <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                     {post.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2.5 border-y border-border/70 py-3">
                     <UserAvatar name={post.author} className="size-7" />
                     <div>
                        <p className="text-xs font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">
                           Loomra editorial
                        </p>
                     </div>
                  </div>
               </header>

               <div className="py-10">
                  <ProseBlocks blocks={post.blocks} />
               </div>
            </div>
         </article>

         <section className="px-6 pb-24">
            <div className="mx-auto w-full max-w-2xl border-t border-border/70 pt-8">
               <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Keep reading
               </p>

               <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((item) => (
                     <li key={item.slug}>
                        <Link
                           href={`/blog/${item.slug}`}
                           className="group flex h-full flex-col rounded-lg border border-border/40 bg-muted/50 p-4 transition-colors hover:bg-muted/70"
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
                              {item.category} · {item.readingTime}
                           </span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </section>

         <PageCta />
      </>
   );
}

function PostFallback() {
   return (
      <div className="px-6 pt-16" aria-busy="true">
         <div className="mx-auto w-full max-w-2xl">
            <div className="h-3 w-24 animate-pulse rounded-full bg-secondary" />
            <div className="mt-8 space-y-3">
               <div className="h-3 w-40 animate-pulse rounded-full bg-secondary" />
               <div className="h-9 w-full animate-pulse rounded-md bg-secondary" />
               <div className="h-9 w-2/3 animate-pulse rounded-md bg-secondary" />
               <div className="h-3 w-full animate-pulse rounded-full bg-secondary" />
            </div>
         </div>
         <span className="sr-only">Loading article</span>
      </div>
   );
}
