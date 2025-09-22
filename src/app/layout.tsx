import type { Metadata } from "next";
import Script from "next/script";
import {
  Poppins,
  Plus_Jakarta_Sans,
  Roboto,
  Playfair_Display,
  Inter,
} from "next/font/google";
import dynamic from "next/dynamic";
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

const BackgroundGradient = dynamic(
  () => import("@/components/BackgroundGradient"),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Affinity",
  description: "Shader background — red/black universe",
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
      <body className="text-fg antialiased overflow-x-hidden">
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
        <BackgroundGradient />
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
