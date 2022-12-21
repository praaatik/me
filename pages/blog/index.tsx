import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/Posts";
import { PostMetadata } from "interfaces/PostMetadata";
import React, { useState } from "react";

export default function Blog({ posts }: { posts: PostMetadata[] | [] }) {
  const [currentIndex, currentIndexSet] = useState(0);

  return (
    <>
      {posts.length > 0 ? (
        <div>
          <Posts posts={posts.slice(0, currentIndex + 9)} />
          <div className="flex justify-center">
            <button
              onClick={() => currentIndexSet(currentIndex + 10)}
              className={
                currentIndex > posts?.length
                  ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:cursor-not-allowed mb-4 "
                  : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
              }
            >
              Load more posts
            </button>
          </div>
        </div>
      ) : (
        <h2>No posts found</h2>
      )}
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.metadata);

  return { props: { posts } };
}
