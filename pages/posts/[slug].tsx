import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import React from "react";
import { PostMetadata } from "../../interfaces/PostMetadata";
import { getPostFromSlug, getSlugs } from "../../src/api";
import H1, { Props } from "../../src/components/H1";
import Navbar from "../../src/components/Navbar";
import H2 from "@/src/components/H2";
import Callout from "@/src/components/Callout";
// import ImageComponent from "@/src/components/Image";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMetadata;
}

export default function PostPage({ post }: { post: MDXPost }) {
  console.log(post);
  return (
    <div>
      <Head>
        <title>{post?.meta?.title}</title>
      </Head>
      <h1>{post?.meta?.title}</h1>
      <MDXRemote
        {...post.source}
        components={{
          Image,
          Callout,
          h1: (props: any) => <H1 {...props} />,
          h2: (props: any) => <H2 {...props} />,
          p: (props: any) => <p {...props} className="mb-4 text-[#EAE6E5]" />,
          // code: (props: any) => <code {...props} className="mt-3" />,
        }}
      />
      <div className="flex justify-center">
        <div className="w-2/3 h-1 bg-black mt-8 mb-8"></div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, metadata } = getPostFromSlug(slug);
  // console.log(content);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, metadata } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
