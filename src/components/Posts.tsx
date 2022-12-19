import Link from "next/link";
import styles from "@/styles/Articles.module.css";
import React, { useEffect, useState } from "react";
import { PostMetadata } from "../../interfaces/PostMetadata";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  const [tags, tagsSet] = useState<string[]>();

  useEffect(() => {
    posts.map((post) => {
      tagsSet((tags) => [...new Set(tags), ...new Set(post?.tags)]);
    });
  }, []);

  return (
    <div className=" my-2 flex justify-evenly flex-row-reverse ">
      <div className="tags hidden md:inline md:text-center">
        <h2 className="text-2xl p-4 px-0 text-left">Tags</h2>
        <ul>
          {tags?.map((tag) => (
            <Link passHref href={`/tags/${tag}`} key={tag}>
              <li
                key={tag}
                className="cursor-pointer bg-slate-300 p-2 m-2 text-sm rounded-lg hover:underline"
              >
                {tag}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="posts">
        <h1 className=" text-3xl p-4 px-0 ">Posts</h1>
        <ul className={styles.list}>
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post?.slug} passHref>
              <li
                key={post.slug}
                className="border-2 p-2 rounded cursor-pointer"
              >
                <div className="lg:text-2xl text-xl">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </div>
                <p className="italic text-sm my-1 lg:text-base">
                  {post.excerpt}
                </p>
                <p className="flex">
                  {post.tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-slate-300 p-2 m-2 text-xs rounded-lg lg:text-sm hover:underline"
                    >
                      <Link href={`/tags/${tag}`}>{tag}</Link>
                    </div>
                  ))}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
