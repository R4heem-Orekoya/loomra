import {
   ArrowUpRight01Icon,
   InstagramIcon,
   Linkedin01Icon,
   NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

type FooterColumn = {
   title: string;
   links: { label: string; href: string }[];
};

type Social = {
   label: string;
   href: string;
   icon: typeof NewTwitterIcon;
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
         { label: "Contact", href: "mailto:hello@loomra.com" },
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

const SOCIALS: Social[] = [
   { label: "Loomra on X", href: "#", icon: NewTwitterIcon },
   { label: "Loomra on LinkedIn", href: "#", icon: Linkedin01Icon },
   { label: "Loomra on Instagram", href: "#", icon: InstagramIcon },
];

export default function Footer() {
   return (
      <footer className="text-paper-ink">
         <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mt-20 grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,0.65fr)] lg:gap-10">
               <div className="max-w-xs">
                  <Link
                     href="/"
                     className="inline-flex items-baseline"
                     aria-label="Loomra home"
                  >
                     <span className="font-heading text-xl font-semibold tracking-tighter">
                        Loomra
                     </span>
                  </Link>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-paper-muted">
                     The multi-currency account for money that crosses borders.
                  </p>

                  <a
                     href="mailto:hello@loomra.com"
                     className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium tracking-tight"
                  >
                     hello@loomra.com
                     <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        strokeWidth={1.8}
                        className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                     />
                  </a>

                  <ul className="mt-8 flex items-center gap-5">
                     {SOCIALS.map((social) => (
                        <li key={social.label}>
                           <a
                              href={social.href}
                              aria-label={social.label}
                              className="inline-flex text-paper-muted transition-colors hover:text-paper-ink"
                           >
                              <HugeiconsIcon
                                 icon={social.icon}
                                 strokeWidth={1.6}
                                 className="size-4"
                              />
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {COLUMNS.map((column) => (
                  <nav key={column.title} aria-label={column.title}>
                     <h3 className="text-xs font-medium uppercase tracking-wider text-paper-muted">
                        {column.title}
                     </h3>
                     <ul className="mt-5 space-y-3">
                        {column.links.map((link) => (
                           <li key={link.label}>
                              <Link
                                 href={link.href}
                                 className="text-sm text-paper-ink/80 font-medium transition-colors hover:text-paper-ink"
                              >
                                 {link.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </nav>
               ))}
            </div>

            <div className="flex flex-col gap-6 pb-12 text-xs leading-relaxed text-paper-muted lg:flex-row lg:items-end lg:justify-between lg:gap-16">
               <p className="max-w-2xl text-pretty">
                  Loomra is a financial technology company, not a bank. Account,
                  card and transfer services are provided by licensed partners.
                  Rates, fees and arrival times shown on this page are
                  illustrative. This site is a product concept.
               </p>

               <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-2 lg:pb-0.5">
                  <p>© 2026 Loomra. All rights reserved.</p>
                  <a
                     href="#top"
                     className="inline-flex items-center gap-1.5 text-paper-ink transition-colors hover:text-paper-muted"
                  >
                     Back to top
                     <span aria-hidden="true">↑</span>
                  </a>
               </div>
            </div>

            <div aria-hidden="true" className="w-full select-none">
               <svg
                  viewBox="20 32 915 150"
                  className="block w-full"
                  role="presentation"
               >
                  <text
                     x="0"
                     y="226"
                     textLength="950"
                     lengthAdjust="spacingAndGlyphs"
                     className="fill-paper-ink font-heading"
                     fontSize="270"
                     fontWeight="500"
                  >
                     Loomra
                  </text>
               </svg>
            </div>
         </div>
      </footer>
   );
}
