import type { AppProps } from "next/app";
// import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import ScrollToTop from "@/src/components/ScrollToTop";
// import Project from "@/src/components/Project";

interface IThemeContext {
  isThemeDark: boolean;
  isThemeDarkToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = React.createContext<IThemeContext | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isThemeDark, isThemeDarkToggle] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isThemeDark");

    if (storedTheme === null) {
      localStorage.setItem("isThemeDark", JSON.stringify(isThemeDark));
    } else {
      isThemeDarkToggle(
        JSON.parse(localStorage.getItem("isThemeDark") as string)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isThemeDark", JSON.stringify(isThemeDark));
  }, [isThemeDark]);

  return (
    <ThemeContext.Provider
      value={{ isThemeDark: isThemeDark, isThemeDarkToggle: isThemeDarkToggle }}
    >
      <div
        className={
          isThemeDark
            ? "bg-dark-background-3 h-screen overflow-auto selection:bg-dark-mint-selection selection:text-light-background-1"
            : "bg-light-background-1 h-screen overflow-auto selection:bg-light-rose_lighter selection:text-dark-background-1"
        }
      >
        <div className="container lg:px-52">
          <Head>
            <title>Pratik Kulkarni</title>
            <link
              rel="icon"
              type="image/png"
              sizes="196x196"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="160x160"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-160.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="64x64"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-64.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-16.png"
            />
            <link
              rel="apple-touch-icon"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="https://raw.githubusercontent.com/praaatik/me/main/public/favicons/favicon-180.png"
            />
          </Head>
          <Navbar />
          <ScrollToTop />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default MyApp;
