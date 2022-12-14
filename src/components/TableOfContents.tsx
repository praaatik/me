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
  useEffect(() => {
    // console.log(contents, typeof contents);
    // console.log(heading, url, level);
    console.log(contents);
  }, []);

  return (
    <div className="bg-slate-300 my-4">
      <ul>
        {contents.map((content) => {
          return (
            <div
              key={content?.url}
              className={content?.level === 3 ? "px-10" : "px-1"}
            >
              <li
                key={content?.url}
                className={content?.level === 3 ? "list-square" : "list-disc"}
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
