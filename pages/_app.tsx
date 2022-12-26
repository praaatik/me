import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";

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
