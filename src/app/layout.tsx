import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SparkleEffect from "@/components/SparkleEffect";

export const metadata: Metadata = {
  title: "Jessica Morley | Digital Ethics & Health Policy",
  description:
    "Researcher at Yale working on AI ethics, health data governance, NHS digital policy, and public health. Thinking about how to get technology governance right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SparkleEffect />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
