import { Squircle } from "@squircle-js/react";
import { cn } from "cn";
import type { PropsWithChildren } from "react";

interface PhoneProps {
   crop: "top" | "bottom";
   className?: string;
}

export default function Phone({
   crop,
   children,
   className,
}: PropsWithChildren<PhoneProps>) {
   return (
      <div
         className={cn(
            "transition-transform duration-500 ease-out group-hover:-translate-y-1.5 motion-reduce:transition-none",
            crop === "top" ? "top-6" : "-bottom-72",
            className,
         )}
      >
         <Squircle
            cornerRadius={45}
            cornerSmoothing={0.8}
            className="bg-[#0a0a0b] p-[4.5px] shadow-[0_45px_80px_-40px_rgba(0,0,0,0.65)] ring-1 ring-black/15"
         >
            <Squircle
               cornerRadius={41.5}
               cornerSmoothing={0.8}
               className="relative h-[600px] overflow-hidden rounded-[2.8rem] bg-white text-neutral-900"
            >
               {children}
            </Squircle>
         </Squircle>
      </div>
   );
}
