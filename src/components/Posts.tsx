import Link from "next/link";
import styles from "@/styles/Articles.module.css";
import React, { useEffect, useState } from "react";
import { PostMetadata } from "../../interfaces/PostMetadata";
import { FaExternalLinkAlt } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { v4 as uuidv4 } from "uuid";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  const [tags, tagsSet] = useState<string[]>();

  useEffect(() => {
    posts.map((post) => {
      tagsSet((tags) => [...new Set(tags), ...new Set(post?.tags)]);
    });
  }, []);

  return (
    <div className=" my-2 flex justify-evenly flex-row-reverse">
      <div className="tags hidden md:inline md:text-center">
        <h2 className="text-2xl p-4 px-0 text-left">Tags</h2>
        <ul aria-label="tags-list">
          {tags?.map((tag, index) => (
            <CustomLink href={`/tags/${tag}`} key={uuidv4()} isExternal={false}>
              <li
                key={uuidv4()}
                className="cursor-pointer bg-slate-300 p-2 m-2 text-sm rounded-lg hover:underline"
                aria-label="tags-listitem"
              >
                {tag}
              </li>
            </CustomLink>
          ))}
        </ul>
      </div>
      <div className="posts cursor-default">
        <h1 className=" text-3xl p-4 px-0 " id="posts--heading">
          Posts
        </h1>
        <ul className={styles.list} aria-label="posts-list">
          {posts.map((post, index) => (
            <li
              key={uuidv4()}
              className="border-2 p-2 rounded"
              aria-label="post-listitem"
            >
              <CustomLink
                href={post?.external ? `${post?.url}` : `/blog/${post.slug}`}
                // key={index}
                isExternal={post?.external}
              >
                <div
                  className="lg:text-2xl text-xl flex relative hover:underline cursor-pointer"
                  id="post-title"
                >
                  {post.title}
                  <div className="mx-2 h-1/2 hover:after:content-['External_link'] hover:after:block hover:after:text-xs  hover:after:absolute hover:after:-top-6">
                    {post?.external ? <FaExternalLinkAlt size={15} /> : <></>}
                  </div>
                </div>
              </CustomLink>

              <p className="italic text-sm my-1 lg:text-base">{post.excerpt}</p>
              <div className="flex">
                {post.tags.map((tag) => (
                  <div
                    key={uuidv4()}
                    className="bg-slate-300 p-2 m-2 text-xs rounded-lg lg:text-sm hover:underline"
                  >
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
