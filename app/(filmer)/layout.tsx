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
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  } else {
    return `https://${process.env.VERCEL_URL}`;
  }
}

export const revalidate = 3600

export const metadata: Metadata = {
  // metadataBase: new URL('https://beta.fagfilm.no'), //getBaseUrl()
  title: "Fagfilm",
}

export default async function FilmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}