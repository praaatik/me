import Link from "next/link";
import styles from "@/styles/Articles.module.css";
import React, { useEffect, useState } from "react";
import { PostMetadata } from "../../interfaces/PostMetadata";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className=" border-black my-2">
      <h1 className=" text-3xl p-4 px-0 ">Posts</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li
            key={post.slug}
            // className="after:block lg:after:w-1/2 after:h-1 after:bg-black after:m-auto after:mb-16 after:w-2/3 after:mt-6"
            className="border-2 border-black p-2 rounded"
          >
            <div className="lg:text-2xl text-xl">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </div>
            <p className="italic text-sm my-1 lg:text-base">{post.excerpt}</p>
            <p className="flex">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-slate-300 p-2 m-2 text-xs rounded-lg lg:text-sm"
                >
                  <Link href={`/tags/${tag}`}>{tag}</Link>
                </div>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
