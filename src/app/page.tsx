import { PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import HeroGlobe from "@/components/hero-globe";
import HowItWorks from "@/components/how-it-works";
import { LogoMarquee, type MarqueeLogo } from "@/components/logo-marquee";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

const partners: MarqueeLogo[] = [
   {
      name: "Northwind",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinejoin="round"
         >
            <path d="M12 2 22 12 12 22 2 12Z" />
         </svg>
      ),
   },
   {
      name: "Vertex",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinejoin="round"
         >
            <path d="M12 3.5 20.5 20H3.5Z" />
         </svg>
      ),
   },
   {
      name: "Lumen",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
         >
            <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7" />
         </svg>
      ),
   },
   {
      name: "Halcyon",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
         >
            <circle cx="9.25" cy="12" r="6.25" />
            <circle cx="14.75" cy="12" r="6.25" />
         </svg>
      ),
   },
   {
      name: "Meridian",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
         >
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17" />
         </svg>
      ),
   },
   {
      name: "Orbital",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
         >
            <circle cx="12" cy="12" r="3.5" />
            <ellipse
               cx="12"
               cy="12"
               rx="9.5"
               ry="4.5"
               transform="rotate(-30 12 12)"
            />
         </svg>
      ),
   },
   {
      name: "Kite",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinejoin="round"
         >
            <path d="M12 2.5 20 10l-8 11.5L4 10Z" />
         </svg>
      ),
   },
   {
      name: "Aster",
      svg: (
         <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinejoin="round"
         >
            <path d="M12 2.5c.8 5.5 3.2 7.9 8.7 8.7-5.5.8-7.9 3.2-8.7 8.7-.8-5.5-3.2-7.9-8.7-8.7 5.5-.8 7.9-3.2 8.7-8.7Z" />
         </svg>
      ),
   },
];

export default function Home() {
   return (
      <>
         <Navbar />
         <main className="flex min-h-[calc(100dvh-40px)] flex-col">
            <div className="relative grid flex-1 place-items-center px-6 pt-24 pb-0">
               <div className="relative flex flex-col justify-center space-y-6 text-center">
                  <h1 className="font-heading text-4xl font-medium tracking-tighter capitalize md:text-5xl lg:text-6xl">
                     Money, without{" "}
                     <span className="text-[#0BCC51]">borders</span>.
                  </h1>

                  <p className="mx-auto max-w-xl text-pretty font-normal leading-snug tracking-tight text-muted-foreground">
                     Send money to over 100 countries in seconds, at real
                     exchange rates with no hidden fees. Whether you’re paying a
                     supplier, supporting family, or getting paid by a client,
                     it just arrives.
                  </p>

                  <div className="flex items-center justify-center gap-2 mx-auto mt-4">
                     <Button className="max-w-fit" size="lg">
                        Open an account
                     </Button>
                     <Button
                        variant="outline"
                        className="max-w-fit pl-3"
                        size="lg"
                     >
                        <HugeiconsIcon
                           icon={PlayIcon}
                           className="fill-foreground size-4"
                        />
                        Watch video
                     </Button>
                  </div>
               </div>
            </div>

            <HeroGlobe />

            <section aria-label="Trusted by" className="w-full py-4">
               <p className="mb-6 text-center text-sm font-semibold text-foreground/80 tracking-tight">
                  Trusted by finance teams at
               </p>

               <LogoMarquee
                  logos={partners}
                  labels="beside"
                  gap={44}
                  speed={32}
                  className="mx-auto max-w-5xl"
               />
            </section>

            <HowItWorks />
         </main>
      </>
   );
}
