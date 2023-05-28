import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/Posts";
import { PostMetadata } from "@/src/interfaces/PostMetadata";
import { ThemeContext } from "pages/_app";
import React, { useContext, useState } from "react";

export default function Blog({ posts, tagsArray }: { posts: PostMetadata[], tagsArray: String[] }) {
  const [currentIndex, currentIndexSet] = useState(0);
  const context = useContext(ThemeContext);

  interface ILoadPostsButtonStyles {
    allowedStyles: string;
    nowAllowedStyles: string;
  }

  const lightStyles: ILoadPostsButtonStyles = {
    nowAllowedStyles:
      "bg-light-background-1 hover:bg-light-background-1 text-dark-background-1 font-semibold py-2 px-4 border-2 border-light-sea rounded shadow hover:cursor-not-allowed mb-4 ",

    allowedStyles:
      "bg-light-background-1 hover:bg-light-background-3 text-dark-background-1 font-semibold py-2 px-4 border-2 border-light-sea rounded shadow mb-4",
  };

  const darkStyles: ILoadPostsButtonStyles = {
    nowAllowedStyles:
      "bg-dark-background-1 hover:bg-dark-background-1 text-light-background-1 font-semibold py-2 px-4 border border-light-sea rounded shadow hover:cursor-not-allowed mb-4 ",

    allowedStyles:
      "bg-dark-background-1 hover:bg-dark-background-3 text-light-background-1 font-semibold py-2 px-4 border border-light-sea rounded shadow mb-4",
  };

  return (
    <>
      <Posts posts={posts.slice(0, currentIndex + 9)} tagsArray={tagsArray} />
      <div className="flex justify-center">
        <button
          onClick={() => currentIndexSet(currentIndex + 10)}
          className={
            context?.isThemeDark
              ? currentIndex > posts?.length
                ? darkStyles?.nowAllowedStyles
                : darkStyles?.allowedStyles
              : currentIndex > posts?.length
                ? lightStyles?.nowAllowedStyles
                : lightStyles?.allowedStyles
          }
        >
          Load more posts
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts().map((post) => post.metadata);

  return { props: { posts } };
}


///home/pratikk/me/pages/blog/index.tsx