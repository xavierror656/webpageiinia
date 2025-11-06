import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://iinia.com'),
  title: {
    default: 'IINIA Industrial Intelligence & AI Solutions',
    template: '%s | IINIA',
  },
  description: 'Advanced industrial artificial intelligence solutions for manufacturing optimization',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'IINIA Industrial Intelligence & AI Solutions',
    description: 'Advanced industrial artificial intelligence solutions for manufacturing optimization',
    url: 'https://iinia.com',
    siteName: 'IINIA',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/logo.webp',
        width: 1200,
        height: 630,
        alt: 'IINIA logo over gradient background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IINIA Industrial Intelligence & AI Solutions',
    description: 'Advanced industrial artificial intelligence solutions for manufacturing optimization',
    images: ['/og/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
