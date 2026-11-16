"use client";

import { motion } from "motion/react";
import Link from "next/link";
import HeroVisual from "@/components/hero-visual";
import { buttonVariants } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { useEntranceReady } from "@/lib/use-entrance-ready";
import { useEntrance } from "@/lib/use-reveal";
import { cn } from "@/lib/utils";

/**
 * The copy reveals line by line — eyebrow, heading, description, buttons, then
 * the supporting text — each step 180ms behind the one above it, so the order
 * is legible rather than one blurry fade.
 */
export default function Hero() {
   const ready = useEntranceReady();
   const copy = useEntrance(ready);

   return (
      <div className="relative isolate flex flex-col overflow-x-clip px-6 pt-28 pb-28 md:pt-32 md:pb-32">
         <div className="relative flex flex-col justify-center space-y-4 text-left md:text-center">
            <div className="grid">
               <motion.span
                  {...copy(0)}
                  className="text-xs font-medium text-muted-foreground mb-4"
               >
                  One account to hold, convert, send and spend
               </motion.span>

               <motion.h1
                  {...copy(1)}
                  className="font-heading text-[clamp(2rem,calc(14vw-7px),3.4rem)] leading-[0.92] font-medium tracking-tighter capitalize md:text-6xl md:leading-none lg:text-7xl"
               >
                  Money, without <span className="text-[#0D5C3A]">borders</span>
                  .
               </motion.h1>
            </div>

            <motion.p
               {...copy(2)}
               className="max-w-xl max-sm:text-sm text-pretty font-normal leading-snug tracking-tight text-muted-foreground md:mx-auto"
            >
               Hold dollars, euros, pounds and more in one account. Convert at
               the real exchange rate, send to 100+ countries in seconds, and
               spend online with a virtual card — no hidden fees, no waiting
               days.
            </motion.p>

            <div className="flex flex-col items-start gap-3 mt-6 md:items-center">
               <motion.div
                  {...copy(3)}
                  className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center"
               >
                  <Link
                     href="/signup"
                     className={cn(
                        buttonVariants({ size: "lg" }),
                        "h-10 px-8 text-sm",
                     )}
                  >
                     Open an account
                  </Link>
                  <Link
                     href="#how-it-works"
                     className={cn(
                        buttonVariants({ variant: "secondary", size: "lg" }),
                        "h-10 px-7 text-sm",
                     )}
                  >
                     How it works
                  </Link>
               </motion.div>

               <div className="flex flex-col items-start gap-1 md:items-center">
                  <motion.p
                     {...copy(4)}
                     className="text-xs text-muted-foreground"
                  >
                     Free to open · No monthly fee · 2-minute signup
                  </motion.p>

                  <motion.div
                     {...copy(5)}
                     className="mt-2 flex items-start justify-start gap-1.5 md:items-center md:justify-center"
                  >
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
                  </motion.div>
               </div>
            </div>
         </div>

         <HeroVisual />
      </div>
   );
}
