import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/articles";
import { PostMetadata } from "interfaces/PostMetadata";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMetadata[];
}) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>
      <h1 className="text-center p-4 text-sm">
        Listing by tag: <div className="italic">{slug}</div>
      </h1>
      <Posts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) =>
    post.metadata.tags.includes(slug)
  );

  return {
    props: {
      slug,
      posts: posts.map((post) => post.metadata),
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
