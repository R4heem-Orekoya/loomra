import type { ContentBlock } from "@/lib/content";

export type Post = {
   slug: string;
   title: string;
   description: string;
   category: string;
   date: string;
   dateTime: string;
   readingTime: string;
   author: string;
   blocks: ContentBlock[];
};

export const POSTS: Post[] = [
   {
      slug: "sending-money-to-nigeria",
      title: "How to send money to Nigeria without losing it to fees",
      description:
         "A practical look at the two costs that hide inside an international transfer, and the questions to ask before you press send.",
      category: "Guides",
      date: "28 October 2026",
      dateTime: "2026-10-28",
      readingTime: "6 min read",
      author: "Raheem Orekoya",
      blocks: [
         {
            type: "paragraph",
            text: "A transfer receipt usually shows one number for the fee. The real cost is almost always two: what you are charged to send, and what the provider quietly takes out of the exchange rate. On a large transfer to Nigeria, the second number is frequently the bigger one.",
         },
         {
            type: "heading",
            text: "The fee you see",
         },
         {
            type: "paragraph",
            text: "An explicit fee is easy to understand. It is a fixed amount or a percentage, it appears on the confirmation screen, and it comes out of the money you send. Banks often charge between $25 and $45 for a single international transfer, which is a large share of a $200 send.",
         },
         {
            type: "heading",
            text: "The markup you do not",
         },
         {
            type: "paragraph",
            text: "The exchange rate you are offered is rarely the rate you see on a search engine. That public rate is the mid-market rate — the midpoint between buyers and sellers, with no retail margin. Providers buy currency at or near it and sell it to you at a higher price. The gap, usually 2% to 5%, is the markup.",
         },
         {
            type: "list",
            items: [
               "Ask for the rate you are being given, and compare it with the mid-market rate at the same moment.",
               "Ask for the exact amount that will land in the recipient's account, not the amount sent.",
               "Check whether the receiving bank adds its own charge on arrival.",
            ],
         },
         {
            type: "heading",
            text: "Why local rails matter",
         },
         {
            type: "paragraph",
            text: "A transfer to Nigeria can travel over a global network or over a local rail. Local rails are usually cheaper and faster because the money never has to leave the country's banking system. A provider that connects to local rails can often settle in seconds rather than days.",
         },
         {
            type: "heading",
            text: "A simple checklist",
         },
         {
            type: "list",
            ordered: true,
            items: [
               "Compare the amount that arrives, not the headline fee.",
               "Check the rate against the mid-market rate.",
               "Confirm the expected arrival time before sending.",
               "Keep the receipt until the recipient confirms the money is there.",
            ],
         },
         {
            type: "note",
            text: "Figures in this guide are illustrative. Always check the rate and fee shown on the confirmation screen before you send.",
         },
      ],
   },
   {
      slug: "mid-market-rate",
      title: "What the mid-market rate actually means",
      description:
         "The rate you see on a search engine is not a rate anyone can trade at. Here is what it is, and why it matters for your transfer.",
      category: "Explained",
      date: "14 October 2026",
      dateTime: "2026-10-14",
      readingTime: "4 min read",
      author: "Amara Okafor",
      blocks: [
         {
            type: "paragraph",
            text: "The mid-market rate is the midpoint between the price at which one currency can be bought and the price at which it can be sold. It sits between the bid and the ask, and it is the fairest single number available for a currency pair at a given moment.",
         },
         {
            type: "heading",
            text: "Why nobody trades at it",
         },
         {
            type: "paragraph",
            text: "Banks and brokers make money on the spread between buying and selling. A retail provider that offered the pure mid-market rate would not cover its costs, so it either charges a visible fee or applies a margin to the rate. Some do both.",
         },
         {
            type: "heading",
            text: "How to compare two providers",
         },
         {
            type: "paragraph",
            text: "Ignore the advertised fee for a moment. Ask each provider for the amount that will arrive after all charges, for the same amount sent at the same time. The provider with the higher landing amount is cheaper, whatever the fee line says.",
         },
         {
            type: "heading",
            text: "Where Loomra sits",
         },
         {
            type: "paragraph",
            text: "Loomra converts at the mid-market rate and charges 1.5% per transfer, capped at $20. There is no markup hidden inside the rate, so the fee on the confirmation screen is the whole cost.",
         },
      ],
   },
   {
      slug: "holding-multiple-currencies",
      title: "Holding four currencies, explained",
      description:
         "Why a multi-currency balance beats converting every time you get paid, and how to think about which currencies to keep.",
      category: "Product",
      date: "30 September 2026",
      dateTime: "2026-09-30",
      readingTime: "5 min read",
      author: "Maria Rossi",
      blocks: [
         {
            type: "paragraph",
            text: "If you earn in dollars, pay rent in euros and support family in pounds, converting everything into one currency as it arrives means paying the exchange cost twice. Holding a balance in each currency lets you decide when — and whether — to convert at all.",
         },
         {
            type: "heading",
            text: "Keep what you spend",
         },
         {
            type: "paragraph",
            text: "Start with the currencies you actually have obligations in. A freelancer paid in USD who pays a EUR subscription and sends money to Nigeria has three natural buckets: USD for the invoice, EUR for the subscription, NGN for the transfer.",
         },
         {
            type: "heading",
            text: "Convert on your terms",
         },
         {
            type: "paragraph",
            text: "A balance gives you time. You are not forced to convert on the day the money lands, so a routine payment does not have to happen at an inconvenient rate. It also makes recurring costs predictable, because the money is already sitting in the right currency.",
         },
         {
            type: "heading",
            text: "Keep the number small",
         },
         {
            type: "paragraph",
            text: "Most people need two or three currencies, not forty. Extra balances are useful when you travel or get paid in a new currency, but they are not a portfolio. Keep the currencies you use, and convert the rest when it is worth it.",
         },
         {
            type: "note",
            text: "Loomra holds 40+ currencies. Currency availability can vary by country and is shown in the app.",
         },
      ],
   },
];

export function getPost(slug: string) {
   return POSTS.find((post) => post.slug === slug);
}
