import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});

const BackgroundGradient = dynamic(
  () => import("@/components/BackgroundGradient"),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Affinity",
  description: "ShaderGradient waterPlane background",
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
      className={`h-full ${inter.variable} ${manrope.variable} ${poppins.variable}`}
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
      <body className="flex min-h-full flex-col overflow-x-hidden text-fg antialiased">
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
        <div className="relative z-10">
          <Header />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
