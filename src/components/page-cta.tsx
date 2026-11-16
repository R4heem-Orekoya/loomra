import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageCtaProps = {
   title?: ReactNode;
   description?: ReactNode;
   primaryLabel?: string;
   primaryHref?: string;
   secondaryLabel?: string;
   secondaryHref?: string;
};

export default function PageCta({
   title = "Ready when you are.",
   description = "Open an account in about two minutes. No monthly fee, no minimum balance, and no reason to wait.",
   primaryLabel = "Open an account",
   primaryHref = "/signup",
   secondaryLabel = "Talk to us",
   secondaryHref = "/contact",
}: PageCtaProps) {
   return (
      <section className="px-6 pt-8 pb-28 lg:pt-12">
         <div className="mx-auto w-full max-w-6xl">
            <div className="relative isolate overflow-hidden px-6 py-16 text-center sm:px-12 md:py-20 lg:py-24">
               <h2 className="mx-auto max-w-xl text-balance font-heading text-4xl font-medium tracking-tighter md:text-5xl lg:text-6xl">
                  {title}
               </h2>

               <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  {description}
               </p>

               <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                  <Link
                     href={primaryHref}
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "group h-10 pl-4 text-sm",
                     )}
                  >
                     {primaryLabel}
                     <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.8}
                        className="size-3.5 mr-2.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                        data-icon="inline-end"
                     />
                  </Link>

                  <Link
                     href={secondaryHref}
                     className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "h-10 px-4 text-sm",
                     )}
                  >
                     {secondaryLabel}
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}
