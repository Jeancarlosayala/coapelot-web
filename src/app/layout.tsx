import type {Metadata} from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '600', '700'],
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
  // icons: { icon: "/favicon.ico" }, // Favicon not generated
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body 
        className={`${sora.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-grow"> {/* Removed container and mx-auto */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
