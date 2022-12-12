import { getAllPosts } from "@/src/api";
import Articles from "@/src/components/articles";
import { PostMetadata } from "interfaces/PostMetadata";
import React from "react";

export default function Blog({ posts }: { posts: PostMetadata[] }) {
  return (
    <>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.metadata);

  return { props: { posts } };
}
