import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const instrumentSans = Instrument_Sans({
   variable: "--font-heading",
   subsets: ["latin"],
});

// Tabular, unambiguous numerals for the money UI.
const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
   title: "Loomra — Money, Without Borders",
   description:
      "Hold 40+ currencies, convert at the real rate, send money to 100+ countries and spend online with a virtual card.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
   return (
      <html
         lang="en"
         className={cn(
            "h-full",
            "antialiased tracking-tight",
            inter.variable,
            instrumentSans.variable,
            geistMono.variable,
         )}
      >
         <body className="min-h-full flex flex-col">
            <SmoothScroll>{children}</SmoothScroll>
         </body>
      </html>
   );
}
