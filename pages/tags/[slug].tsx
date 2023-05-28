import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, getAllTags } from "@/src/api";
import Posts from "@/src/components/Posts";
import { PostMetadata } from "@/src/interfaces/PostMetadata";
import { useContext, useState } from "react";
import { ThemeContext } from "pages/_app";

export default function TagPage({
  slug,
  posts,
  tagsArray
}: {
  slug: string;
  posts: PostMetadata[];
  tagsArray: String[]
}) {
  const context = useContext(ThemeContext);
  const [currentIndex, currentIndexSet] = useState(posts.length >= 9 ? 0 : posts.length);

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
  console.log(posts)

  return (
    <div className="h-full">
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1
        className={
          context?.isThemeDark
            ? "text-center p-4 text-sm text-light-background-1"
            : "text-center p-4 text-sm text-dark-background-1"
        }
      >
        Listing by tag:{" "}
        <div
          className={
            context?.isThemeDark
              ? "italic p-2 m-auto mt-2 w-fit text-xs rounded-lg lg:text-sm cursor-default bg-dark-marshmellow border-dark-mid border-2 text-light-background-1"
              : "italic p-2 m-auto mt-2 w-fit text-xs rounded-lg lg:text-sm  cursor-default bg-light-peach border-light-rose border-2 text-dark-background-1"
          }
        >
          {slug}
        </div>
      </h1>
      {/* <Posts posts={posts} tagsArray={tagsArray} /> */}
      <Posts posts={posts.slice(0, currentIndex + 9)} tagsArray={tagsArray} />
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
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) =>
    post.metadata.tags.includes(slug)
  );

  const tagsArray = [...getAllTags()];

  return {
    props: {
      slug,
      posts: posts.map((post) => post.metadata),
      tagsArray,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.metadata.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
