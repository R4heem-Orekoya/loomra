"use client";

import {
   ArrowUpRight01Icon,
   Cancel01Icon,
   MinusSignIcon,
   PlusSignIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLenis } from "lenis/react";
import {
   AnimatePresence,
   motion,
   useReducedMotion,
   type Variants,
} from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EASE_ENTER } from "@/lib/ease";
import {
   isGroupActive,
   NAV_GROUPS,
   PRIMARY_LINKS,
   SUPPORT_LINKS,
} from "@/lib/nav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

/** The sheet itself — a single fade — over the items sliding up behind it. */
const SHEET_DURATION = 0.34;
const ITEM_STAGGER = 0.055;
const ITEM_DURATION = 0.5;
const ITEM_OFFSET = 22;

export default function MobileNav({
   open,
   onClose,
}: {
   open: boolean;
   onClose: () => void;
}) {
   const pathname = usePathname();
   const reduceMotion = useReducedMotion();
   const lenis = useLenis();
   const closeRef = useRef<HTMLButtonElement | null>(null);
   const [expanded, setExpanded] = useState<string | null>(null);

   // Open on the group the current page belongs to, like the desktop menu
   // highlights it, and reset once the sheet is gone.
   useEffect(() => {
      if (!open) {
         setExpanded(null);
         return;
      }

      setExpanded(
         NAV_GROUPS.find((group) => isGroupActive(pathname, group))?.label ??
            null,
      );
      closeRef.current?.focus();
   }, [open, pathname]);

   // Hold the page still while the sheet is up. Both elements are pinned so
   // a browser scrollbar can't move the page, and Lenis is stopped so its
   // virtual scroll can't move it either.
   useEffect(() => {
      if (!open) return;

      const root = document.documentElement;
      const previousBody = document.body.style.overflow;
      const previousRoot = root.style.overflow;

      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
      lenis?.stop();

      return () => {
         document.body.style.overflow = previousBody;
         root.style.overflow = previousRoot;
         lenis?.start();
      };
   }, [open, lenis]);

   useEffect(() => {
      if (!open) return;

      const onKeyDown = (event: KeyboardEvent) => {
         if (event.key === "Escape") onClose();
      };

      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
   }, [open, onClose]);

   const sheetTransition = {
      duration: reduceMotion ? 0 : SHEET_DURATION,
      ease: EASE_ENTER,
   };

   const listVariants: Variants = {
      hidden: {},
      visible: {
         transition: {
            staggerChildren: reduceMotion ? 0 : ITEM_STAGGER,
            delayChildren: reduceMotion ? 0 : 0.06,
         },
      },
   };

   const itemVariants: Variants = {
      hidden: { opacity: 0, y: reduceMotion ? 0 : ITEM_OFFSET },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: reduceMotion ? 0 : ITEM_DURATION,
            ease: EASE_ENTER,
         },
      },
   };

   return (
      <AnimatePresence>
         {open ? (
            <motion.div
               role="dialog"
               aria-modal="true"
               aria-label="Menu"
               data-lenis-prevent
               className="fixed inset-0 z-[70] flex flex-col bg-background text-foreground md:hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={sheetTransition}
            >
               <div className="flex h-16 shrink-0 items-center justify-between px-6">
                  <Link
                     href="/"
                     onClick={onClose}
                     aria-label="Loomra home"
                     className="font-heading text-xl font-semibold tracking-tighter"
                  >
                     L<span>oo</span>mra
                  </Link>

                  <button
                     ref={closeRef}
                     type="button"
                     onClick={onClose}
                     aria-label="Close menu"
                     className="grid size-10 place-items-center rounded-full border border-border/70 bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                     <HugeiconsIcon
                        icon={Cancel01Icon}
                        strokeWidth={1.8}
                        className="size-4"
                     />
                  </button>
               </div>

               <motion.nav
                  aria-label="Mobile navigation"
                  className="flex-1 overflow-y-auto overscroll-contain px-6 pt-2 pb-10"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
               >
                  {NAV_GROUPS.map((group) => (
                     <MobileGroup
                        key={group.label}
                        group={group}
                        variants={itemVariants}
                        pathname={pathname}
                        open={expanded === group.label}
                        onToggle={() =>
                           setExpanded((current) =>
                              current === group.label ? null : group.label,
                           )
                        }
                        onNavigate={onClose}
                     />
                  ))}

                  {PRIMARY_LINKS.map((link) => (
                     <MobileRow
                        key={link.href}
                        variants={itemVariants}
                        active={pathname === link.href}
                     >
                        <Link
                           href={link.href}
                           onClick={onClose}
                           aria-current={
                              pathname === link.href ? "page" : undefined
                           }
                           className="flex items-center justify-between gap-4 py-4"
                        >
                           <span className="font-heading text-2xl font-medium tracking-tighter">
                              {link.label}
                           </span>
                           <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              strokeWidth={1.8}
                              className="size-4 text-muted-foreground"
                           />
                        </Link>
                     </MobileRow>
                  ))}

                  <motion.div
                     variants={itemVariants}
                     className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
                  >
                     {SUPPORT_LINKS.map((link) => (
                        <Link
                           key={link.href}
                           href={link.href}
                           onClick={onClose}
                           className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                        >
                           {link.label}
                        </Link>
                     ))}
                  </motion.div>
               </motion.nav>

               <div className="shrink-0 border-t border-border/70 bg-background px-6 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <div className="flex flex-col gap-2">
                     <Link
                        href="/signup"
                        onClick={onClose}
                        className={cn(buttonVariants({ size: "lg" }), "h-11")}
                     >
                        Open an account
                        <HugeiconsIcon
                           icon={ArrowUpRight01Icon}
                           strokeWidth={1.8}
                           data-icon="inline-end"
                        />
                     </Link>
                     <Link
                        href="/login"
                        onClick={onClose}
                        className={cn(
                           buttonVariants({ variant: "outline", size: "lg" }),
                           "h-11",
                        )}
                     >
                        Log in
                     </Link>
                  </div>
               </div>
            </motion.div>
         ) : null}
      </AnimatePresence>
   );
}

