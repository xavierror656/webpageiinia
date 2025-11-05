import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://iinia.com'),
  title: {
    default: 'IINIA - Industrial AI Solutions',
    template: '%s | IINIA',
  },
  description: 'Advanced industrial artificial intelligence solutions for manufacturing optimization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
