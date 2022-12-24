import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import React from "react";
import Navbar from "../src/components/Navbar";

const isThemeDark = true;
export const ThemeContext = React.createContext(isThemeDark);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider value={isThemeDark}>
      <div
        className={
          isThemeDark ? "bg-dark-background-3" : "bg-light-background-1"
        }
      >
        <div className="container lg:px-52 px-8">
          <Head>
            <title>Pratik Kulkarni</title>
          </Head>

          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
