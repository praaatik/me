import Link from "next/link";
import { ThemeContext } from "pages/_app";
import React, { useContext } from "react";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const links = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "about",
      to: "/about",
    },
    {
      name: "blog",
      to: "/blog",
    },
  ];
  const context = useContext(ThemeContext);

  const changeTheme = () => {
    const currentTheme = context?.isThemeDark;
    context?.isThemeDarkToggle(!currentTheme);
  };

  const [isClicked, isClickedSet] = useState(false);
  const handleNavbarHide = () => {
    const current = isClicked;
    return isClickedSet(!current);
  };
  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-b-4">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div className="flex w-full justify-around items-end p-3 sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <h1>Pratik Kulkarni</h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {links.map((link) => {
                    // in case the link is for Logout, display with an onclick for dispatch
                    return (
                      <Link href={link.to} key={link?.name}>
                        {link.name}
                      </Link>
                    );
                  })}
                  {context?.isThemeDark ? (
                    <FiSun onClick={() => changeTheme()} />
                  ) : (
                    <FiMoon onClick={() => changeTheme()} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={isClicked ? "sm:hidden border-b-4" : "hidden"}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => {
              return (
                <a
                  href={link.to}
                  className=" text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  key={link?.name}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
