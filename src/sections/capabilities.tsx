"use client";

import {
   ArrowLeftRightIcon,
   CheckmarkCircle02Icon,
   CreditCardIcon,
   CustomerSupportIcon,
   Home01Icon,
   LayoutAlignLeftIcon,
   MoneySend01Icon,
   NfcIcon,
   Search01Icon,
   Settings01Icon,
   Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { type ReactNode, useState } from "react";
import { CreditCardServiceProvider } from "@/components/kibo-ui/credit-card";
import { Tabs, TabsList, TabsTrigger } from "@/components/motion/tabs";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { formatUsd, transferFee } from "@/lib/fees";
import { cn } from "@/lib/utils";

type Capability = {
   title: string;
   copy: string;
   icon: typeof Wallet01Icon;
};

type NavItem = {
   label: string;
   icon: typeof Wallet01Icon;
};

const CAPABILITIES: Capability[] = [
   {
      title: "Hold",
      copy: "Keep dollars, euros, pounds and more side by side — no conversion until you need it.",
      icon: Wallet01Icon,
   },
   {
      title: "Send",
      copy: "Pay a client, a contractor or family in their local currency. Most transfers land in seconds.",
      icon: MoneySend01Icon,
   },
   {
      title: "Spend",
      copy: "Use your card in 170+ countries, paid straight from any balance you hold.",
      icon: CreditCardIcon,
   },
];

const SCREENS = [HoldScreen, SendScreen, SpendScreen];

/** The example transfer shown on the send screen. */
const SEND_AMOUNT = 1240;
const SEND_FEE = formatUsd(transferFee(SEND_AMOUNT));

const SCREEN_LABELS = [
   "The Loomra dashboard, showing multi-currency balances in US dollars, euros, pounds and naira",
   "The Loomra send screen, with a recipient, amount and arrival time",
   "The Loomra card screen, showing a virtual debit card and recent card payments",
];

const TAB_ITEMS = [
   {
      value: "accounts",
      label: "Global accounts",
      image: "/bg-1.png",
      screen: 0,
      heading: "Hold funds in any currency",
      description:
         "Hold dollars, euros, pounds and naira side by side. Every balance and payment sits in one view, and nothing converts until you decide.",
   },
   {
      value: "send",
      label: "Send money",
      image: "/bg-2.png",
      screen: 1,
      heading: "Send money in seconds",
      description:
         "Pay a client, contractor or family in their local currency. Pick a recipient, see the rate and fee up front, and most transfers land in seconds.",
   },
   {
      value: "cards",
      label: "Virtual cards",
      image: "/bg-3.png",
      screen: 2,
      heading: "Spend from any balance",
      description:
         "Spend from any balance with a virtual card. Freeze it instantly, follow subscriptions, and pay in 170+ countries.",
   },
] as const;

type TabValue = (typeof TAB_ITEMS)[number]["value"];

const BALANCES = [
   { code: "USD", flag: "us", amount: "$6,420.00" },
   { code: "EUR", flag: "eu", amount: "€3,180.00" },
   { code: "GBP", flag: "gb", amount: "£1,960.00" },
   { code: "NGN", flag: "ng", amount: "₦4,190,000" },
];

const NAV: NavItem[] = [
   { label: "Home", icon: Home01Icon },
   { label: "Balances", icon: Wallet01Icon },
   { label: "Convert", icon: ArrowLeftRightIcon },
   { label: "Send", icon: MoneySend01Icon },
   { label: "Cards", icon: CreditCardIcon },
];

const NAV_FOR_CAPABILITY = ["Balances", "Send", "Cards"];

const CARD = "rounded-lg border border-border/80 bg-secondary/50";

const ACCOUNT_NAV: NavItem[] = [
   { label: "Support", icon: CustomerSupportIcon },
   { label: "Settings", icon: Settings01Icon },
];

type Brand = "airbnb" | "spotify" | "figma";

type Activity = {
   title: string;
   meta: string;
   amount: string;
   status: string;
   brand?: Brand;
   avatar?: string;
};

const ACTIVITY: Activity[] = [
   {
      title: "Received from Maria Rossi",
      avatar: "Maria Rossi",
      meta: "12 Oct 2026, 09:41",
      amount: "+€420.00",
      status: "Completed",
   },
   {
      title: "Sent to Kite Studio",
      avatar: "Kite Studio",
      meta: "11 Oct 2026, 16:08",
      amount: "-$1,850.00",
      status: "Completed",
   },
   {
      title: "Received from Chinedu Okafor",
      avatar: "Chinedu Okafor",
      meta: "10 Oct 2026, 07:24",
      amount: "+₦380,000",
      status: "Completed",
   },
   {
      title: "Sent to Amara Okafor",
      avatar: "Amara Okafor",
      meta: "08 Oct 2026, 12:02",
      amount: "-$120.00",
      status: "Pending",
   },
];

const CARD_ACTIVITY: Activity[] = [
   {
      title: "Airbnb",
      meta: "12 Oct 2026",
      amount: "-€212.40",
      status: "Completed",
      brand: "airbnb",
   },
   {
      title: "Spotify",
      meta: "11 Oct 2026",
      amount: "-€10.99",
      status: "Completed",
      brand: "spotify",
   },
   {
      title: "Figma",
      meta: "08 Oct 2026",
      amount: "-$15.00",
      status: "Completed",
      brand: "figma",
   },
];

const RECIPIENTS = [
   { name: "Amara Okafor", meta: "Lagos, Nigeria", seed: "amara-okafor" },
   { name: "Maria Rossi", meta: "Milan, Italy", seed: "maria-rossi" },
   { name: "Chinedu Okafor", meta: "Abuja, Nigeria", seed: "chinedu-okafor" },
];

export default function Capabilities() {
   const [tab, setTab] = useState<TabValue>("accounts");
   const activeIndex = TAB_ITEMS.findIndex((item) => item.value === tab);
   const activeTab = TAB_ITEMS[activeIndex] ?? TAB_ITEMS[0];

   return (
      <section
         id="capabilities"
         aria-labelledby="capabilities-heading"
         className="relative scroll-mt-24 overflow-x-clip py-24 lg:py-36"
      >
         <div className="mx-auto w-full px-6">
            <header className="flex max-w-5xl mx-auto items-end justify-between gap-12">
               <div className="grid gap-12">
                  <h2
                     id="capabilities-heading"
                     className="mt-3 text-balance font-heading text-2xl font-medium tracking-tighter sm:text-3xl lg:text-4xl"
                  >
                     Hold, convert and send in one place.
                  </h2>

                  <Tabs
                     value={tab}
                     onValueChange={(value) => setTab(value as TabValue)}
                     variant="pill"
                  >
                     <TabsList className="border bg-secondary">
                        {TAB_ITEMS.map((item) => (
                           <TabsTrigger
                              key={item.value}
                              value={item.value}
                              className="text-xs cursor-pointer"
                           >
                              {item.label}
                           </TabsTrigger>
                        ))}
                     </TabsList>
                  </Tabs>
               </div>

               <div className="flex flex-col justify-between gap-4">
                  <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     Loomra is a multi-currency account, not a one-off transfer.
                     Keep the currencies you earn, move between them at the real
                     rate, and send money wherever it needs to go.
                  </p>

                  <Button className="max-w-fit " size="lg" variant="outline">
                     Learn more
                  </Button>
               </div>
            </header>

            <div className="relative mx-auto mt-20 grid aspect-5/7 w-full max-w-6xl place-items-center overflow-hidden rounded-xl border border-border/80 bg-secondary shadow-[0_50px_50px_-70px_rgba(0,0,0,0.5)] sm:aspect-auto sm:py-[6%]">
               {TAB_ITEMS.map((item, index) => (
                  <Image
                     key={item.value}
                     src={item.image}
                     alt=""
                     aria-hidden="true"
                     fill
                     sizes="(max-width: 1280px) 100vw, 1152px"
                     className={cn(
                        "object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
                        index === activeIndex
                           ? "scale-100 opacity-100"
                           : "scale-105 opacity-0",
                     )}
                  />
               ))}

               <div className="absolute inset-0 bg-neutral-950/30 backdrop-blur-sm" />
               <div className="absolute inset-0 bg-linear-to-t from-neutral-950/40 via-transparent to-neutral-950/5" />

               <BrowserMock
                  active={activeTab.screen}
                  className="relative z-10 h-[88%] w-[88%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] sm:aspect-16/10 sm:h-auto sm:min-h-[540px] sm:w-[92%] lg:max-w-[1000px] lg:w-[85%]"
               />
            </div>

            <div
               key={activeTab.value}
               className="animate-in fade-in-0 slide-in-from-bottom-1 mx-auto mt-12 flex max-w-5xl flex-col items-start gap-4 duration-300 sm:flex-row sm:justify-between sm:gap-12"
            >
               <span className="font-heading text-2xl font-medium tracking-tighter">
                  {activeTab.heading}
               </span>

               <div className="flex flex-1 sm:justify-center">
                  <p className="max-w-sm leading-snug text-pretty text-muted-foreground">
                     {activeTab.description}
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

function BrowserMock({
   active,
   className,
}: {
   active: number;
   className?: string;
}) {
   return (
      <div
         role="img"
         aria-label={SCREEN_LABELS[active]}
         className={cn(
            "flex flex-col overflow-hidden rounded-lg border border-border/80 bg-background",
            className,
         )}
      >
         {/* <WindowBar /> */}

         <div className="flex min-h-0 flex-1">
            <Sidebar activeLabel={NAV_FOR_CAPABILITY[active]} />

            <div className="relative min-w-0 flex-1">
               {SCREENS.map((Screen, index) => (
                  <div
                     key={SCREEN_LABELS[index]}
                     className={cn(
                        "absolute inset-0 transition-[opacity,scale,translate,filter] duration-500 ease-out motion-reduce:transition-none",
                        index === active
                           ? "scale-100 opacity-100 blur-0"
                           : "pointer-events-none translate-y-2 scale-[0.94] opacity-0 blur-[6px]",
                     )}
                  >
                     <Screen />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

function Sidebar({ activeLabel }: { activeLabel: string }) {
   return (
      <aside className="hidden w-[200px] shrink-0 flex-col border-r border-border/80 bg-secondary/40 px-2 py-2 sm:flex">
         <div className="flex items-center justify-between gap-2 pl-1">
            <span className="font-heading text-sm font-semibold tracking-tighter">
               Loomra
            </span>

            <div className="flex items-center gap-1.5">
               <HugeiconsIcon
                  icon={Search01Icon}
                  className="size-3 cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-foreground"
               />
               <HugeiconsIcon
                  icon={LayoutAlignLeftIcon}
                  className="size-3 cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-foreground"
               />
            </div>
         </div>

         <ul className="space-y-0.5 mt-4">
            {NAV.map((item) => (
               <SidebarItem
                  key={item.label}
                  item={item}
                  active={item.label === activeLabel}
               />
            ))}
         </ul>

         <ul className="mt-auto space-y-0.5 pt-2">
            {ACCOUNT_NAV.map((item) => (
               <SidebarItem key={item.label} item={item} />
            ))}
         </ul>

         <div className="mt-1 flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-150 hover:bg-secondary">
            <UserAvatar name="Raheem" className="size-7 shrink-0" />
            <div className="min-w-0">
               <p className="-mb-0.5 truncate text-xs font-medium">
                  Raheem Orekoya
               </p>
               <p className="truncate text-[10px] text-muted-foreground">
                  Personal account
               </p>
            </div>
         </div>
      </aside>
   );
}

function SidebarItem({
   item,
   active = false,
}: {
   item: NavItem;
   active?: boolean;
}) {
   return (
      <li>
         <span
            className={cn(
               "group flex cursor-pointer items-center gap-1.5 rounded-sm px-2 py-1 text-[11px] transition-colors duration-150",
               active
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:bg-secondary",
            )}
         >
            <HugeiconsIcon
               icon={item.icon}
               strokeWidth={1.8}
               className={cn(
                  "size-3.5 shrink-0 transition-colors duration-150",
                  active
                     ? "text-[#0D5C3A] dark:text-emerald-400"
                     : "text-muted-foreground/70 group-hover:text-foreground",
               )}
            />
            {item.label}
         </span>
      </li>
   );
}

/* ------------------------------ Screens ------------------------------ */

function ScreenShell({ children }: { children: ReactNode }) {
   return (
      <div className="flex h-full flex-col overflow-hidden px-4 pt-5 pb-4 sm:px-6 sm:pt-12 sm:pb-6">
         <div className="mx-auto flex h-full w-full max-w-[450px] flex-col">
            {children}
         </div>
      </div>
   );
}

function HoldScreen() {
   return (
      <ScreenShell>
         <div className="flex items-start justify-between gap-3">
            <div>
               <p className="text-[10px] font-medium text-muted-foreground">
                  Total balance
               </p>
               <p className="mt-0.5 font-sans text-2xl font-medium tracking-tighter tabular-nums">
                  $15,090.32
               </p>
               <p className="text-[10px] text-muted-foreground">
                  Across 4 currencies · 2 accounts
               </p>
            </div>

            <span className="mt-0.5 shrink-0 rounded-full bg-blue-600/10 px-2 py-0.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">
               4 currencies
            </span>
         </div>

         <div className="mt-4 grid grid-cols-2 gap-1.5 sm:mt-5 sm:gap-2">
            {BALANCES.map((balance) => (
               <div
                  key={balance.code}
                  className={cn(CARD, "flex items-center gap-2 px-2 py-1.5")}
               >
                  <Image
                     src={`/flags/${balance.flag}.svg`}
                     alt=""
                     width={20}
                     height={20}
                     unoptimized
                     className="size-6 shrink-0 rounded-full border border-border/70 object-cover"
                  />
                  <div className="min-w-0">
                     <p className="text-[9px] font-medium leading-none text-muted-foreground">
                        {balance.code}
                     </p>
                     <p className="mt-1 truncate font-sans text-[11px] font-semibold leading-none tracking-tighter tabular-nums">
                        {balance.amount}
                     </p>
                  </div>
               </div>
            ))}
         </div>

         <div
            className={cn(
               CARD,
               "mt-3 flex items-center justify-between px-2.5 py-1.5 sm:mt-2",
            )}
         >
            <div className="flex items-center gap-2">
               <span className="flex items-center">
                  <Image
                     src="/flags/us.svg"
                     alt=""
                     width={16}
                     height={16}
                     unoptimized
                     className="size-6 rounded-full border-2 border-background object-cover"
                  />
                  <Image
                     src="/flags/ng.svg"
                     alt=""
                     width={16}
                     height={16}
                     unoptimized
                     className="-ml-2 size-6 rounded-full border-2 border-background object-cover"
                  />
               </span>
               <span className="text-[10px] font-medium text-muted-foreground">
                  USD {"->"} NGN
               </span>
            </div>
            <span className="text-[10px] font-medium tabular-nums">
               1 USD = 1,524.19 NGN
            </span>
         </div>

         <ActivityList items={ACTIVITY} title="Transactions" />
      </ScreenShell>
   );
}

function SendScreen() {
   return (
      <ScreenShell>
         <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-tight">Send money</p>
            <span className="text-[11px] font-medium tracking-tighter text-blue-600/80">
               History
            </span>
         </div>

         <div
            className={cn(
               CARD,
               "mt-4 flex items-center gap-2 px-2 py-1.5 sm:mt-5",
            )}
         >
            <UserAvatar name="Amara Okafor" className="size-8 shrink-0" />
            <div className="min-w-0 flex-1">
               <p className="truncate text-xs font-medium tracking-tighter">
                  Amara Okafor
               </p>
               <p className="truncate text-[10px] text-muted-foreground">
                  Lagos, Nigeria
               </p>
            </div>
            <HugeiconsIcon
               icon={CheckmarkCircle02Icon}
               className="size-5 shrink-0 fill-green-600 text-white"
               strokeWidth={1.4}
            />
         </div>

         <div className={cn(CARD, "mt-2 px-3 py-2.5")}>
            <div className="flex items-center justify-between">
               <span className="text-[10px] font-medium text-muted-foreground">
                  You send
               </span>
               <span className="text-[10px] font-medium text-muted-foreground">
                  USD
               </span>
            </div>
            <p className="mt-1 font-sans text-xl font-medium tracking-tighter tabular-nums">
               $1,240.00
            </p>
            <div className="mt-2 flex items-center justify-between text-[10px]">
               <span className="text-muted-foreground">
                  Fee{" "}
                  <span className="font-medium text-green-600 dark:text-green-400">
                     {SEND_FEE}
                  </span>
               </span>
               <span className="text-muted-foreground">
                  Balance{" "}
                  <span className="font-medium tabular-nums text-foreground">
                     $8,420.00
                  </span>
               </span>
            </div>
         </div>

         <div className="mt-2 hidden grid-cols-2 gap-1.5 lg:grid lg:mt-3 lg:gap-2">
            <div className={cn(CARD, "px-2 py-1.5")}>
               <p className="text-[10px] font-medium text-muted-foreground">
                  They receive
               </p>
               <p className="mt-1 font-sans text-xs font-semibold tracking-tighter tabular-nums">
                  ₦1,890,000
               </p>
            </div>
            <div className={cn(CARD, "px-2 py-1.5")}>
               <p className="text-[10px] font-medium text-muted-foreground">
                  Arrives
               </p>
               <p className="mt-1 font-sans text-xs font-semibold tracking-tighter">
                  In seconds
               </p>
            </div>
         </div>

         <div className="mt-4 flex min-h-0 flex-1 flex-col sm:mt-8">
            <div className="flex items-center justify-between">
               <span className="text-xs font-medium">Recent recipients</span>
               <span className="text-[11px] font-medium tracking-tighter text-blue-600/80">
                  See all
               </span>
            </div>

            <ul className="mt-3 flex min-h-0 flex-col gap-2 overflow-hidden [&>li:nth-child(n+3)]:hidden sm:[&>li:nth-child(n+3)]:flex max-[383px]:[&>li:nth-child(n+2)]:hidden sm:mt-4 sm:gap-2">
               {RECIPIENTS.map((recipient) => (
                  <li
                     key={recipient.seed}
                     className={cn(CARD, "flex items-center gap-2 px-2 py-1.5")}
                  >
                     <UserAvatar
                        name={recipient.name}
                        className="size-7 shrink-0"
                     />
                     <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium tracking-tighter">
                           {recipient.name}
                        </p>
                        <p className="truncate text-[10px] text-muted-foreground">
                           {recipient.meta}
                        </p>
                     </div>
                     <span className="shrink-0 text-[10px] font-medium text-muted-foreground">
                        Send
                     </span>
                  </li>
               ))}
            </ul>
         </div>

         <div className="mt-4 rounded-full bg-foreground py-2.5 text-center text-xs font-medium tracking-tight text-background sm:mt-5">
            Send money
         </div>
      </ScreenShell>
   );
}

function SpendScreen() {
   return (
      <ScreenShell>
         <div className="flex items-center justify-between">
            <p className="text-sm font-medium tracking-tight">Card</p>
            <span className="rounded-full bg-green-600/10 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:text-green-400">
               Active
            </span>
         </div>

         <div className="relative mt-4 flex aspect-[1.586] w-full max-w-[225px] flex-col justify-between overflow-hidden rounded-xl bg-foreground p-3 text-white shadow-2xl sm:mt-5 sm:max-w-[260px]">
            <div className="pointer-events-none absolute -bottom-14 -left-8 size-28 rounded-full bg-rose-500/40 blur-2xl" />

            <div className="relative flex items-center justify-between">
               <span className="font-heading text-sm font-semibold tracking-tighter">
                  Loomra
               </span>
               <span className="text-[8px] font-medium tracking-wide text-white/60">
                  VIRTUAL
               </span>
            </div>

            <HugeiconsIcon
               icon={NfcIcon}
               className="relative size-5 text-white/70"
            />

            <div className="relative">
               <p className="font-numeric text-[11px] tracking-[0.14em] whitespace-nowrap text-white/80">
                  •••• •••• •••• 4821
               </p>

               <div className="mt-1.5 flex items-end justify-between">
                  <div>
                     <p className="text-[9px] font-semibold tracking-[0.08em] text-white/90 uppercase">
                        Amara Okafor
                     </p>
                     <p className="mt-0.5 text-[8px] tracking-[0.12em] text-white/50">
                        09/29
                     </p>
                  </div>
                  <CreditCardServiceProvider
                     className="brightness-0 invert scale-150"
                     format="logo"
                     type="Visa"
                  />
               </div>
            </div>
         </div>

         <div
            className={cn(
               CARD,
               "mt-3 flex items-center justify-between px-2.5 py-2 sm:mt-4",
            )}
         >
            <div>
               <p className="text-[10px] font-medium text-muted-foreground">
                  Card balance
               </p>
               <p className="font-sans text-sm font-semibold tracking-tighter tabular-nums">
                  $6,420.00
               </p>
            </div>
            <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium text-background">
               Freeze
            </span>
         </div>

         <ActivityList items={CARD_ACTIVITY} title="Card payments" />
      </ScreenShell>
   );
}

function ActivityList({ items, title }: { items: Activity[]; title: string }) {
   return (
      <div className="mt-4 flex min-h-0 flex-1 flex-col sm:mt-8">
         <div className="flex items-center justify-between">
            <span className="text-xs font-medium">{title}</span>
            <span className="text-[11px] font-medium tracking-tighter text-blue-600/80 dark:text-blue-400/80">
               See all
            </span>
         </div>

         <ul className="mt-3 flex min-h-0 flex-col gap-2 overflow-hidden [&>li:nth-child(n+3)]:hidden sm:[&>li:nth-child(n+3)]:flex max-[383px]:[&>li:nth-child(n+2)]:hidden sm:mt-4 sm:gap-2">
            {items.map((item) => (
               <li
                  key={item.title}
                  className={cn(CARD, "flex items-center gap-2 px-2 py-1.5")}
               >
                  {item.brand ? (
                     <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border/60 bg-card">
                        <BrandMark brand={item.brand} />
                     </span>
                  ) : (
                     <UserAvatar
                        name={item.avatar ?? item.title}
                        className="size-7 shrink-0"
                     />
                  )}

                  <div className="min-w-0 flex-1">
                     <p className="truncate text-xs font-medium tracking-tighter">
                        {item.title}
                     </p>
                     <p className="truncate text-[10px] text-muted-foreground">
                        {item.meta}
                     </p>
                  </div>

                  <div className="shrink-0 text-right">
                     <p
                        className={cn(
                           "text-[11px] font-medium tabular-nums tracking-tighter",
                           item.amount.startsWith("+")
                              ? "text-green-600 dark:text-green-400"
                              : "text-rose-600 dark:text-rose-400",
                        )}
                     >
                        {item.amount}
                     </p>
                     <p
                        className={cn(
                           "text-[10px]",
                           item.status === "Pending"
                              ? "text-amber-600 dark:text-amber-400"
                              : "text-muted-foreground",
                        )}
                     >
                        {item.status}
                     </p>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
}

function BrandMark({ brand }: { brand: Brand }) {
   if (brand === "airbnb") {
      return (
         <svg
            viewBox="0 0 1991.3 2143.2"
            aria-hidden="true"
            className="size-3.5"
         >
            <path
               d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
               fill="#e0565b"
            />
         </svg>
      );
   }

   if (brand === "spotify") {
      return (
         <svg viewBox="0 0 256 256" aria-hidden="true" className="size-4">
            <path
               d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128 70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007 7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276 3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289-34.406-21.148-86.853-27.273-127.548-14.92-5.278 1.594-10.852-1.38-12.454-6.649-1.59-5.278 1.386-10.842 6.655-12.446 46.485-14.106 104.275-7.273 143.787 17.007 4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
               fill="#1ED760"
            />
         </svg>
      );
   }

   return (
      <svg
         viewBox="0 0 54 80"
         fill="none"
         aria-hidden="true"
         className="h-4 w-auto"
      >
         <g clipPath="url(#loomra-figma-clip)">
            <path
               d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
               fill="#0ACF83"
            />
            <path
               d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
               fill="#A259FF"
            />
            <path
               d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
               fill="#F24E1E"
            />
            <path
               d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
               fill="#FF7262"
            />
            <path
               d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
               fill="#1ABCFE"
            />
         </g>
         <defs>
            <clipPath id="loomra-figma-clip">
               <rect width="53.3333" height="80" fill="white" />
            </clipPath>
         </defs>
      </svg>
   );
}
