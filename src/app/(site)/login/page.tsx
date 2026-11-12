import type { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth-form";

export const metadata: Metadata = {
   title: "Log in",
   description:
      "Log in to your Loomra account to hold, convert, send and spend.",
};

export default function LoginPage() {
   return (
      <section className="px-6 pt-20 pb-24 lg:pt-28">
         <div className="mx-auto w-full max-w-md">
            <div className="text-center">
               <span className="text-sm font-medium text-muted-foreground">
                  Welcome back
               </span>
               <h1 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl">
                  Log in to Loomra.
               </h1>
               <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  Your balances, transfers and cards, exactly where you left
                  them.
               </p>
            </div>

            <div className="mt-8">
               <AuthForm mode="login" />
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">
               Trouble signing in?{" "}
               <Link
                  href="/contact"
                  className="font-medium text-foreground underline underline-offset-4"
               >
                  Contact support
               </Link>
               .
            </p>
         </div>
      </section>
   );
}
