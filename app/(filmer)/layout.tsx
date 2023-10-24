import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";


export const metadata = {
  title: "Fagfilm",
  description:
    "Fagfilm git deg filmer om videregående utdanning og yrkesvalg.",
  twitter: {
    card: "summary_large_image",
    title: "Fagfilm - Filmer om videregående utdanning og yrkesvalg",
    description:
      "Fagfilm - Filmer om videregående utdanning og yrkesvalg.",
    creator: "@fagfilm",
  },
  metadataBase: new URL("https://fagfilm.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classNames = cx(sfPro.variable, inter.variable)
  console.log('classNames', classNames)
  return (
    <html lang="en">
      <body className={`${cx(sfPro.variable, inter.variable)}`}>
        <main className="">
          <p>{classNames}</p>
          {children}

        </main>
      </body>
    </html>
  );
}