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
import H3 from "@/src/components/H3";
// import ImageComponent from "@/src/components/Image";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: PostMetadata;
}

export default function PostPage({ post }: { post: MDXPost }) {
  // export default function PostPage({ meta }: MDXPost) {
  // console.log(post?.metadata);
  return (
    <div>
      <Head>
        <title>{post?.metadata?.title}</title>
      </Head>
      <div className="text-4xl p-4 text-center lg:text-6xl lg:p-10 bg-slate-200">
        {post?.metadata?.title}
      </div>
      <div className="text-sm p-4 text-center italic lg:text-base after:content-[''] after:w-1/4 after:h-1 after:bg-gray-600 after:block after:m-auto after:mt-8 after:mb-10 bg-slate-200">
        {post?.metadata?.excerpt}
      </div>
      <MDXRemote
        {...post.source}
        components={{
          Image,
          Callout,
          h1: (props: any) => <H1 {...props} />,
          h2: (props: any) => <H2 {...props} />,
          h3: (props: any) => <H3 {...props} />,
          p: (props: any) => <p {...props} className="mb-4" />,
          aside: (props: any) => (
            <aside {...props} className="bg-slate-200 p-5 rounded-md my-4" />
          ),
          li: (props: any) => (
            <li {...props} className="list-disc leading-relaxed my-1 " />
          ),
          // ul: (props: any) => <ul {...props} className="bg-slate-30" />,
          inlineCode: (props: any) => {
            return (
              <div
                {...props}
                className="bg-zinc-700 text-red-400 p-1 m-1 text-sm inline"
              />
            );
          },
        }}
      />
      <div className="flex justify-center">
        <div className="w-1/4 h-1 bg-black mt-8 mb-8"></div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, metadata } = getPostFromSlug(slug);
  // console.log(metadata);
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
