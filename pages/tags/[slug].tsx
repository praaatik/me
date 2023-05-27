import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, getAllTags } from "@/src/api";
import Posts from "@/src/components/Posts";
import { PostMetadata } from "@/src/interfaces/PostMetadata";
import { useContext } from "react";
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
      <Posts posts={posts} tagsArray={tagsArray} />
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
