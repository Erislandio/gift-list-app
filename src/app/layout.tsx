import Footer from "#/lib/components/layouts/Footer/footer";
import Header from "#/lib/components/layouts/header/header";
import { inter, robotoMono } from "#/lib/configs/font";
import "#/lib/styles/reset.css";
import "#/lib/styles/tailwind.css";
import type { Metadata } from "next";
import Head from "next/head";
import type { PropsWithChildren, ReactElement } from "react";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "Bendita Box - Cestas Personalizadas",
  description: "Bendita Box - Cestas Personalizadas"
};

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html className={`${inter.variable} ${robotoMono.variable}`}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}