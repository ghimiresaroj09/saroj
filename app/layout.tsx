import type { Metadata, Viewport } from "next";
import { DM_Sans, Caveat } from "next/font/google";
import Script from "next/script";
import { GA_ID } from "@/lib/data";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_NAME, SITE_URL, TWITTER_HANDLE, KEYWORDS } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: `${SITE_NAME} Portfolio`,
  category: "technology",
  classification: "Quality Assurance Engineering Portfolio",
  robots: { 
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    } 
  },
  manifest: "/manifest.json",
  appleWebApp: { title: SITE_NAME, capable: true, statusBarStyle: "default" },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${SITE_NAME} - QA Engineer Portfolio`,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [{ 
      url: DEFAULT_OG_IMAGE, 
      width: 1200, 
      height: 630, 
      alt: `${SITE_NAME} - QA Engineer & Test Automation Specialist`,
      type: "image/png",
    }],
  },
  twitter: { 
    card: "summary_large_image", 
    site: TWITTER_HANDLE, 
    creator: TWITTER_HANDLE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${caveat.variable}`}>
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="author" content={SITE_NAME} />
        <meta name="geo.region" content="NP-BA" />
        <meta name="geo.placename" content="Kathmandu" />
        <meta name="geo.position" content="27.7172;85.3240" />
        <meta name="ICBM" content="27.7172, 85.3240" />
      </head>
      <body>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', {
  page_path: window.location.pathname,
  send_page_view: true
});`}
        </Script>
      </body>
    </html>
  );
}
