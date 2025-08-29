import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import AnimatedBackground from "@/components/AnimatedBackground";
import SiteFooter from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-poppins",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-jakarta",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Affinity",
  description: "Il test che rivela il tuo profilo nelle relazioni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${poppins.variable} ${jakarta.variable} ${roboto.variable}`}
    >
      <body className="bg-bg text-fg antialiased">
        <AnimatedBackground />
        <Header />
        <main className="pt-16 min-h-[calc(100vh-4rem)]">{children}</main>
        <SiteFooter />
        <Script src="https://gumroad.com/js/gumroad.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
