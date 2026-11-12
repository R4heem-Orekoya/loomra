import { type ContentBlock, headingId } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function ProseBlocks({
   blocks,
   className,
}: {
   blocks: ContentBlock[];
   className?: string;
}) {
   return (
      <div className={cn("space-y-5", className)}>
         {blocks.map((block) => {
            switch (block.type) {
               case "heading":
                  return (
                     <h2
                        key={block.text}
                        id={headingId(block.text)}
                        className="scroll-mt-28 pt-6 font-heading text-xl font-medium tracking-tighter first:pt-0 sm:text-2xl"
                     >
                        {block.text}
                     </h2>
                  );

               case "list": {
                  const List = block.ordered ? "ol" : "ul";
                  return (
                     <List
                        key={block.items.join("|")}
                        className={cn(
                           "space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground",
                           block.ordered ? "list-decimal" : "list-disc",
                        )}
                     >
                        {block.items.map((item) => (
                           <li key={item} className="pl-1">
                              {item}
                           </li>
                        ))}
                     </List>
                  );
               }

               case "note":
                  return (
                     <p
                        key={block.text}
                        className="rounded-lg border border-border/70 bg-secondary/50 px-4 py-3 text-xs leading-relaxed text-muted-foreground"
                     >
                        {block.text}
                     </p>
                  );

               default:
                  return (
                     <p
                        key={block.text}
                        className="text-pretty text-sm leading-relaxed text-muted-foreground"
                     >
                        {block.text}
                     </p>
                  );
            }
         })}
      </div>
   );
}
