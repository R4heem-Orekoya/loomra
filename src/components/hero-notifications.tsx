import Logo from "./logo";

type Notif = {
   kind: "in" | "out";
   title: string;
   amount: string;
   rest: string;
   time: string;
   position: string;
   visibility: string;
   delay: number;
   floatDuration: number;
};

const notifications: Notif[] = [
   {
      kind: "in",
      title: "Payment received",
      amount: "$2,450.00",
      rest: "from Studio Nord, Berlin",
      time: "now",
      position: "left-[3%] top-[14%]",
      visibility: "hidden xl:block",
      delay: 0.6,
      floatDuration: 6,
   },
   {
      kind: "out",
      title: "Transfer sent",
      amount: "₦1,250,000",
      rest: "to Amara in London",
      time: "2m ago",
      position: "right-[3%] top-[21%]",
      visibility: "hidden xl:block",
      delay: 0.9,
      floatDuration: 7,
   },
   {
      kind: "in",
      title: "Payment received",
      amount: "€1,800.00",
      rest: "from Atelier Lune, Paris",
      time: "5m ago",
      position: "left-[6%] top-[40%]",
      visibility: "hidden md:block",
      delay: 1.2,
      floatDuration: 6.5,
   },
   {
      kind: "in",
      title: "Transfer complete",
      amount: "$600.00",
      rest: "arrived in Lagos in 4s",
      time: "now",
      position: "right-[5%] top-[47%]",
      visibility: "hidden md:block",
      delay: 1.5,
      floatDuration: 7.5,
   },
   {
      kind: "out",
      title: "Transfer sent",
      amount: "£320.00",
      rest: "to Tunde in Manchester",
      time: "9m ago",
      position: "left-[17%] top-[60%]",
      visibility: "hidden lg:block",
      delay: 1.8,
      floatDuration: 6.8,
   },
   {
      kind: "in",
      title: "Payment received",
      amount: "$980.00",
      rest: "from Kite Studio, Austin",
      time: "12m ago",
      position: "right-[15%] top-[66%]",
      visibility: "hidden lg:block",
      delay: 2.1,
      floatDuration: 7.2,
   },
];

function NotificationCard({ n }: { n: Notif }) {
   return (
      <div className={`absolute ${n.visibility} ${n.position}`}>
         <div className="notif-in" style={{ animationDelay: `${n.delay}s` }}>
            <div
               className="float-y"
               style={{
                  animationDuration: `${n.floatDuration}s`,
                  animationDelay: `${n.delay}s`,
               }}
            >
               <div className="flex w-72 border items-start gap-3 rounded-xl p-2.5 text-left shadow-[0_10px_40px_-8px_rgba(252,78,30,0.3)] backdrop-blur-xl">
                  <div className="grid size-8.5 [&_svg]:size-5.5 shrink-0 place-items-center rounded-md bg-foreground">
                     <Logo color="#fff" />
                  </div>
                  <div className="min-w-0 flex-1">
                     <div className="flex items-baseline justify-between gap-2">
                        <p className="text-[13px] font-medium tracking-tight text-[#1A1411]">
                           {n.title}
                        </p>
                        <span className="text-[11px] text-neutral-500">
                           {n.time}
                        </span>
                     </div>
                     <p className="text-[13px] leading-snug tracking-tight text-neutral-600">
                        <span className="font-semibold text-[#E5440F]">
                           {n.amount}
                        </span>{" "}
                        {n.rest}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default function HeroNotifications() {
   return (
      <div
         aria-hidden="true"
         className="pointer-events-none absolute inset-0 z-20"
      >
         {notifications.map((n) => (
            <NotificationCard key={n.title + n.amount} n={n} />
         ))}
      </div>
   );
}
