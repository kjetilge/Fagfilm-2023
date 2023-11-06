import "@/app/globals.css";
// import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
// import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Head from 'next/head';
import favicon from '@/app/favicon.ico'

export const metadata = {
  title: "Fagfilm",
  description:
    "Fagfilm gir deg filmer om videregående utdanning og yrkesvalg.",
  twitter: {
    card: "summary_large_image",
    title: "Fagfilm - Filmer om videregående utdanning og yrkesvalg",
    description:
      "Fagfilm - Filmer om videregående utdanning og yrkesvalg.",
    creator: "@fagfilm",
  },
  metadataBase: new URL("https://beta.fagfilm.no"),
  themeColor: "#FFF",
};

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

        <main className=" text-slate-300">
          {children}
        </main>
      </body>
    </html>
  );
}