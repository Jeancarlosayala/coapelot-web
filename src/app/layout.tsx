
import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { GoogleTagManager, GoogleTagManagerNoscript } from '@/components/analytics/google-tag-manager';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Aijolot - AI Solutions for eCommerce',
    template: '%s | Aijolot',
  },
  description: 'Transforming eCommerce challenges into opportunities with cutting-edge AI solutions.',
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PF9F3V9L';
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={gtmId} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) */}
        <GoogleTagManagerNoscript gtmId={gtmId} />
        
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
