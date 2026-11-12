"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Footer from "./footer";
import SiteHeader from "./site-header";

/**
 * Routes that stay dark for their whole length. The home page instead shifts
 * the document theme from its security section, which lives inside the page.
 */
const DARK_ROUTES = ["/security"];

export default function SiteShell({ children }: { children: ReactNode }) {
   const pathname = usePathname();
   const routeDark = DARK_ROUTES.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
   );

   return (
      <div
         id="top"
         className={cn(
            "flex min-h-dvh flex-col bg-background text-foreground",
            routeDark && "dark",
         )}
      >
         <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:text-background"
         >
            Skip to content
         </a>

         <SiteHeader routeDark={routeDark} />

         <main id="main" className="flex-1">
            {children}
         </main>

         <Footer />
      </div>
   );
}
