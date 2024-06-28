import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/layout";
import Head from "next/head";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "alifshop.uz - muddatli to'lovga sotib olish imkoniyati mavjud internet-do'kon",
  description:
    "alifshop.uz - muddatli to'lovga sotib olish imkoniyati mavjud internet-do'kon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
