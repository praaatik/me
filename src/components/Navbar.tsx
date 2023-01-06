import Link from "next/link";
import { ThemeContext } from "pages/_app";
import React, { useContext } from "react";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import INavbarStyles from "../interfaces/INavbarStyles";
import PratikKulkarniBlack from "../../styles/images/pratik_kulkarni_black.svg";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      name: "/home",
      to: "/",
    },
    {
      name: "/about",
      to: "/about",
    },
  ];

  const context = useContext(ThemeContext);

  const changeTheme = () => {
    const currentTheme = context?.isThemeDark;
    context?.isThemeDarkToggle(!currentTheme);
  };

  const darkStyles: INavbarStyles = {
    containerStyles:
      "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b-4 border-light-sea text-light-background-3",
    buttonStyles:
      "inline-flex items-center justify-center p-2 rounded-md text-light-sea hover:text-light-background-3 hover:bg-dark-background-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-background-1",
    mobileMenuStyles:
      "text-light-background-2 hover:bg-light-background-1 hover:text-dark-background-1 block px-3 py-2 rounded-md text-base font-medium",
    mobileThemeIcon: "w-fit mx-auto text-light-background-3",
  };

  const lightStyles: INavbarStyles = {
    containerStyles:
      "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b-4 border-light-sea text-dark-background-3",
    buttonStyles:
      "inline-flex items-center justify-center p-2 rounded-md text-light-sea hover:text-light-background-3 hover:bg-dark-background-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-background-1",
    mobileMenuStyles:
      "text-black-300 hover:bg-dark-background-1 hover:text-light-background-1 block px-3 py-2 rounded-md text-base font-medium",
    mobileThemeIcon: "w-fit mx-auto text-dark-background-3",
  };

  const [isClicked, isClickedSet] = useState(false);
  const handleNavbarHide = () => {
    const current = isClicked;
    return isClickedSet(!current);
  };
  return (
    <>
      <nav>
        <div
          className={
            context?.isThemeDark
              ? darkStyles.containerStyles
              : lightStyles.containerStyles
          }
        >
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
              <button
                type="button"
                className={
                  context?.isThemeDark
                    ? darkStyles.buttonStyles
                    : lightStyles.buttonStyles
                }
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => handleNavbarHide()}
              >
                <span className="sr-only ">Open main menu</span>

                <svg
                  className={
                    isClicked ? "block h-6 w-6 rotate-90" : "block h-6 w-6"
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className=" flex w-full justify-around items-end sm:items-stretch sm:justify-around ">
              <div className="flex-shrink-0 flex items-center">
                <h1>Pratik Kulkarni</h1>
              </div>

              <div className="hidden sm:flex sm:justify-evenly sm:ml-6">
                <div className="flex space-x-12">
                  {links.map((link) => {
                    // in case the link is for Logout, display with an onclick for dispatch
                    return (
                      <Link href={link.to} key={link?.name}>
                        {link.name}
                      </Link>
                    );
                  })}
                  <div className="cursor-pointer">
                    {context?.isThemeDark ? (
                      <FiSun size={30} onClick={() => changeTheme()} />
                    ) : (
                      <FiMoon size={30} onClick={() => changeTheme()} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            isClicked ? "sm:hidden border-b-4 border-light-sea" : "hidden"
          }
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => {
              return (
                <a
                  href={link.to}
                  className={
                    context?.isThemeDark
                      ? darkStyles.mobileMenuStyles
                      : lightStyles.mobileMenuStyles
                  }
                  key={link?.name}
                >
                  {link.name}
                </a>
              );
            })}
            <div
              className={
                context?.isThemeDark
                  ? darkStyles.mobileThemeIcon
                  : lightStyles.mobileThemeIcon
              }
            >
              {context?.isThemeDark ? (
                <FiSun onClick={() => changeTheme()} size={40} />
              ) : (
                <FiMoon onClick={() => changeTheme()} size={40} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
