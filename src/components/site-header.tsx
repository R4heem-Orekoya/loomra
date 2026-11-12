"use client";

import { ArrowUpRight01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
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
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "./ui/sheet";

type NavLink = {
   label: string;
   href: string;
   description?: string;
};

type NavGroup = {
   label: string;
   links: NavLink[];
};

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

const NAV_GROUPS: NavGroup[] = [
   {
      label: "Product",
      links: [
         {
            label: "The account",
            href: "/product",
            description: "Hold 40+ currencies in one balance.",
         },
         {
            label: "Send money",
            href: "/product#how-it-works",
            description: "Local rails in 100+ countries.",
         },
         {
            label: "Virtual cards",
            href: "/product#cards",
            description: "Spend online with cards you control.",
         },
      ],
   },
   {
      label: "Company",
      links: [
         {
            label: "About",
            href: "/about",
            description: "Why we're building Loomra.",
         },
         {
            label: "Careers",
            href: "/careers",
            description: "Open roles and how we hire.",
         },
         {
            label: "Press",
            href: "/press",
            description: "Brand assets and press contact.",
         },
         {
            label: "Blog",
            href: "/blog",
            description: "Guides to moving money well.",
         },
      ],
   },
];

const PRIMARY_LINKS: NavLink[] = [
   { label: "Pricing", href: "/pricing" },
   { label: "Security", href: "/security" },
];

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
                              "h-8 px-3 text-sm tracking-tighter",
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
                                       className="flex-col items-start gap-0.5 px-3 py-2"
                                    >
                                       <span className="text-sm font-medium tracking-tight">
                                          {link.label}
                                       </span>
                                       {link.description ? (
                                          <span className="text-xs leading-relaxed text-muted-foreground">
                                             {link.description}
                                          </span>
                                       ) : null}
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
                              "inline-flex h-8 items-center rounded-lg px-3 text-sm tracking-tighter",
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

            <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
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

               <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                  <SheetTrigger
                     render={
                        <Button
                           variant="ghost"
                           size="icon-lg"
                           className="md:hidden"
                           aria-label="Open menu"
                        />
                     }
                  >
                     <HugeiconsIcon icon={Menu01Icon} strokeWidth={1.8} />
                  </SheetTrigger>

                  <SheetContent
                     side="right"
                     className={cn(
                        "w-[min(88vw,22rem)] gap-0 bg-background p-0 dark:bg-background",
                        routeDark && "dark",
                     )}
                  >
                     <SheetHeader className="border-b border-border/70 p-5 pr-14">
                        <SheetTitle className="text-base">Menu</SheetTitle>
                        <SheetDescription>
                           Hold, send and spend in one account.
                        </SheetDescription>
                     </SheetHeader>

                     <nav
                        aria-label="Mobile navigation"
                        className="flex-1 overflow-y-auto p-3"
                     >
                        {NAV_GROUPS.map((group) => (
                           <div key={group.label} className="py-2">
                              <p className="px-2 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                 {group.label}
                              </p>
                              <ul>
                                 {group.links.map((link) => (
                                    <li key={link.href}>
                                       <MobileLink
                                          link={link}
                                          pathname={pathname}
                                          onNavigate={() => setMenuOpen(false)}
                                       />
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        ))}

                        <div className="py-2">
                           <p className="px-2 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Loomra
                           </p>
                           <ul>
                              {PRIMARY_LINKS.map((link) => (
                                 <li key={link.href}>
                                    <MobileLink
                                       link={link}
                                       pathname={pathname}
                                       onNavigate={() => setMenuOpen(false)}
                                    />
                                 </li>
                              ))}
                              {[
                                 { label: "Help centre", href: "/help" },
                                 { label: "Contact", href: "/contact" },
                              ].map((link) => (
                                 <li key={link.href}>
                                    <MobileLink
                                       link={link}
                                       pathname={pathname}
                                       onNavigate={() => setMenuOpen(false)}
                                    />
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </nav>

                     <SheetFooter className="gap-2 border-t border-border/70 p-4">
                        <Link
                           href="/login"
                           onClick={() => setMenuOpen(false)}
                           className={cn(
                              buttonVariants({
                                 variant: "outline",
                                 size: "lg",
                              }),
                              "h-10 w-full",
                           )}
                        >
                           Log in
                        </Link>
                        <Link
                           href="/signup"
                           onClick={() => setMenuOpen(false)}
                           className={cn(
                              buttonVariants({ size: "lg" }),
                              "h-10 w-full",
                           )}
                        >
                           Open an account
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              data-icon="inline-end"
                           />
                        </Link>
                     </SheetFooter>
                  </SheetContent>
               </Sheet>
            </div>
         </motion.nav>
      </header>
   );
}

function isGroupActive(pathname: string, group: NavGroup) {
   return group.links.some((link) => pathname === link.href.split("#")[0]);
}

function MobileLink({
   link,
   pathname,
   onNavigate,
}: {
   link: NavLink;
   pathname: string;
   onNavigate: () => void;
}) {
   const active = pathname === link.href.split("#")[0];

   return (
      <Link
         href={link.href}
         onClick={onNavigate}
         aria-current={active ? "page" : undefined}
         className={cn(
            "flex min-h-10 items-center justify-between rounded-lg px-2 text-sm font-medium tracking-tight transition-colors",
            active
               ? "bg-muted text-foreground"
               : "text-foreground/80 hover:bg-muted/60 hover:text-foreground",
         )}
      >
         {link.label}
      </Link>
   );
}
