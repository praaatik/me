import path from "path";
import { sync } from "glob";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../interfaces/Post";

const POSTS_PATH = path.join(process.cwd(), "posts");

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1];
    const [slug, _] = fileName.split(".");

    return slug;
  });
};

export const getAllPosts = () => {
  // return the posts in an descending order of the date
  const posts = getSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((post_one, post_two) => {
      if (post_one.metadata.date > post_two.metadata.date) return 1;
      if (post_one.metadata.date < post_two.metadata.date) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { content, data } = matter(source);

  return {
    content,
    metadata: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
    },
  };
};
