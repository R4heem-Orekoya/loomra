"use client";

import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const FIELD =
   "h-10 w-full rounded-lg border border-border/80 bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring";

const TOPICS = [
   "Account and verification",
   "Transfers and exchange rates",
   "Cards",
   "Security or fraud",
   "Press enquiry",
   "Something else",
];

export default function ContactForm() {
   const [sent, setSent] = useState(false);

   function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setSent(true);
   }

   if (sent) {
      return (
         <output className="flex h-full flex-col items-start justify-center rounded-xl border border-border/40 bg-muted/50 p-6 sm:p-8">
            <span className="grid size-10 place-items-center rounded-full bg-accent-strong/10 text-accent-strong">
               <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={1.7}
                  className="size-5"
               />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-medium tracking-tighter">
               Message noted.
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
               Thanks for writing. This site is a product concept, so the form
               does not send anything yet — in a live version, support would
               reply within four hours on a weekday.
            </p>
            <Button
               type="button"
               variant="outline"
               size="lg"
               className="mt-6 h-9"
               onClick={() => setSent(false)}
            >
               Write another message
            </Button>
         </output>
      );
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="rounded-xl border border-border/40 bg-muted/50 p-5 sm:p-6"
      >
         <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
               <label htmlFor="name" className="text-xs font-medium">
                  Your name
               </label>
               <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Amara Okafor"
                  className={FIELD}
               />
            </div>

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
         </div>

         <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="topic" className="text-xs font-medium">
               What is this about?
            </label>
            <select
               id="topic"
               name="topic"
               className={`${FIELD} appearance-none`}
               defaultValue={TOPICS[0]}
            >
               {TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                     {topic}
                  </option>
               ))}
            </select>
         </div>

         <div className="mt-4 flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium">
               Message
            </label>
            <textarea
               id="message"
               name="message"
               required
               rows={5}
               placeholder="Tell us what happened, and include the email on your account if you have one."
               className="w-full resize-y rounded-lg border border-border/80 bg-background px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
            />
         </div>

         <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
               We reply to every message. This concept form does not send data
               anywhere.
            </p>
            <Button type="submit" size="lg" className="h-9 px-5">
               Send message
            </Button>
         </div>
      </form>
   );
}
