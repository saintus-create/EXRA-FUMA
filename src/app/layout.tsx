import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ADHD Safety Hub — FDA FAERS Clinical Review',
    template: '%s | ADHD Safety Hub',
  },
  description:
    'Independent analysis of 169,640 FDA FAERS reports showing ADHD medications have a 4x safety advantage over the average drug. 300+ peer-reviewed studies. 33 countries.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
