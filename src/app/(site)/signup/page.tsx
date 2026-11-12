import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth-form";
import UserAvatar from "@/components/user-avatar";

export const metadata: Metadata = {
   title: "Open an account",
   description:
      "Open a Loomra account in about two minutes. Free to open, no monthly fee and no minimum balance.",
};

const BENEFITS = [
   "Hold 40+ currencies in one account.",
   "Send to 100+ countries at the real rate.",
   "Virtual cards you can freeze instantly.",
];

export default function SignupPage() {
   return (
      <section className="px-6 pt-20 pb-24 lg:pt-28">
         <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
               <span className="text-sm font-medium text-muted-foreground">
                  Open an account
               </span>

               <h1 className="mt-3 text-balance font-heading text-4xl font-medium tracking-tighter sm:text-5xl">
                  Money in every direction, from one place.
               </h1>

               <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Create your Loomra account with an email. No paperwork, no
                  branch visit, and no monthly fee once you are in.
               </p>

               <ul className="mt-7 space-y-3">
                  {BENEFITS.map((benefit) => (
                     <li
                        key={benefit}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                     >
                        <HugeiconsIcon
                           icon={CheckmarkCircle02Icon}
                           strokeWidth={1.7}
                           className="mt-0.5 size-4 shrink-0 text-accent-strong"
                        />
                        {benefit}
                     </li>
                  ))}
               </ul>

               <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                     <UserAvatar
                        name="Jakub"
                        className="border-background border-2"
                     />
                     <UserAvatar
                        name="Amara"
                        className="border-background border-2"
                     />
                     <UserAvatar
                        name="Maria"
                        className="border-background border-2"
                     />
                     <UserAvatar
                        name="David"
                        className="border-background border-2"
                     />
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                     Joined by 2 million people
                     <br />
                     across 100+ countries.
                  </p>
               </div>

               <p className="mt-8 text-xs text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                     href="/login"
                     className="font-medium text-foreground underline underline-offset-4"
                  >
                     Log in
                  </Link>
               </p>
            </div>

            <AuthForm mode="signup" />
         </div>
      </section>
   );
}
