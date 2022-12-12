import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/articles";
import { PostMetadata } from "interfaces/PostMetadata";
import React from "react";

export default function Blog({ posts }: { posts: PostMetadata[] }) {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.metadata);

  return { props: { posts } };
}
