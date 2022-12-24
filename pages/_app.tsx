import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import React from "react";
import Navbar from "../src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = "darkTheme";
  const stylesDark = `h-full w-screen m-0 bg-darkTheme-background-1 text-darkTheme-color-mid`;
  const stylesLight = `h-full w-screen m-0 bg-darkTheme-color-mid text-darkTheme-background-1`;
  return (
    <div className="">
      <div className="container lg:px-52 px-8 ">
        <Head>
          <title>Pratik Kulkarni</title>
        </Head>

        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
