import Link from "next/link";
import Logo from "@/components/logo";

type FooterColumn = {
   title: string;
   links: { label: string; href: string }[];
};

const COLUMNS: FooterColumn[] = [
   {
      title: "Product",
      links: [
         { label: "The account", href: "#capabilities" },
         { label: "Pricing", href: "#fees" },
         { label: "How it works", href: "#how-it-works" },
         { label: "Security", href: "#security" },
      ],
   },
   {
      title: "Company",
      links: [
         { label: "About", href: "#" },
         { label: "Careers", href: "#" },
         { label: "Press", href: "#" },
         { label: "Contact", href: "#" },
      ],
   },
   {
      title: "Legal",
      links: [
         { label: "Terms", href: "#" },
         { label: "Privacy", href: "#" },
         { label: "Cookies", href: "#" },
         { label: "Complaints", href: "#" },
      ],
   },
];

export default function Footer() {
   return (
      <footer className="border-t border-neutral-200/70">
         <div className="mx-auto w-full max-w-6xl px-6 py-14">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
               <div>
                  <Link
                     href="/"
                     className="inline-flex items-center gap-2"
                     aria-label="Loomra home"
                  >
                     <Logo className="h-5 w-auto" />
                     <span className="font-heading text-base font-semibold tracking-tighter">
                        Loomra
                     </span>
                  </Link>
                  <p className="mt-3 max-w-xs text-pretty text-xs leading-relaxed text-muted-foreground">
                     The multi-currency account for money that crosses borders.
                  </p>
                  <p className="mt-6 text-[11px] text-neutral-500">
                     © 2026 Loomra. All rights reserved.
                  </p>
               </div>

               {COLUMNS.map((column) => (
                  <div key={column.title}>
                     <h3 className="text-xs font-semibold tracking-tight">
                        {column.title}
                     </h3>
                     <ul className="mt-3 space-y-2">
                        {column.links.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <p className="mt-10 max-w-3xl border-t border-neutral-200/70 pt-6 text-[11px] leading-relaxed text-neutral-500">
               Loomra is a financial technology company, not a bank. Account,
               card and transfer services are provided by licensed partners.
               Rates, fees and arrival times shown on this page are
               illustrative. This site is a product concept.
            </p>
         </div>
      </footer>
   );
}
