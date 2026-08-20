import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = getSiteUrl();
const siteDescription =
  "Portfolio of Jericho Guiang, a recent Computer Science graduate building backend, full-stack, and AI-powered applications.";

export const metadata: Metadata = {
  title: "Jericho Guiang | Software Engineer",
  description: siteDescription,
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Jericho Guiang | Software Engineer",
    description: siteDescription,
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: "Jericho Guiang | Software Engineer",
    description: siteDescription,
  },
  ...(siteUrl
    ? {
        alternates: {
          canonical: siteUrl,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 min-h-screen overflow-x-hidden`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:rounded-md"
        >
          Skip to content
        </a>
        <div
          className="fixed inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 -z-10"
          aria-hidden="true"
        />
        <Navbar />
        <main id="main-content" className="container mx-auto px-4 pt-16 pb-8 min-h-screen">
          <div className="motion-safe:animate-fade-in">{children}</div>
        </main>
        <footer className="border-t border-gray-200 bg-white/80">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Jericho Guiang</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
