"use client";

import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
   motion,
   useMotionValueEvent,
   useReducedMotion,
   useScroll,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isGroupActive, NAV_GROUPS, PRIMARY_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";
import { Button, buttonVariants } from "./ui/button";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "./ui/navigation-menu";

const SCROLL_THRESHOLD = 16;

/** Seconds for one nav state to become the other. Geometry springs over this
 *  and the chrome fades over the same clock, so both directions match. */
const MORPH_DURATION = 0.4;

/**
 * The bar and pill differ in geometry (width, radius, padding, top offset) and
 * in chrome (blur, background, border, shadow). Geometry morphs with a spring;
 * chrome is a CSS transition on the same clock. `marginTop` lives here, not on
 * `className`, so the nav glides up and down instead of snapping between the
 * two offsets.
 */
const navbarVariants = {
   bar: {
      maxWidth: 1152,
      marginTop: 4,
      borderRadius: 0,
      paddingLeft: 0,
      paddingRight: 0,
      backdropFilter: "blur(0px) saturate(100%)",
   },
   pill: {
      maxWidth: 960,
      marginTop: 16,
      borderRadius: 9999,
      paddingLeft: 20,
      paddingRight: 20,
      backdropFilter: "blur(16px) saturate(180%)",
   },
};

export default function SiteHeader({
   routeDark = false,
}: {
   routeDark?: boolean;
}) {
   const { scrollY } = useScroll();
   const reduceMotion = useReducedMotion();
   const pathname = usePathname();
   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   // Restore the correct pill state when the page loads already scrolled.
   useEffect(() => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
   }, []);

   useMotionValueEvent(scrollY, "change", (latest) => {
      setScrolled(latest > SCROLL_THRESHOLD);
   });

   // The nav inverts once the bar appears, so its portaled popups need the
   // same theme class that the surrounding route wrapper carries.
   const popupTheme = scrolled || routeDark ? "dark" : undefined;

   return (
      <header className="sticky top-0 z-50 flex w-full justify-center bg-transparent px-4">
         <motion.nav
            aria-label="Main navigation"
            initial={false}
            animate={scrolled ? "pill" : "bar"}
            variants={navbarVariants}
            transition={
               reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", duration: MORPH_DURATION, bounce: 0 }
            }
            className={cn(
               "flex h-11 w-full items-center gap-4 border transition-[background-color,border-color,box-shadow] ease-out",
               reduceMotion ? "duration-0" : "duration-400ms",
               scrolled
                  ? "border-border/80 bg-background/80 text-foreground shadow-[0_12px_40px_-12px_rgb(0_0_0/0.18)] dark"
                  : "border-transparent bg-transparent shadow-none",
            )}
         >
            <Link
               href="/"
               className="font-heading text-xl font-semibold tracking-tighter transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
               aria-label="Loomra home"
            >
               L<span>oo</span>mra
            </Link>

            <NavigationMenu
               className="group/nav hidden md:flex"
               popupClassName={popupTheme}
            >
               <NavigationMenuList className="gap-0.5">
                  {NAV_GROUPS.map((group) => (
                     <NavigationMenuItem key={group.label}>
                        <NavigationMenuTrigger
                           className={cn(
                              "h-7 pl-3 pr-3.5 text-sm tracking-tighter",
                              isGroupActive(pathname, group) &&
                                 "text-foreground",
                           )}
                        >
                           {group.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-76 p-1">
                           <ul className="grid gap-0.5">
                              {group.links.map((link) => (
                                 <li key={link.href}>
                                    <NavigationMenuLink
                                       render={<Link href={link.href} />}
                                       aria-current={
                                          pathname === link.href
                                             ? "page"
                                             : undefined
                                       }
                                       className="items-start gap-2.5 px-3 py-2"
                                    >
                                       {link.icon ? (
                                          <link.icon.glyph
                                             weight="fill"
                                             aria-hidden="true"
                                             className={cn(
                                                "mt-0.5 size-4 shrink-0",
                                                link.icon.className,
                                             )}
                                          />
                                       ) : null}
                                       <span className="flex flex-col gap-0.5">
                                          <span className="text-sm font-medium tracking-tight">
                                             {link.label}
                                          </span>
                                          {link.description ? (
                                             <span className="text-xs leading-relaxed text-muted-foreground">
                                                {link.description}
                                             </span>
                                          ) : null}
                                       </span>
                                    </NavigationMenuLink>
                                 </li>
                              ))}
                           </ul>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                  ))}

                  {PRIMARY_LINKS.map((link) => (
                     <NavigationMenuItem key={link.href}>
                        <Link
                           href={link.href}
                           aria-current={
                              pathname === link.href ? "page" : undefined
                           }
                           className={cn(
                              "inline-flex h-7 items-center rounded-full px-3 text-sm tracking-tighter",
                              "transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                              pathname === link.href
                                 ? "bg-muted/60 text-foreground"
                                 : "text-foreground/85 hover:text-foreground",
                           )}
                        >
                           {link.label}
                        </Link>
                     </NavigationMenuItem>
                  ))}
               </NavigationMenuList>
            </NavigationMenu>

            <div className="absolute right-1 flex items-center gap-1.5 sm:gap-3">
               <Link
                  href="/login"
                  className="hidden text-sm font-medium tracking-tight transition-colors hover:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:inline-flex"
               >
                  Log in
               </Link>

               <Link
                  href="/signup"
                  className={cn(
                     buttonVariants({ size: "lg" }),
                     "h-8 px-4 text-xs sm:px-4.5",
                     scrolled ? "dark bg-foreground" : "",
                  )}
               >
                  Open an account
               </Link>

               <Button
                  type="button"
                  variant="ghost"
                  size="icon-lg"
                  className="md:hidden"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
               >
                  <HugeiconsIcon icon={Menu01Icon} strokeWidth={1.8} />
               </Button>
            </div>
         </motion.nav>

         <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
   );
}
