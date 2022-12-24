import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import React, { useContext, useState } from "react";
import { PostMetadata } from "../../interfaces/PostMetadata";
import { getHeadings, getPostFromSlug, getSlugs } from "../../src/api";
import H1 from "../../src/components/H1";
import H2 from "@/src/components/H2";
import Callout from "@/src/components/Callout";
import H3 from "@/src/components/H3";
import TableOfContents, {
  ITableOfContent,
} from "@/src/components/TableOfContents";
import ScrollToTop from "@/src/components/ScrollToTop";
import ReadingProgress from "@/src/components/ReadingProgress";
import WebBookmark from "@/src/components/WebBookmark";
import { ThemeContext } from "pages/_app";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: PostMetadata;
  headings: ITableOfContent[];
}

interface IPostPageStyles {
  titleStyle: string;
  excerptStyle: string;
  containerStyle: string;
}

export default function PostPage({ post }: { post: MDXPost }) {
  const isThemeDark = useContext(ThemeContext);

  const lightStyles: IPostPageStyles = {
    titleStyle:
      "text-4xl p-4 text-center md:font-extrabold lg:text-6xl lg:p-10 bg-light-background-1",
    excerptStyle:
      "text-sm p-4 text-center italic lg:text-base after:content-[''] after:w-1/4 after:h-1 after:bg-light-sea after:block after:m-auto after:mt-8 after:mb-10 bg-light-background-1",
    containerStyle: "text-dark-background-3",
  };
  const darkStyles: IPostPageStyles = {
    titleStyle:
      "text-4xl p-4 text-center lg:text-6xl md:font-extrabold lg:p-10 bg-dark-background-3",
    excerptStyle:
      "text-sm p-4 text-center italic lg:text-base after:content-[''] after:w-1/4 after:h-1 after:bg-gray-600 after:block after:m-auto after:mt-8 after:mb-10 bg-dark-background-3",
    containerStyle: "text-light-background-3 bg-dark-background-3",
  };

  const styles = isThemeDark ? darkStyles : lightStyles;

  return (
    <div
      className={
        isThemeDark ? darkStyles.containerStyle : lightStyles.containerStyle
      }
    >
      <ReadingProgress />
      <Head>
        <title>{post?.metadata?.title}</title>
      </Head>
      <div
        className={
          isThemeDark ? darkStyles?.titleStyle : lightStyles?.titleStyle
        }
      >
        {post?.metadata?.title}
      </div>
      <div
        className={
          isThemeDark ? darkStyles?.excerptStyle : lightStyles?.excerptStyle
        }
      >
        {post?.metadata?.excerpt}
      </div>
      <div className="flex justify-center m-3 mb-0"></div>
      <div className="flex flex-row-reverse justify-center lg:justify-around">
        <div className="lg:sticky lg:top-0 lg:h-fit lg:inline hidden ">
          <TableOfContents contents={post?.headings} />
        </div>
        <div className="lg:w-2/3 w-4/5 mx-0">
          <MDXRemote
            {...post.source}
            components={{
              Image,
              Callout,
              WebBookmark,
              h1: (props: any) => <H1 {...props} />,
              h2: (props: any) => <H2 {...props} />,
              h3: (props: any) => <H3 {...props} />,
              p: (props: any) => <p {...props} className="mb-4" />,
              // a: (props: any) => (
              //   <WebBookmark href={props} className="bg-red-600" />
              // ),
              aside: (props: any) => (
                <aside
                  {...props}
                  className="bg-slate-200 p-5 rounded-lg my-4"
                />
              ),
              li: (props: any) => (
                <li {...props} className="list-disc leading-relaxed my-1 " />
              ),
              inlineCode: (props: any) => {
                return (
                  <div
                    {...props}
                    className="bg-zinc-700 text-red-300 p-1 px-2 m-1 text-sm italic inline"
                  />
                );
              },
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-1/4 h-1 bg-black mt-8 mb-8"></div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, metadata } = getPostFromSlug(slug);
  const headings = await getHeadings(content, metadata);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [
          rehypeHighlight,
          {
            detect: true,
          },
        ],
      ],
    },
  });

  return { props: { post: { source: mdxSource, metadata, headings } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
