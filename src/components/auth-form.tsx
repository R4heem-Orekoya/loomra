"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const FIELD =
   "h-10 w-full rounded-lg border border-border/80 bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring";

const COUNTRIES = [
   "Nigeria",
   "United Kingdom",
   "Germany",
   "Portugal",
   "Poland",
   "Kenya",
   "Ghana",
   "United States",
   "Canada",
   "Other",
];

export default function AuthForm({ mode }: { mode: "signup" | "login" }) {
   const [submitted, setSubmitted] = useState(false);
   const isSignup = mode === "signup";

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setSubmitted(true);
   }

   if (submitted) {
      return (
         <output className="flex flex-col items-start rounded-xl border border-border/40 bg-muted/50 p-6 sm:p-8">
            <span className="grid size-10 place-items-center rounded-full bg-accent-strong/10 text-accent-strong">
               <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={1.7}
                  className="size-5"
               />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-medium tracking-tighter">
               {isSignup ? "That is the whole form." : "Welcome back."}
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
               {isSignup
                  ? "In a live version, the next step would be identity verification and a two-minute wait. This is a product concept, so no account was created and no data was sent."
                  : "In a live version, this is where the app would open. This is a product concept, so there is no session to start."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
               <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="h-9"
                  onClick={() => setSubmitted(false)}
               >
                  Back to the form
               </Button>
               <Link
                  href="/"
                  className="inline-flex h-9 items-center rounded-full px-4 text-xs font-medium underline-offset-4 hover:underline"
               >
                  Return home
               </Link>
            </div>
         </output>
      );
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="rounded-xl border border-border/40 bg-muted/50 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)] sm:p-6"
      >
         <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-heading text-xl font-medium tracking-tighter">
               {isSignup ? "Create your account" : "Log in"}
            </h2>
            <span className="text-xs text-muted-foreground">
               {isSignup ? "Takes about 2 minutes" : "Secure sign-in"}
            </span>
         </div>

         <div className="mt-5 space-y-4">
            {isSignup ? (
               <div className="flex flex-col gap-1.5">
                  <label htmlFor="full-name" className="text-xs font-medium">
                     Full name
                  </label>
                  <input
                     id="full-name"
                     name="name"
                     required
                     autoComplete="name"
                     placeholder="Amara Okafor"
                     className={FIELD}
                  />
               </div>
            ) : null}

            <div className="flex flex-col gap-1.5">
               <label htmlFor="email" className="text-xs font-medium">
                  Email
               </label>
               <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={FIELD}
               />
            </div>

            {isSignup ? (
               <div className="flex flex-col gap-1.5">
                  <label htmlFor="country" className="text-xs font-medium">
                     Where do you live?
                  </label>
                  <select
                     id="country"
                     name="country"
                     defaultValue={COUNTRIES[0]}
                     className={`${FIELD} appearance-none`}
                  >
                     {COUNTRIES.map((country) => (
                        <option key={country} value={country}>
                           {country}
                        </option>
                     ))}
                  </select>
               </div>
            ) : null}

            <div className="flex flex-col gap-1.5">
               <div className="flex items-baseline justify-between gap-3">
                  <label htmlFor="password" className="text-xs font-medium">
                     Password
                  </label>
                  {!isSignup ? (
                     <Link
                        href="/contact"
                        className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                     >
                        Forgot password?
                     </Link>
                  ) : null}
               </div>
               <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  placeholder={
                     isSignup ? "At least 8 characters" : "Your password"
                  }
                  className={FIELD}
               />
            </div>
         </div>

         <Button type="submit" size="lg" className="mt-6 h-10 w-full">
            {isSignup ? "Continue" : "Log in"}
         </Button>

         <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            {isSignup ? (
               <>
                  By continuing you agree to our{" "}
                  <Link
                     href="/legal/terms"
                     className="underline underline-offset-4 hover:text-foreground"
                  >
                     terms
                  </Link>{" "}
                  and{" "}
                  <Link
                     href="/legal/privacy"
                     className="underline underline-offset-4 hover:text-foreground"
                  >
                     privacy policy
                  </Link>
                  .
               </>
            ) : (
               <>
                  New here?{" "}
                  <Link
                     href="/signup"
                     className="font-medium text-foreground underline underline-offset-4"
                  >
                     Open an account
                  </Link>
                  .
               </>
            )}
         </p>

         <p className="mt-3 rounded-lg border border-border/70 bg-secondary/40 px-3 py-2 text-center text-[11px] leading-relaxed text-muted-foreground">
            Concept demo: the form is illustrative and sends nothing.
         </p>
      </form>
   );
}
