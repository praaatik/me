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
    <div className="mb-4 mt-0 italic border-2 border-black rounded-lg">
      <ul>
        {contents.map((content) => {
          return (
            <div
              key={content?.url}
              className={content?.level === 3 ? "px-10" : "px-1"}
            >
              <li
                key={content?.url}
                className={
                  content?.level === 3
                    ? "list-square list-inside"
                    : "list-disc list-inside"
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
  );
};

export default TableOfContents;
