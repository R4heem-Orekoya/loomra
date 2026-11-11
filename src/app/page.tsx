import ClosingCta from "@/components/closing-cta";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SecurityTrust from "@/components/security-trust";
import Testimonials from "@/components/testimonials";
import Capabilities from "@/sections/capabilities";
import FeesComparison from "@/sections/fees-comparison";
import GetPaid from "@/sections/get-paid";
import Hero from "@/sections/hero";
import LogoWall from "@/sections/logo-wall";
import UsedBy from "@/sections/used-by";

export default function Home() {
   return (
      <>
         <Navbar />
         <main id="top" className="flex min-h-[calc(100dvh-40px)] flex-col">
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
         </main>
         <Footer />
      </>
   );
}
