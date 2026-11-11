"use client";

import {
   motion,
   useMotionValueEvent,
   useReducedMotion,
   useScroll,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const SCROLL_THRESHOLD = 16;

/** Hovering one nav item fades the rest back to muted. */
const NAV_LINK =
   "text-foreground transition-colors group-hover/nav:not-hover:text-muted-foreground";

const navbarVariants = {
   bar: {
      maxWidth: 1152,
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      backdropFilter: "blur(0px) saturate(100%)",
   },
   pill: {
      maxWidth: 860,
      borderRadius: 9999,
      paddingLeft: 20,
      paddingRight: 20,
      backdropFilter: "blur(16px) saturate(180%)",
   },
};

export default function Navbar() {
   const { scrollY } = useScroll();
   const reduceMotion = useReducedMotion();
   const [scrolled, setScrolled] = useState(false);

   // Restore the correct pill state when the page loads already scrolled.
   useEffect(() => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
   }, []);

   useMotionValueEvent(scrollY, "change", (latest) => {
      setScrolled(latest > SCROLL_THRESHOLD);
   });

   return (
      <header className="sticky top-0 z-50 flex w-full bg-transparent justify-center px-4">
         <motion.nav
            aria-label="Main navigation"
            initial={false}
            animate={scrolled ? "pill" : "bar"}
            variants={navbarVariants}
            transition={
               reduceMotion
                  ? { duration: 0 }
                  : {
                       type: "spring",
                       stiffness: 380,
                       damping: 34,
                       mass: 0.9,
                    }
            }
            className={cn(
               "flex h-11 mt-1 w-full items-center justify-between border transition-[background-color,border-color,box-shadow] ease-out",
               scrolled
                  ? "duration-500 border-border/80 dark mt-4 bg-background/80 text-foreground backdrop-blur-md shadow-[0_12px_40px_-12px_rgb(0_0_0/0.18)]"
                  : "duration-150 border-transparent bg-transparent shadow-none",
            )}
         >
            <div className="flex items-center gap-12">
               <div className="font-heading text-xl font-semibold tracking-tighter">
                  L<span className="">oo</span>mra
               </div>

               <ul className="group/nav hidden items-center gap-6 text-sm font-medium mt-0.5 tracking-tighter md:flex">
                  <li>
                     <Link href="#capabilities" className={NAV_LINK}>
                        The account
                     </Link>
                  </li>
                  <li>
                     <Link href="#fees" className={NAV_LINK}>
                        Pricing
                     </Link>
                  </li>
                  <li>
                     <Link href="#security" className={NAV_LINK}>
                        Security
                     </Link>
                  </li>
               </ul>
            </div>

            <div className="flex items-center gap-4 absolute right-1">
               <Link
                  href="#"
                  className="hidden text-sm font-medium sm:inline-flex"
               >
                  Login
               </Link>
               <Button
                  size="lg"
                  className={scrolled ? "dark bg-foreground" : ""}
               >
                  Open an account
               </Button>
            </div>
         </motion.nav>
      </header>
   );
}
