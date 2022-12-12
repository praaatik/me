import React from "react";
import { PostMetadata } from "../interfaces/PostMetadata";
import { getAllPosts } from "../src/api";
import Articles from "../src/components/articles";

export default function Home({ posts }: { posts: PostMetadata[] }) {
  return (
    <>
      <h1>Articles</h1>
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
