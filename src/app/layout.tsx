import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="it"
      className={`${poppins.variable} ${jakarta.variable} ${roboto.variable}`}
    >
      <head>
        {gtmId ? (
          <Script id="gtm-base" strategy="afterInteractive">
            {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        ) : null}
      </head>
      <body className="bg-bg text-fg antialiased overflow-x-hidden">
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <Header />
        <main className="min-h-[calc(100vh-4rem)] pt-16 overflow-x-hidden">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
