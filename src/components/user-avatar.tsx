/** biome-ignore-all lint/performance/noImgElement: dicebear data-URI avatars are not optimized by next/image */
"use client";

import { Avatar as Dicebear, Style } from "@dicebear/core";
import definition from "@dicebear/styles/critters.json" with { type: "json" };
import { cn } from "cn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const style = new Style(definition);

interface UserAvatarProps {
   className?: string;
   image?: string;
   name: string;
}

export default function UserAvatar({
   name,
   image,
   className,
}: UserAvatarProps) {
   const avatar = new Dicebear(style, {
      seed: name,
      size: 128,
      tags: ["animation"],
      // backgroundColor: ["e8c98a", "e8a08a", "a8cbe8", "b9d8ae", "f0c4d0"],
   }).toDataUri();

   return (
      <Avatar className={cn("size-6 overflow-hidden rounded-full", className)}>
         <AvatarImage alt="" src={image} />
         <AvatarFallback>
            <img alt="" src={avatar} />
         </AvatarFallback>
      </Avatar>
   );
}