function MobileGroup({
   group,
   variants,
   pathname,
   open,
   onToggle,
   onNavigate,
}: {
   group: (typeof NAV_GROUPS)[number];
   variants: Variants;
   pathname: string;
   open: boolean;
   onToggle: () => void;
   onNavigate: () => void;
}) {
   return (
      <MobileRow variants={variants} active={isGroupActive(pathname, group)}>
         <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-4 py-4 text-left"
         >
            <span className="font-heading text-2xl font-medium tracking-tighter">
               {group.label}
            </span>
            <HugeiconsIcon
               icon={open ? MinusSignIcon : PlusSignIcon}
               strokeWidth={1.8}
               className="size-4 text-muted-foreground"
            />
         </button>

         <AnimatePresence initial={false}>
            {open ? (
               <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE_ENTER }}
                  className="overflow-hidden"
               >
                  <ul className="space-y-0.5 pb-4">
                     {group.links.map((link) => (
                        <li key={link.href}>
                           <Link
                              href={link.href}
                              onClick={onNavigate}
                              aria-current={
                                 pathname === link.href ? "page" : undefined
                              }
                              className="flex gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted/70"
                           >
                              {link.icon ? (
                                 <link.icon.glyph
                                    weight="fill"
                                    aria-hidden="true"
                                    className={cn(
                                       "mt-1 size-[18px] shrink-0",
                                       link.icon.className,
                                    )}
                                 />
                              ) : null}
                              <span className="flex flex-col gap-0.5">
                                 <span className="text-base font-medium tracking-tight">
                                    {link.label}
                                 </span>
                                 {link.description ? (
                                    <span className="text-xs leading-relaxed text-muted-foreground">
                                       {link.description}
                                    </span>
                                 ) : null}
                              </span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </motion.div>
            ) : null}
         </AnimatePresence>
      </MobileRow>
   );
}

function MobileRow({
   variants,
   active = false,
   children,
}: {
   variants: Variants;
   active?: boolean;
   children: React.ReactNode;
}) {
   return (
      <motion.div
         variants={variants}
         className={cn("border-b border-border/60", active && "border-border")}
      >
         {children}
      </motion.div>
   );
}
