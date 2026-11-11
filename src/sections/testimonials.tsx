"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { cn } from "@/lib/utils";
import "swiper/css";

type Testimonial = {
   quote: string;
   name: string;
   role: string;
   seed: string;
};

const TESTIMONIALS: Testimonial[] = [
   {
      quote: "I invoice two clients in dollars and one in euros. The money lands in my balances and I convert only what I need, when I need it. The rate is the rate — no nasty surprise at the end.",
      name: "Amara Okafor",
      role: "Product designer · Lagos",
      seed: "amara-okafor",
   },
   {
      quote: "We pay eleven contractors in seven currencies. What used to be a spreadsheet and three bank visits is one run on a Tuesday morning — and everyone is paid before lunch.",
      name: "Tom Hughes",
      role: "Founder, Northwind Studio · London",
      seed: "tom-hughes",
   },
   {
      quote: "My first transfer arrived before the client's confirmation email did. I checked the fee twice because I was sure something had gone wrong.",
      name: "Priya Raman",
      role: "Freelance developer · Bengaluru",
      seed: "priya-raman",
   },
   {
      quote: "I moved my savings across three currencies the week I relocated. Same afternoon, same account — and the rate I was quoted was the rate I actually got.",
      name: "Nadia Haddad",
      role: "Product manager · Dubai",
      seed: "nadia-haddad",
   },
   {
      quote: "Card spend sits in the same account as the money coming in, so month-end closes itself. No receipt chasing, no FX line to reconcile on a Friday night.",
      name: "Daniel Mensah",
      role: "Finance lead, Meridian Labs · Accra",
      seed: "daniel-mensah",
   },
];

const AUTOPLAY_DELAY = 7000;

/** "01" – keeps the counter from shifting as it climbs into double digits. */
function pad(value: number) {
   return String(value).padStart(2, "0");
}

function subscribeReducedMotion(onChange: () => void) {
   const query = window.matchMedia("(prefers-reduced-motion: reduce)");
   query.addEventListener("change", onChange);
   return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () =>
   window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Testimonials() {
   const [activeIndex, setActiveIndex] = useState(0);
   // Swiper instantiates itself while rendering, so keep it off the server and
   // let the first testimonial stand in until the client takes over.
   const [mounted, setMounted] = useState(false);
   const swiperRef = useRef<SwiperClass | null>(null);
   const activeFillRef = useRef<HTMLSpanElement | null>(null);
   const reduceMotion = useSyncExternalStore(
      subscribeReducedMotion,
      getReducedMotion,
      () => false,
   );

   useEffect(() => {
      setMounted(true);
   }, []);

   const selectTestimonial = (index: number) => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      if (index === activeIndex) {
         // Clicking the active bar restarts its progress instead of moving.
         if (activeFillRef.current) {
            activeFillRef.current.style.transform = "scaleX(0)";
         }
         if (!reduceMotion) swiper.autoplay.start();
         return;
      }

      swiper.slideToLoop(index);
   };

   return (
      <section
         id="testimonials"
         aria-labelledby="testimonials-heading"
         className="scroll-mt-24 py-24 lg:py-48"
      >
         <div className="mx-auto w-full max-w-6xl px-6">
            <header className="mx-auto max-w-2xl text-center">
               <h2
                  id="testimonials-heading"
                  className="mt-3 text-balance font-heading text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl"
               >
                  Money that works across time zones.
               </h2>
               <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
                  Freelancers, founders and families who move money for a living
                  — and would notice if the rate slipped.
               </p>
            </header>

            <div className="mx-auto mt-14 max-w-4xl lg:mt-20">
               {mounted ? (
                  <Swiper
                     modules={[Autoplay, Keyboard]}
                     slidesPerView={1}
                     spaceBetween={48}
                     speed={650}
                     loop
                     keyboard={{ enabled: true }}
                     autoplay={
                        reduceMotion
                           ? false
                           : {
                                delay: AUTOPLAY_DELAY,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                             }
                     }
                     aria-roledescription="carousel"
                     aria-label="Customer testimonials"
                     onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                     }}
                     onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                     }
                     onAutoplayTimeLeft={(_swiper, _timeLeft, percentage) => {
                        const fill = activeFillRef.current;
                        if (!fill) return;
                        const elapsed = Math.min(
                           1,
                           Math.max(0, 1 - percentage),
                        );
                        fill.style.transform = `scaleX(${elapsed})`;
                     }}
                  >
                     {TESTIMONIALS.map((testimonial, index) => (
                        <SwiperSlide
                           key={testimonial.name}
                           aria-hidden={index !== activeIndex}
                        >
                           <TestimonialSlide testimonial={testimonial} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               ) : (
                  <TestimonialSlide testimonial={TESTIMONIALS[0]} />
               )}

               <div className="mt-12 flex items-center gap-4 pt-5 sm:gap-6 max-w-md mx-auto">
                  <div className="flex h-8 flex-1 items-center gap-1.5">
                     {TESTIMONIALS.map((testimonial, index) => {
                        const isActive = index === activeIndex;

                        return (
                           <button
                              key={testimonial.name}
                              type="button"
                              aria-label={`Show testimonial from ${testimonial.name}`}
                              aria-current={isActive ? "true" : undefined}
                              onClick={() => selectTestimonial(index)}
                              className={cn(
                                 "group flex h-8 cursor-pointer items-center rounded-full outline-none transition-[flex-grow] duration-500 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none",
                                 isActive ? "flex-4" : "flex-1",
                              )}
                           >
                              <span className="relative h-1 w-full overflow-hidden rounded-full bg-border">
                                 {isActive ? (
                                    <span
                                       ref={activeFillRef}
                                       style={{
                                          transform:
                                             reduceMotion || !mounted
                                                ? "scaleX(1)"
                                                : "scaleX(0)",
                                       }}
                                       className="absolute inset-0 origin-left rounded-full bg-foreground"
                                    />
                                 ) : null}
                              </span>
                           </button>
                        );
                     })}
                  </div>

                  <span className="shrink-0 text-[11px] tabular-nums tracking-tight text-muted-foreground">
                     {pad(activeIndex + 1)} / {pad(TESTIMONIALS.length)}
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
   return (
      <figure className="flex h-full flex-col items-center text-center cursor-grab">
         <blockquote className="mt-3 text-balance font-heading max-w-2xl text-balance text-xl font-medium leading-[1.45] tracking-tight sm:text-2xl lg:leading-[1.4]">
            <span className="text-muted-foreground">"</span>
            {testimonial.quote}
            <span className="text-muted-foreground">"</span>
         </blockquote>

         <figcaption className="mt-10 flex items-center gap-3">
            <Image
               src={`https://api.dicebear.com/10.x/glass/svg?seed=${testimonial.seed}`}
               alt=""
               width={40}
               height={40}
               unoptimized
               className="size-12 shrink-0 rounded-full bg-secondary"
            />
            <span className="text-left">
               <span className="block font-heading text-base font-medium tracking-tight">
                  {testimonial.name}
               </span>
               <span className="block text-xs text-muted-foreground">
                  {testimonial.role}
               </span>
            </span>
         </figcaption>
      </figure>
   );
}
