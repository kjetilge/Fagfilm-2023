import "@/app/globals.css";
// // import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";


// export const metadata = {
//   title: "Fagfilm",
//   description:
//     "Fagfilm git deg filmer om videregående utdanning og yrkesvalg.",
//   twitter: {
//     card: "summary_large_image",
//     title: "Fagfilm - Filmer om videregående utdanning og yrkesvalg",
//     description:
//       "Fagfilm - Filmer om videregående utdanning og yrkesvalg.",
//     creator: "@fagfilm",
//   },
//   metadataBase: new URL("https://fagfilm.dev"),
//   themeColor: "#FFF",
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cx(sfPro.variable, inter.variable)}`}>
        {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
        <Suspense fallback="...">
          {/* IKKE i bruk @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
