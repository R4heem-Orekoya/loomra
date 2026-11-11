import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import { buttonVariants } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";

export default function Hero() {
   return (
      <div className="relative isolate flex flex-col overflow-x-clip px-6 pt-32 pb-32">
         <div className="relative flex flex-col justify-center space-y-4 text-center">
            <div className="grid">
               <span className="text-xs font-medium text-muted-foreground mb-4">
                  One account to hold, convert, send and spend
               </span>
               <h1 className="font-heading text-5xl font-medium tracking-tighter capitalize md:text-6xl lg:text-7xl">
                  Money, without <span className="text-[#0D5C3A]">borders</span>
                  .
               </h1>
            </div>

            <p className="mx-auto max-w-xl text-pretty font-normal leading-snug tracking-tight text-muted-foreground">
               Hold dollars, euros, pounds and more in one account. Convert at
               the real exchange rate, send to 100+ countries in seconds, and
               spend online with a virtual card — no hidden fees, no waiting
               days.
            </p>

            <div className="flex flex-col items-center gap-3 mt-6">
               <div className="flex items-center justify-center gap-1">
                  <Link
                     href="#open-account"
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-10 max-w-fit px-8 text-sm",
                     )}
                  >
                     Open an account
                  </Link>
                  <Link
                     href="#how-it-works"
                     className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "h-10 max-w-fit px-7 text-sm",
                     )}
                  >
                     How it works
                  </Link>
               </div>

               <div className="flex flex-col items-center gap-1">
                  <p className="text-xs text-muted-foreground">
                     Free to open · No monthly fee · 2-minute signup
                  </p>

                  <div className="mx-auto mt-2 flex items-center justify-center gap-1.5">
                     <div className="flex -space-x-2">
                        <UserAvatar
                           name="Jakub"
                           className="border-background border-3"
                        />
                        <UserAvatar
                           name="David"
                           className="border-background border-3"
                        />
                        <UserAvatar
                           name="Funmi"
                           className="border-background border-3"
                        />
                        <UserAvatar
                           name="Faruq"
                           className="border-background border-3"
                        />
                     </div>
                     <span className="text-xs text-muted-foreground">
                        4.9/5 rating from 12,000 customers across the globe
                     </span>
                  </div>
               </div>
            </div>
         </div>

         <HeroVisual />
      </div>
   );
}
