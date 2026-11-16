import type { ReactNode } from "react";
import ScrollReveal from "@/components/scroll-reveal";

/**
 * Templates remount on every navigation, which is what the scroll reveal
 * needs: each new page starts with its own fresh set of hidden sections.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
   return (
      <>
         {children}
         <ScrollReveal />
      </>
   );
}
