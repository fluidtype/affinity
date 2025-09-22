import type { Metadata } from "next";
import Script from "next/script";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Roboto,
  Playfair_Display,
  Inter,
} from "next/font/google";
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
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
      className={`${poppins.variable} ${jakarta.variable} ${roboto.variable} ${playfair.variable} ${inter.variable}`}
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
        {/* BG globale fisso, non interfere con lo scroll del body */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,45,45,0.08) 0%, rgba(5,5,6,0) 70%), url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/></filter><rect width='100%' height='100%' filter='url(%23g)' opacity='0.15'/></svg>\")",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        />
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
