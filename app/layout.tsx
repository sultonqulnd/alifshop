import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './../components/Header';
import TopSection from './../components/TopSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    "alifshop.uz - muddatli to'lovga sotib olish imkoniyati mavjud internet-do'kon",
  description:
    "Muddatli to'lovga sotib olish imkoniyati mavjud internet-do'kon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <TopSection />
          <Header />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
