import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
   eyebrow: string;
   title: ReactNode;
   description: ReactNode;
   actions?: ReactNode;
   aside?: ReactNode;
   className?: string;
};

export default function PageHero({
   eyebrow,
   title,
   description,
   actions,
   aside,
   className,
}: PageHeroProps) {
   return (
      <section
         className={cn(
            "relative overflow-hidden px-6 pt-20 pb-12 lg:pt-28 lg:pb-16",
            className,
         )}
      >
         <div className="mx-auto w-full max-w-6xl">
            <div
               className={cn(
                  "grid items-end gap-10",
                  aside && "lg:grid-cols-[1.35fr_0.65fr]",
               )}
            >
               <div className="max-w-3xl">
                  <span className="text-sm font-medium tracking-tight text-muted-foreground">
                     {eyebrow}
                  </span>

                  <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl lg:text-6xl">
                     {title}
                  </h1>

                  <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                     {description}
                  </p>

                  {actions ? (
                     <div className="mt-8 flex flex-wrap items-center gap-2">
                        {actions}
                     </div>
                  ) : null}
               </div>

               {aside ? <div className="w-full">{aside}</div> : null}
            </div>
         </div>
      </section>
   );
}
