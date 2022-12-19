import Link from "next/link";
import { useEffect } from "react";

export interface ITableOfContent {
  heading: string;
  level: number;
  url: string;
}

export interface ITableOfContentArray {
  contents: ITableOfContent[];
}

const TableOfContents = ({ contents }: ITableOfContentArray) => {
  return (
    <div>
      <div className="lg:mb-4 lg:text-xl lg:text-left">Table of contents</div>
      <div className="mb-4 mt-0 mx-2 italic rounded-lg overflow-y-auto h-[85vh] text-sm py-2 leading-8 scroll-">
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
                      ? "before:content-[''] before:block before:h-10 before:w-[1px] before:bg-slate-600 before:left-5 before:absolute before:overflow-hidden"
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