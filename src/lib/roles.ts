export type Role = {
   slug: string;
   title: string;
   team: string;
   location: string;
   type: string;
   salary: string;
   reportsTo: string;
   summary: string;
   about: string[];
   responsibilities: string[];
   requirements: string[];
   niceToHave: string[];
};

export type HiringStep = {
   step: string;
   title: string;
   copy: string;
};

export const HIRING_PROCESS: HiringStep[] = [
   {
      step: "01",
      title: "A conversation",
      copy: "Thirty minutes with the hiring manager about your experience and what you want next. No trick questions.",
   },
   {
      step: "02",
      title: "A real problem",
      copy: "A short exercise drawn from the actual work, done in your own time and paid for. You keep the work.",
   },
   {
      step: "03",
      title: "Meet the team",
      copy: "Two conversations with the people you would work with, including one outside your discipline.",
   },
   {
      step: "04",
      title: "An offer",
      copy: "A written offer with the salary band, equity and start date. Feedback either way within a week.",
   },
];

export const ROLES: Role[] = [
   {
      slug: "senior-product-engineer",
      title: "Senior Product Engineer",
      team: "Engineering",
      location: "Remote — EU / Africa",
      type: "Full-time",
      salary: "$120k – $160k + equity",
      reportsTo: "Maria Rossi, Co-founder & CTO",
      summary:
         "Build the parts of Loomra people touch every day: onboarding, balances, transfers and the payment flows behind them.",
      about: [
         "You will work across the product surface — the account, the transfer flow, the card controls — in a codebase small enough that one person can still hold most of it in their head. Most of our work is TypeScript, React and Postgres, with a payments layer that has to be right every single time.",
         "This is a senior individual-contributor role. You will own a problem area end to end, from the first sketch to the alert that fires when it breaks, and you will be one of the people deciding how the next version of the product is shaped.",
      ],
      responsibilities: [
         "Ship features across the account, transfers and cards, from proposal to production.",
         "Design data models and APIs that stay correct when money moves and steps fail halfway.",
         "Work with design and compliance to turn a regulation into a flow people can actually finish.",
         "Improve the parts nobody sees: latency, observability, error budgets and on-call.",
         "Review code, and be the reviewer who asks the question that saves an incident.",
         "Mentor the engineers joining behind you.",
      ],
      requirements: [
         "Five or more years building production web applications, with at least two in a senior role.",
         "Strong TypeScript and React, and a working knowledge of relational databases.",
         "Comfort owning a feature end to end, including its operational side.",
         "The judgement to know when a payment flow needs to be slower and more explicit.",
         "Clear writing. Most decisions here are made in a document before they are made in code.",
      ],
      niceToHave: [
         "Experience with payments, ledgers or banking integrations.",
         "Familiarity with Next.js and server-rendered React.",
         "Exposure to regulated products and the reviews that come with them.",
      ],
   },
   {
      slug: "product-designer",
      title: "Product Designer",
      team: "Design",
      location: "Remote — EU",
      type: "Full-time",
      salary: "$95k – $125k + equity",
      reportsTo: "Jakub Nowak, Head of Design",
      summary:
         "Own the design of the flows where money becomes real: opening an account, sending a transfer, controlling a card.",
      about: [
         "Design at Loomra is a product role, not a decoration role. You will sit in the same conversations as engineering and compliance, and you will be expected to have an opinion about what we build, not only how it looks.",
         "We work in a small design system, ship in weeks rather than quarters, and test with real customers before a flow is considered done.",
      ],
      responsibilities: [
         "Design end-to-end flows for the account, transfers and cards, from rough concept to shipped UI.",
         "Prototype in code or in a tool — whatever answers the question fastest.",
         "Run lightweight research with customers and turn it into decisions.",
         "Extend and maintain the design system alongside engineering.",
         "Write the copy that ships with your designs, and argue for the shorter version.",
         "Keep the product coherent as more people work on it.",
      ],
      requirements: [
         "Four or more years designing digital products, with a portfolio of shipped work.",
         "Fluency in Figma and enough comfort with HTML and CSS to know what is cheap to build.",
         "A clear point of view on interaction detail, typography and motion.",
         "Experience taking a feature from problem statement to production without a hand-off gap.",
         "Strong written communication — design decisions here are documented, not presented once.",
      ],
      niceToHave: [
         "Experience in fintech, banking or another regulated product.",
         "Comfort running usability tests without a researcher.",
         "An interest in editorial and brand design.",
      ],
   },
   {
      slug: "compliance-analyst",
      title: "Compliance Analyst",
      team: "Compliance",
      location: "Lagos, Nigeria",
      type: "Full-time",
      salary: "₦18m – ₦24m + equity",
      reportsTo: "Chinedu Okafor, Head of Compliance",
      summary:
         "Review what the systems flag, investigate what looks wrong, and keep the account safe without making it impossible to use.",
      about: [
         "Compliance here is close to the product. You will review onboarding and transaction alerts, investigate unusual activity, and then tell engineering how to make the next case easier to catch.",
         "The role is based in our Lagos office, with two days a week in person and the rest flexible.",
      ],
      responsibilities: [
         "Review identity verification and onboarding cases, including enhanced due diligence.",
         "Investigate transaction monitoring alerts and document the outcome clearly.",
         "Prepare and file reports where the regulation requires one.",
         "Work with engineering to tune rules and reduce false positives.",
         "Keep procedures current as markets and products change.",
         "Support customer-facing teams with compliance questions.",
      ],
      requirements: [
         "Two or more years in compliance, financial crime or fraud operations.",
         "Working knowledge of KYC, AML and sanctions screening.",
         "Careful, evidence-led writing — your notes may be read years later.",
         "The confidence to stop a payment and explain why.",
         "Based in Lagos, able to work two days a week from the Victoria Island office.",
      ],
      niceToHave: [
         "A relevant certification such as CAMS or ICA.",
         "Experience with a payments or remittance business.",
         "Familiarity with Nigerian and UK regulatory frameworks.",
      ],
   },
   {
      slug: "customer-support-lead",
      title: "Customer Support Lead",
      team: "Operations",
      location: "Lisbon, Portugal",
      type: "Full-time",
      salary: "€48k – €60k + equity",
      reportsTo: "Sofia Almeida, Head of Operations",
      summary:
         "Build the support function people describe as the reason they stayed: fast, human and honest about what went wrong.",
      about: [
         "Support at Loomra is not a cost centre behind a chatbot. It is where we find out what is broken. You will lead a small team, own the quality of every reply, and feed what you learn back into the product.",
         "You will be the first support hire in Lisbon, working with the wider operations team across Lagos and London.",
      ],
      responsibilities: [
         "Lead and coach a team of three to five support specialists.",
         "Own response and resolution targets, and the quality bar behind them.",
         "Handle escalations, including complaints and suspected fraud, to a written resolution.",
         "Turn recurring contacts into product or documentation fixes.",
         "Maintain the help centre and the internal playbooks.",
         "Report weekly on what customers are telling us.",
      ],
      requirements: [
         "Three or more years in customer support, with at least one leading a team.",
         "Excellent written English and a second language — Portuguese, French or German preferred.",
         "Experience with payments, banking or another high-trust product.",
         "Comfort with ambiguity, and the patience to explain the same thing well a hundred times.",
         "Based in Lisbon, able to work from the office three days a week.",
      ],
      niceToHave: [
         "Experience building a support function from scratch.",
         "Familiarity with Zendesk, Intercom or a comparable tool.",
         "An interest in writing help content that people actually read.",
      ],
   },
   {
      slug: "data-engineer",
      title: "Data Engineer",
      team: "Engineering",
      location: "Remote — EU / Africa",
      type: "Full-time",
      salary: "$105k – $135k + equity",
      reportsTo: "Maria Rossi, Co-founder & CTO",
      summary:
         "Make the money legible: reliable pipelines from payment systems into the warehouse, and models the business can trust.",
      about: [
         "Every transfer produces events across several systems, and the truth is only visible once they are joined. You will own that pipeline end to end — ingestion, modelling, quality checks and the dashboards built on top of it.",
         "You will work closely with finance, compliance and product, and you will be the person who notices when a number stops making sense.",
      ],
      responsibilities: [
         "Build and maintain batch and streaming pipelines from payment and banking partners.",
         "Model the warehouse around clear business concepts: customers, balances, transfers, fees.",
         "Put data quality checks in place and own the alerts when they fire.",
         "Support reporting for finance, compliance and regulatory returns.",
         "Keep the warehouse fast and cost-predictable as volume grows.",
         "Document the lineage well enough that someone else can debug it.",
      ],
      requirements: [
         "Three or more years in data engineering or analytics engineering.",
         "Strong SQL and Python, and experience with a modern warehouse such as BigQuery, Snowflake or Postgres.",
         "Experience with orchestration tools and the discipline of idempotent pipelines.",
         "A habit of validating numbers before publishing them.",
         "Clear writing about data models and their assumptions.",
      ],
      niceToHave: [
         "Experience with payments, ledgers or financial reporting.",
         "Streaming experience with Kafka or a comparable system.",
         "dbt and a testing-first approach to transformation.",
      ],
   },
   {
      slug: "payments-partnerships-manager",
      title: "Payments Partnerships Manager",
      team: "Business",
      location: "London, UK",
      type: "Full-time",
      salary: "£65k – £85k + equity",
      reportsTo: "Raheem Orekoya, Co-founder & CEO",
      summary:
         "Open the local rails that make transfers fast: find the partners, negotiate the terms, and keep them working.",
      about: [
         "Loomra reaches 100+ countries by connecting to local payment systems rather than routing everything through correspondent banks. That network is built one partner at a time, and this role owns the next set of them.",
         "You will work across product, compliance and finance, and you will be measured on coverage, cost and reliability rather than the number of contracts signed.",
      ],
      responsibilities: [
         "Identify and sign payment partners in priority corridors across Africa, Europe and Asia.",
         "Negotiate pricing, settlement terms and service levels.",
         "Work with compliance to complete partner due diligence and ongoing reviews.",
         "Own the commercial relationship after launch, including escalation when routes fail.",
         "Track corridor cost and success rates, and propose where to expand next.",
         "Feed partner constraints back into the product roadmap.",
      ],
      requirements: [
         "Four or more years in partnerships, business development or treasury at a payments or fintech company.",
         "A working understanding of local payment rails, settlement and FX.",
         "Experience negotiating commercial terms with banks or payment providers.",
         "The persistence to follow a partner through a long compliance process.",
         "Based in London, comfortable travelling several times a quarter.",
      ],
      niceToHave: [
         "Existing relationships with payment providers in West or East Africa.",
         "A second language — French or Portuguese preferred.",
         "Experience launching a corridor from first contact to live traffic.",
      ],
   },
];

export function getRole(slug: string) {
   return ROLES.find((role) => role.slug === slug);
}
