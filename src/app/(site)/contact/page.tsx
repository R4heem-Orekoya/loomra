import {
   ArrowUpRight01Icon,
   CustomerSupportIcon,
   Location01Icon,
   Mail01Icon,
   NewspaperIcon,
   Shield01Icon,
   UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
   title: "Contact",
   description:
      "Contact Loomra about support, press, careers or security. Every message gets a human reply.",
};

const CHANNELS = [
   {
      icon: CustomerSupportIcon,
      title: "Support",
      copy: "Account, transfers and cards. Weekdays, replies within four hours.",
      email: "hello@loomra.com",
   },
   {
      icon: NewspaperIcon,
      title: "Press",
      copy: "Interviews, data and comment on cross-border payments.",
      email: "press@loomra.com",
   },
   {
      icon: UserGroupIcon,
      title: "Careers",
      copy: "Applications, referrals and questions about the hiring process.",
      email: "careers@loomra.com",
   },
   {
      icon: Shield01Icon,
      title: "Security",
      copy: "Report a vulnerability or a suspicious message claiming to be us.",
      email: "security@loomra.com",
   },
];

export default function ContactPage() {
   return (
      <>
         <PageHero
            eyebrow="Contact"
            title="Tell us what you need."
            description="A person reads every message. Pick a channel below, or write to us with the form and we will route it to the right team."
         />

         <section className="px-6 pb-24">
            <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
               <div>
                  <ul className="divide-y divide-border/40 overflow-hidden rounded-xl border border-border/40 bg-muted/50">
                     {CHANNELS.map((channel) => (
                        <li
                           key={channel.title}
                           className="flex gap-3 px-5 py-4"
                        >
                           <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded border border-border/70 bg-secondary/50">
                              <HugeiconsIcon
                                 icon={channel.icon}
                                 strokeWidth={1.7}
                                 className="size-4 text-accent-strong"
                              />
                           </span>
                           <div>
                              <h2 className="text-sm font-medium tracking-tight">
                                 {channel.title}
                              </h2>
                              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                                 {channel.copy}
                              </p>
                              <a
                                 href={`mailto:${channel.email}`}
                                 className="group mt-2 inline-flex items-center gap-1 text-xs font-medium tracking-tight"
                              >
                                 {channel.email}
                                 <HugeiconsIcon
                                    icon={ArrowUpRight01Icon}
                                    strokeWidth={1.8}
                                    className="size-3 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                                 />
                              </a>
                           </div>
                        </li>
                     ))}
                  </ul>

                  <div className="mt-4 rounded-xl border border-border/40 bg-muted/50 px-5 py-4">
                     <div className="flex items-center gap-2 text-xs font-medium">
                        <HugeiconsIcon
                           icon={Location01Icon}
                           strokeWidth={1.7}
                           className="size-3.5 text-accent-strong"
                        />
                        Where we are
                     </div>
                     <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Loomra, 14 Adeola Odeku Street, Victoria Island, Lagos,
                        Nigeria. Post goes to the Lagos office; the team works
                        across 14 countries.
                     </p>
                  </div>

                  <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
                     <HugeiconsIcon
                        icon={Mail01Icon}
                        strokeWidth={1.7}
                        className="size-3.5"
                     />
                     Prefer email? hello@loomra.com works for everything.
                  </p>
               </div>

               <ContactForm />
            </div>
         </section>
      </>
   );
}
