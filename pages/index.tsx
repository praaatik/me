import { getAllPosts, getAllTags } from "@/src/api";
import Posts from "@/src/components/Posts";
import { PostMetadata } from "@/src/interfaces/PostMetadata";
import { ThemeContext } from "pages/_app";
import React, { useContext, useState } from "react";

export default function Blog({ posts, tagsArray }: { posts: PostMetadata[], tagsArray: String[] }) {
  const [currentIndex, currentIndexSet] = useState(posts.length >= 9 ? 0 : posts.length);
  const context = useContext(ThemeContext);

  interface ILoadPostsButtonStyles {
    allowedStyles: string;
    notAllowedStyles: string;
  }

  const lightStyles: ILoadPostsButtonStyles = {
    notAllowedStyles:
      "bg-light-background-1 hover:bg-light-background-1 text-dark-background-1 font-semibold py-2 px-4 border-2 border-light-sea rounded shadow hover:cursor-not-allowed mb-4 ",

    allowedStyles:
      "bg-light-background-1 hover:bg-light-background-3 text-dark-background-1 font-semibold py-2 px-4 border-2 border-light-sea rounded shadow mb-4",
  };

  const darkStyles: ILoadPostsButtonStyles = {
    notAllowedStyles:
      "bg-dark-background-1 hover:bg-dark-background-1 text-light-background-1 font-semibold py-2 px-4 border border-light-sea rounded shadow hover:cursor-not-allowed mb-4 ",

    allowedStyles:
      "bg-dark-background-1 hover:bg-dark-background-3 text-light-background-1 font-semibold py-2 px-4 border border-light-sea rounded shadow mb-4",
  };

  return (
    <>
      <Posts posts={posts.slice(0, currentIndex + 9)} />
      <div className="flex justify-center">
        <button
          onClick={() => currentIndexSet(currentIndex + 10)}
          className={
            context?.isThemeDark
              ? currentIndex >= posts?.length
                ? darkStyles?.notAllowedStyles
                : darkStyles?.allowedStyles
              : currentIndex >= posts?.length
                ? lightStyles?.notAllowedStyles
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
  const tagsArray = [...getAllTags()];

  return { props: { posts, tagsArray } };
}
