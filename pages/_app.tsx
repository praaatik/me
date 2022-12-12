import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import React from "react";
import Navbar from "../src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container h-screen  lg:px-52 px-8">
      <Head>
        <title>Pratik Kulkarni</title>
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
