import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Digital Products & SaaS Boilerplates | Sanchit Barjibhe',
  description: 'Explore production-ready developer tools, Stripe integration kits, and AI toolkits engineered for fast SaaS launches and scale.',

  keywords: ['Stripe Payment Kit', 'SaaS Boilerplate', 'Developer Tools', 'Next.js Templates', 'AI Toolkits'],
  openGraph: {
    title: 'Digital Products & SaaS Boilerplates | Sanchit Barjibhe',
    description: 'Explore production-ready developer tools, Stripe integration kits, and AI toolkits engineered for fast SaaS launches and scale.',
    url: 'https://sanchitbarjibhe.vercel.app/products',
    siteName: 'Sanchit.dev',
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
