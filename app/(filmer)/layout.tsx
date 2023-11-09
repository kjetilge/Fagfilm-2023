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

export const metadata: Metadata = {
  // metadataBase: new URL('https://beta.fagfilm.no'), //getBaseUrl()
  title: "Fagfilm",
  metadataBase: new URL("https://ny.fagfilm.no"),
}
export default function HomeLayout({
  children
}: {
  children: React.ReactNode
  params?: any
}) {
  return (
    <section className="">
      {children}
    </section>
  );
}
