import path from "path";
import { sync } from "glob";
import fs from "fs";
import matter from "gray-matter";
import { Post } from "../interfaces/Post";
import { PostMetadata } from "interfaces/PostMetadata";
import { ITableOfContent } from "./components/TableOfContents";

const POSTS_PATH = path.join(process.cwd(), "posts");

// function readFiles(dir: string) {
//   // read directory
//   fs.readdir(dir, (error, fileNames) => {
//     if (error) throw error;

//     fileNames.forEach((filename) => {
//       // get current file name
//       const name = path.parse(filename).name;
//       // get current file extension
//       const ext = path.parse(filename).ext;
//       // get current file path
//       const filepath = path.resolve(dir, filename);

//       // get information about the file
//       fs.stat(filepath, function (error, stat) {
//         if (error) throw error;

//         // check if the current path is a file or a folder
//         const isFile = stat.isFile();

//         // exclude folders
//         if (isFile) {
//           // callback, do something with the file
//           // processFile(filepath, name, ext, stat);
//           console.log(name);
//           fs.readFile(`${dir}/${name}.mdx`, "utf-8", function (err, content) {
//             console.log(content.charAt(content.indexOf("- ")));
//           });
//         }
//       });
//     });
//   });
// }

// readFiles(`${process.cwd()}/posts`);

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

export const getHeadings = async (post: string, metadata: PostMetadata) => {
  const headingLines = post.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });

  return headingLines.map((raw) => {
    const heading = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const url = `${metadata?.slug}/#${heading
      .toLowerCase()
      .split(" ")
      .join("-")}`;
    return { heading, level, url };
  });
};
