import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
 codex/setup-next.js-14-project-with-typescript-vnkk5u
=======
import Footer from "@/components/Footer";
 main

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="it" className={inter.variable}>
      <body className="bg-bg text-fg antialiased">
        <Header />
 codex/setup-next.js-14-project-with-typescript-vnkk5u
        <main className="pt-16 min-h-[calc(100vh-4rem)]">{children}</main>

        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
 main
      </body>
    </html>
  );
}
