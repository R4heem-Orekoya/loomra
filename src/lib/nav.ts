import {
   Article,
   Briefcase,
   Buildings,
   CreditCard,
   type Icon,
   Newspaper,
   PaperPlaneTilt,
   Wallet,
} from "@phosphor-icons/react";

export type NavIcon = {
   glyph: Icon;
   /** Each sub item owns a hue, so the list scans by colour as well as label. */
   className: string;
};

export type NavLink = {
   label: string;
   href: string;
   description?: string;
   /** Filled glyph shown beside the link in the header menus. */
   icon?: NavIcon;
};

export type NavGroup = {
   label: string;
   links: NavLink[];
};

/** The desktop dropdowns — and the accordions in the mobile menu. */
export const NAV_GROUPS: NavGroup[] = [
   {
      label: "Product",
      links: [
         {
            label: "The account",
            href: "/product",
            description: "Hold 40+ currencies in one balance.",
            icon: { glyph: Wallet, className: "text-emerald-500" },
         },
         {
            label: "Send money",
            href: "/product#how-it-works",
            description: "Local rails in 100+ countries.",
            icon: { glyph: PaperPlaneTilt, className: "text-sky-500" },
         },
         {
            label: "Virtual cards",
            href: "/product#cards",
            description: "Spend online with cards you control.",
            icon: { glyph: CreditCard, className: "text-violet-500" },
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
            icon: { glyph: Buildings, className: "text-amber-500" },
         },
         {
            label: "Careers",
            href: "/careers",
            description: "Open roles and how we hire.",
            icon: { glyph: Briefcase, className: "text-rose-500" },
         },
         {
            label: "Press",
            href: "/press",
            description: "Brand assets and press contact.",
            icon: { glyph: Newspaper, className: "text-cyan-500" },
         },
         {
            label: "Blog",
            href: "/blog",
            description: "Guides to moving money well.",
            icon: { glyph: Article, className: "text-indigo-500" },
         },
      ],
   },
];

/** Top-level links that sit beside the groups on both nav layers. */
export const PRIMARY_LINKS: NavLink[] = [
   { label: "Pricing", href: "/pricing" },
   { label: "Security", href: "/security" },
];

/** Utility links that only earn their space in the mobile menu. */
export const SUPPORT_LINKS: NavLink[] = [
   { label: "Help centre", href: "/help" },
   { label: "Contact", href: "/contact" },
];

export function isGroupActive(pathname: string, group: NavGroup) {
   return group.links.some((link) => pathname === link.href.split("#")[0]);
}
