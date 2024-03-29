import Link from "next/link";
import styles from "@/styles/Articles.module.css";
import React, { useContext, useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { ThemeContext } from "pages/_app";
import IPostStyles from "../interfaces/IPostStyles";
import { PostMetadata } from "../interfaces/PostMetadata";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  const context = useContext(ThemeContext);
  const [tags, tagsSet] = useState<string[]>();

  useEffect(() => {
    posts.map((post) => {
      tagsSet((tags) => [...new Set(tags), ...new Set(post?.tags)]);
    });
  }, []);

  const darkStyles: IPostStyles = {
    tagsMetadataStyles:
      "cursor-pointer bg-dark-marshmellow border-dark-mid border-2 text-light-background-1 p-2 m-2 text-sm rounded-lg hover:underline ",
    tagsStyles:
      "p-2 m-2 text-xs rounded-lg lg:text-sm hover:underline bg-dark-marshmellow border-dark-mid border-2 text-light-background-1",
    tagsHeaderStyles: "text-2xl p-4 px-0 text-left text-light-background-1",
    postsHeaderStyles: "text-3xl p-4 px-0 text-light-background-1",
    postsTitleStyles:
      "lg:text-2xl text-xl flex relative text-light-background-1",
    postsExcerptStyles:
      "italic text-sm my-1 lg:text-base text-light-background-1",
  };

  const lightStyles: IPostStyles = {
    tagsMetadataStyles:
      "cursor-pointer bg-light-peach border-light-rose border-2 text-dark-background-1 p-2 m-2 text-sm rounded-lg hover:underline ",
    tagsStyles:
      "p-2 m-2 text-xs rounded-lg lg:text-sm hover:underline bg-light-peach border-light-rose border-2 w-fit",
    tagsHeaderStyles: "text-2xl p-4 px-0 text-left text-dark-background-1 ",
    postsHeaderStyles: "text-3xl p-4 px-0 text-dark-background-1",
    postsTitleStyles:
      "lg:text-2xl text-xl flex relative text-dark-background-1",
    postsExcerptStyles:
      "italic text-sm my-1 lg:text-base text-dark-background-1",
  };

  return (
    <div className="my-2 mx-2 flex justify-evenly flex-row-reverse ">
      <div className="tags hidden md:inline md:text-center ">
        <h2
          className={
            context?.isThemeDark
              ? darkStyles.tagsHeaderStyles
              : lightStyles.tagsHeaderStyles
          }
        >
          Tags
        </h2>
        <ul className="grid grid-cols-2">
          {
            tags?.map((tag) => {
              return <CustomLink href={`/tags/${tag}`} key={tag.toString()} isExternal={false}>
                <li
                  key={tag.toString()}
                  className={
                    context?.isThemeDark
                      ? darkStyles.tagsMetadataStyles
                      : lightStyles.tagsMetadataStyles
                  }
                >
                  {tag}
                </li>
              </CustomLink>
            })
          }
        </ul>
      </div>
      <div className="posts">
        <h1
          className={
            context?.isThemeDark
              ? darkStyles.postsHeaderStyles
              : lightStyles.postsHeaderStyles
          }
        >
          Posts & Notes
        </h1>
        <ul className={styles.list}>
          {posts.map((post) => {
            if (post.project !== true) {
              return <CustomLink
                href={post?.external ? `${post?.url}` : `/blog/${post.slug}`}
                key={post?.slug}
                isExternal={post?.external}
              >
                <li
                  key={post.slug}
                  className="border-light-sea border-2 p-2 w-full rounded cursor-pointer"
                >
                  <div
                    className={
                      context?.isThemeDark
                        ? darkStyles.postsTitleStyles
                        : lightStyles.postsTitleStyles
                    }
                  >
                    {post.title}
                    <div className="mx-2 h-1/2 hover:after:content-['External_link'] hover:after:block hover:after:text-xs  hover:after:absolute hover:after:-top-6">
                      {post?.external ? <FaExternalLinkAlt size={15} /> : <></>}
                    </div>
                  </div>
                  <p
                    className={
                      context?.isThemeDark
                        ? darkStyles.postsExcerptStyles
                        : lightStyles.postsExcerptStyles
                    }
                  >
                    {post.excerpt}
                  </p>
                  <div className="grid grid-cols-3 md:flex">
                    {post.tags.map((tag) => (
                      <div
                        key={tag}
                        className={
                          context?.isThemeDark
                            ? darkStyles.tagsStyles
                            : lightStyles.tagsStyles
                        }
                      >
                        <Link href={`/tags/${tag}`}>{tag}</Link>
                      </div>
                    ))}
                  </div>
                </li>
              </CustomLink>
            }

          }
          )}
        </ul>
      </div>
    </div>
  );
}
