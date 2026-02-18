
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google"; // Use installed fonts
import "./globals.css";
import StructuredData from "../components/StructuredData";
import { getSiteSettings } from "@/utils/content";
import Script from 'next/script';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  const siteName = settings?.site_name || "Mennai Farms";
  const description = settings?.description || "Premium Pineapples from Ghana";
  const logo = settings?.logo_url || "https://www.mennaifarms.com/logo.png";

  return {
    metadataBase: new URL('https://www.mennaifarms.com'),
    title: {
      default: `${siteName} - Premium Pineapples from Ghana`,
      template: `%s | ${siteName}`
    },
    description: description,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteName,
      title: `${siteName} - Premium Pineapples from Ghana`,
      description: description,
      images: [{ url: logo }],
    },
    icons: {
      icon: logo,
    }
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const theme = settings?.theme_colors as { primary: string; secondary: string } | undefined;

  // We can inject CSS variables for dynamic theming here
  // Note: Since this is server-side, we inject them into style tag or body style if possible
  // React style prop on body is easier.
  const style = theme ? {
    '--primary-color': theme.primary,
    '--secondary-color': theme.secondary,
  } as React.CSSProperties : {};

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
        style={style}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "AgriculturalBusiness",
            "@id": "https://www.mennaifarms.com/#organization",
            name: settings?.site_name || "Mennai Farms",
            url: "https://www.mennaifarms.com",
            logo: settings?.logo_url || "https://www.mennaifarms.com/logo.png",
            description: settings?.description || "Leading pineapple producer in Ghana",
            // ... other static data or fetch from settings if schema expands
          }}
        />
        {children}
        <Script
          id="readdy-assistant"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://readdy.ai/api/public/assistant/widget?projectId=0361743c-d6ab-494c-8439-5a780936c064';
                script.setAttribute('mode', 'hybrid');
                script.setAttribute('voice-show-transcript', 'true');
                script.setAttribute('theme', 'light');
                script.setAttribute('size', 'compact');
                script.setAttribute('accent-color', '${theme?.primary || "#16a34a"}');
                script.setAttribute('button-base-color', '${theme?.primary?.replace('600', '700') || "#15803d"}');
                script.setAttribute('button-accent-color', '#ffffff');
                script.defer = true;
                document.body.appendChild(script);
              })();
            `
          }}
        />
      </body>
    </html>
  );
}
