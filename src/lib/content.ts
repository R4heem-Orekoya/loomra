export type ContentBlock =
   | { type: "paragraph"; text: string }
   | { type: "heading"; text: string }
   | { type: "list"; items: string[]; ordered?: boolean }
   | { type: "note"; text: string };

/** Anchor-friendly id for a heading block. */
export function headingId(text: string) {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
}

export function headingsOf(blocks: ContentBlock[]) {
   return blocks
      .filter(
         (block): block is Extract<ContentBlock, { type: "heading" }> =>
            block.type === "heading",
      )
      .map((block) => ({ id: headingId(block.text), label: block.text }));
}
