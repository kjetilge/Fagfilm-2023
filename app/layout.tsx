import "@/app/globals.css";
// // import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { Metadata } from 'next'
import { headers } from "next/headers";

export const metadata: Metadata = {
  // metadataBase: new URL('https://beta.fagfilm.no'), //getBaseUrl()
  title: "Fagfilm",
  metadataBase: new URL("https://ny.fagfilm.no"),
}
export default async function RootLayout({
  children,
  route
}: {
  children: React.ReactNode
  route: string
}) {

  return (
    <html lang="no_NB" suppressHydrationWarning>
      <body className={`${cx(sfPro.variable, inter.variable)} dark`}>
      <Theme appearance="dark">
        <Suspense fallback="...">
          {/* IKKE i bruk @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
          <main className="">
            {children}
          </main>
        {/* <Analytics /> */}
        </Theme>
      </body>
    </html>
  );
}
