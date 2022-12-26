import Link from "next/link";
import { ThemeContext } from "pages/_app";
import { useContext, useEffect } from "react";
import ITableOfContent from "../interfaces/ITableOfContent";
import ITableOfContentArray from "../interfaces/ITableOfContentArray";
import ITOCPageStyles from "../interfaces/ITOCPageStyles";

const TableOfContents = ({ contents }: ITableOfContentArray) => {
  const context = useContext(ThemeContext);

  const lightStyles: ITOCPageStyles = {
    headingStyles:
      " lg:text-xl lg:text-center border-light-rose border-b-2 py-2",
    indentationStyles:
      "before:content-[''] before:block before:h-10 before:w-[1px] before:bg-light-rose before:left-5 before:absolute before:overflow-hidden",
  };
  const darkStyles: ITOCPageStyles = {
    headingStyles:
      " lg:text-xl lg:text-center border-dark-peach border-b-2 py-2",
    indentationStyles:
      "before:content-[''] before:block before:h-10 before:w-[1px] before:bg-dark-peach before:left-5 before:absolute before:overflow-hidden",
  };

  return (
    <div>
      <div
        className={
          context?.isThemeDark
            ? darkStyles.headingStyles
            : lightStyles.headingStyles
        }
      >
        Table of contents
      </div>
      <div className="mb-4 mt-0 mx-4 italic overflow-y-auto h-[85vh] text-sm py-2 leading-8">
        <ul className="pb-4">
          {contents.map((content) => {
            return (
              <div
                key={content?.url}
                className={
                  content?.level === 3
                    ? "px-10 relative hover:underline"
                    : "px-1 relative hover:underline"
                }
              >
                <li
                  key={content?.url}
                  className={
                    content?.level === 3
                      ? context?.isThemeDark
                        ? darkStyles.indentationStyles
                        : lightStyles.indentationStyles
                      : ""
                  }
                >
                  <Link href={content.url} key={content.url}>
                    {content.heading}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
