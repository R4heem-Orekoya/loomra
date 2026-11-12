import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFoundContent() {
   return (
      <section className="px-6 pt-24 pb-32 lg:pt-32">
         <div className="mx-auto flex w-full max-w-2xl flex-col items-start">
            <span className="font-numeric text-sm font-medium tracking-widest text-muted-foreground">
               404
            </span>

            <h1 className="mt-4 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
               This page moved, or never existed.
            </h1>

            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
               The link you followed does not lead anywhere on Loomra. Try the
               product, the pricing page or the help centre instead.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
               <Link
                  href="/"
                  className={cn(
                     buttonVariants({ size: "lg" }),
                     "h-10 px-6 text-sm",
                  )}
               >
                  Back to home
               </Link>
               <Link
                  href="/help"
                  className={cn(
                     buttonVariants({ variant: "outline", size: "lg" }),
                     "h-10 px-6 text-sm",
                  )}
               >
                  Visit the help centre
               </Link>
            </div>
         </div>
      </section>
   );
}
