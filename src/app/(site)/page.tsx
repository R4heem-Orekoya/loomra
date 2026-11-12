import Capabilities from "@/sections/capabilities";
import ClosingCta from "@/sections/closing-cta";
import Faq from "@/sections/faq";
import FeesComparison from "@/sections/fees-comparison";
import GetPaid from "@/sections/get-paid";
import Hero from "@/sections/hero";
import LogoWall from "@/sections/logo-wall";
import SecurityTrust from "@/sections/security-trust";
import Testimonials from "@/sections/testimonials";
import UsedBy from "@/sections/used-by";

export default function Home() {
   return (
      <>
         <Hero />
         <LogoWall />

         <FeesComparison />

         <Capabilities />

         <GetPaid />

         <SecurityTrust />

         <Testimonials />

         <UsedBy />

         <Faq />

         <ClosingCta />
      </>
   );
}
