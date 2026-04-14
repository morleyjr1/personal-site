import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleEffect from "@/components/SparkleEffect";
import ThemeProvider from "@/components/ThemeProvider";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export const metadata: Metadata = {
  title: "Dr Jessica Morley | Digital Ethics & Health Policy",
  description:
    "Associate Research Scientist at Yale Digital Ethics Center. Working on the political philosophy of health AI, health data governance, and public health.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dr Jessica Morley | Digital Ethics & Health Policy",
    description:
      "Associate Research Scientist at Yale Digital Ethics Center. Working on the political philosophy of health AI, health data governance, and public health.",
    url: "https://drjrm.org",
    siteName: "Dr Jessica Morley",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr Jessica Morley — Digital Ethics & Health Policy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Jessica Morley | Digital Ethics & Health Policy",
    description:
      "Associate Research Scientist at Yale Digital Ethics Center. Working on the political philosophy of health AI, health data governance, and public health.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <SparkleEffect />
          <KonamiEasterEgg />
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
