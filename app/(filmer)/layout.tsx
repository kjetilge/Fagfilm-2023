import "@/app/globals.css";
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Head from 'next/head';
import favicon from '@/app/favicon.ico'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fagfilm",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no_NB" suppressHydrationWarning>
      {/* <Head>
        <link rel="icon" href={favicon.src} sizes="any" />
        <title>Fagfilm</title>
      </Head>  */}
      <body className={`${cx(sfPro.variable, inter.variable)} bg-neutral-900`}>
        <Suspense fallback="...">
          {/* IKKE i bruk @ts-expect-error Server Component */}
          <Nav />
        </Suspense>

        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}