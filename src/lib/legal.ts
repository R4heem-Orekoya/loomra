import type { ContentBlock } from "@/lib/content";

export type LegalDoc = {
   slug: string;
   title: string;
   description: string;
   updated: string;
   blocks: ContentBlock[];
};

const UPDATED = "1 October 2026";

const INTRO: ContentBlock = {
   type: "note",
   text: "This is an illustrative document for a product concept. It is not legal advice and it is not a binding agreement.",
};

export const LEGAL_DOCS: LegalDoc[] = [
   {
      slug: "terms",
      title: "Terms of service",
      description:
         "The rules that cover your Loomra account, transfers, cards and everything in between.",
      updated: UPDATED,
      blocks: [
         INTRO,
         {
            type: "paragraph",
            text: "These terms describe how the Loomra account works in this concept. By using the service you agree to them, along with our privacy policy and the fee information shown in the app before each transfer.",
         },
         {
            type: "heading",
            text: "Who we are",
         },
         {
            type: "paragraph",
            text: "Loomra is a financial technology company, not a bank. Account, card and payment services are provided by licensed partners. Your relationship for regulated services is with the relevant partner, and we will always tell you which entity you are dealing with before money moves.",
         },
         {
            type: "heading",
            text: "Your account",
         },
         {
            type: "paragraph",
            text: "You must be at least 18 and able to enter into a contract. You are responsible for keeping your sign-in details secure, for reviewing activity in your account, and for telling us promptly if you think someone else has access.",
         },
         {
            type: "list",
            items: [
               "Use the account only for lawful purposes.",
               "Complete identity verification when we ask for it.",
               "Do not let anyone else use your account or your cards.",
               "Keep your contact details up to date so we can reach you.",
            ],
         },
         {
            type: "heading",
            text: "Fees and exchange rates",
         },
         {
            type: "paragraph",
            text: "Transfers cost 1.5% of the amount sent, capped at $20. Currency conversion uses the mid-market rate with no added markup. The fee and rate are shown in full before you confirm, and the amount that will arrive is never different from the amount quoted.",
         },
         {
            type: "heading",
            text: "Sending money",
         },
         {
            type: "paragraph",
            text: "Once a transfer is confirmed it can usually be cancelled only until it is sent to the receiving bank. Some routes need extra documents or depend on local cut-off times; where that is the case you will see it before you start, not after the money has left.",
         },
         {
            type: "heading",
            text: "Cards",
         },
         {
            type: "paragraph",
            text: "Virtual cards are issued against your balance and can be frozen or replaced at any time. Card transactions are subject to the merchant's own terms, and some merchants may decline prepaid or virtual card products.",
         },
         {
            type: "heading",
            text: "Closing your account",
         },
         {
            type: "paragraph",
            text: "You can close your account at any time once pending transfers and card authorisations have settled. We may suspend or close an account where we are required to by law, or where we reasonably believe it is being used for fraud or another unlawful purpose.",
         },
         {
            type: "heading",
            text: "Contact",
         },
         {
            type: "paragraph",
            text: "Questions about these terms can go to hello@loomra.com or through the contact page. Complaints are handled under our complaints procedure.",
         },
      ],
   },
   {
      slug: "privacy",
      title: "Privacy policy",
      description:
         "What we collect, why we collect it, and the control you keep over it.",
      updated: UPDATED,
      blocks: [
         INTRO,
         {
            type: "paragraph",
            text: "We collect the information needed to open and run an account, to move money safely, and to meet our legal obligations. We do not sell personal data, and we do not use the content of your transfers for advertising.",
         },
         {
            type: "heading",
            text: "What we collect",
         },
         {
            type: "list",
            items: [
               "Identity details such as your name, date of birth, address and a photo ID.",
               "Contact details, including email and phone number.",
               "Account activity: balances, transfers, card payments and login history.",
               "Device and usage data needed to keep the account secure.",
            ],
         },
         {
            type: "heading",
            text: "How we use it",
         },
         {
            type: "paragraph",
            text: "We use your data to verify who you are, to execute the instructions you give us, to detect fraud and financial crime, to provide support, and to meet our regulatory duties. Where we rely on consent — for example for optional product emails — you can withdraw it at any time.",
         },
         {
            type: "heading",
            text: "Who we share it with",
         },
         {
            type: "paragraph",
            text: "We share only what is necessary with licensed banking partners, card networks, payment providers, identity verification services and the authorities where the law requires it. Every provider is bound by contractual confidentiality and security obligations.",
         },
         {
            type: "heading",
            text: "How long we keep it",
         },
         {
            type: "paragraph",
            text: "Records connected to payments and identity are kept for the period required by financial regulation, typically six years after the relationship ends. Other data is deleted or anonymised once it is no longer needed for the purpose it was collected.",
         },
         {
            type: "heading",
            text: "Your rights",
         },
         {
            type: "paragraph",
            text: "You can ask for a copy of your data, ask us to correct it, or ask us to delete it where we are not required to keep it. You can also object to certain processing and ask for it to be restricted. Requests go to privacy@loomra.com and are answered within 30 days.",
         },
         {
            type: "heading",
            text: "Cookies",
         },
         {
            type: "paragraph",
            text: "We use a small number of essential cookies to keep you signed in and to protect the service. Analytics cookies are optional and described in our cookie policy.",
         },
      ],
   },
   {
      slug: "cookies",
      title: "Cookie policy",
      description:
         "The small number of cookies this site uses, and how to turn the optional ones off.",
      updated: UPDATED,
      blocks: [
         INTRO,
         {
            type: "paragraph",
            text: "Cookies are small files a site stores in your browser. Loomra uses them sparingly: to keep the site working, and — only if you agree — to understand which pages are useful.",
         },
         {
            type: "heading",
            text: "Essential cookies",
         },
         {
            type: "paragraph",
            text: "These are required for sign-in, security checks and remembering your preferences. The site cannot work without them, so they are always on.",
         },
         {
            type: "heading",
            text: "Analytics cookies",
         },
         {
            type: "paragraph",
            text: "These tell us which pages are visited and how people move between them, in aggregate. They are optional, and the site works normally if you decline them.",
         },
         {
            type: "heading",
            text: "Managing cookies",
         },
         {
            type: "paragraph",
            text: "You can clear or block cookies in your browser settings at any time. Blocking essential cookies may prevent you from signing in.",
         },
      ],
   },
   {
      slug: "complaints",
      title: "Complaints",
      description:
         "How to raise a complaint, what happens next, and how long each step takes.",
      updated: UPDATED,
      blocks: [
         INTRO,
         {
            type: "paragraph",
            text: "If something has gone wrong we want to hear about it. Complaints are free to raise and do not affect your right to take a matter further.",
         },
         {
            type: "heading",
            text: "How to raise a complaint",
         },
         {
            type: "paragraph",
            text: "Email complaints@loomra.com with your name, the email on your account and what happened. You can also write to us through the contact page. If you would rather speak to someone, ask for a call back and we will arrange one.",
         },
         {
            type: "heading",
            text: "What happens next",
         },
         {
            type: "list",
            ordered: true,
            items: [
               "We acknowledge your complaint within two business days.",
               "A case handler reviews the account and the relevant payments.",
               "We send a full response within 15 business days.",
               "If we need longer, we explain why and give a firm date.",
            ],
         },
         {
            type: "heading",
            text: "If you are not satisfied",
         },
         {
            type: "paragraph",
            text: "If our final response does not resolve the issue, you may be able to refer it to the relevant financial ombudsman or regulator for the licensed partner that provided the service. We will tell you which one applies in our response.",
         },
      ],
   },
   {
      slug: "disclosures",
      title: "Regulatory disclosures",
      description:
         "Who provides what, how your money is held, and the limits of this concept.",
      updated: UPDATED,
      blocks: [
         INTRO,
         {
            type: "heading",
            text: "Loomra is not a bank",
         },
         {
            type: "paragraph",
            text: "Loomra is a financial technology company. We do not hold a banking licence and we do not lend money. Banking, card issuing and payment services are provided by licensed partners, and the partner is identified in the app before you use a regulated service.",
         },
         {
            type: "heading",
            text: "How your money is held",
         },
         {
            type: "paragraph",
            text: "Client money is held in segregated accounts with regulated banking partners, separate from Loomra's own funds. It is not lent out, invested, or used to fund our operations.",
         },
         {
            type: "heading",
            text: "Rates and fees",
         },
         {
            type: "paragraph",
            text: "Exchange rates shown on this site are illustrative and based on the mid-market rate at the time of writing. Fees and arrival times are examples, not offers. The rate and fee that apply to a real transfer are the ones shown on the confirmation screen.",
         },
         {
            type: "heading",
            text: "About this site",
         },
         {
            type: "paragraph",
            text: "This website is a product concept built for portfolio purposes. It is not a live financial service, no accounts can be opened, and no money can be sent. Any names, figures or testimonials shown are illustrative.",
         },
         {
            type: "heading",
            text: "Contact",
         },
         {
            type: "paragraph",
            text: "Questions about these disclosures can go to legal@loomra.com.",
         },
      ],
   },
];

export function getLegalDoc(slug: string) {
   return LEGAL_DOCS.find((doc) => doc.slug === slug);
}
