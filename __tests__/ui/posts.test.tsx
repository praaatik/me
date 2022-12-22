import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/Posts";
import { render, screen } from "@testing-library/react";
import { PostMetadata } from "interfaces/PostMetadata";

// var testPosts: PostMetadata[] = [
//   {
//     slug: "issues",
//     excerpt:
//       "This is a post to make a list of all the issues I am facing during the development of this blog, and their resolutions.",
//     title: "Issues I am facing while creating this blog",
//     tags: ["blog", "notes", "personal", "yetAnotherTag"],
//     date: "Thu Dec 15 2022 05:30:00 GMT+0530 (India Standard Time)",
//     external: true,
//     url: "https://praaatik.github.io/pytorch-deep-learning/intro.html",
//   },
// ];

var allTestPosts: PostMetadata[] = getAllPosts().map((post) => post.metadata);
var onePost = allTestPosts.slice(0, 1);

it("displays the tags and posts when one post is present", () => {
  render(<Posts posts={onePost} />);

  const tagsList = screen.getByRole("list", { name: "tags-list" });
  expect(tagsList).toBeDefined();

  const tagsItem = screen.getAllByRole("listitem", { name: "tags-listitem" });
  expect(tagsItem.length).toEqual(onePost[0]?.tags.length);

  const postList = screen.getByRole("list", { name: "posts-list" });
  expect(postList).toBeDefined();

  const postItem = screen.getAllByRole("listitem", { name: "post-listitem" });
  expect(postItem.length).toEqual(onePost.length);
});

it("displays the tags and posts when multiple posts are present", () => {
  render(<Posts posts={allTestPosts} />);
  const totalTags = allTestPosts.map((post) => post?.tags);

  const tagsList = screen.getByRole("list", { name: "tags-list" });
  expect(tagsList).toBeDefined();

  const tagsItem = screen.getAllByRole("listitem", { name: "tags-listitem" });
  expect(tagsItem.length).toEqual(totalTags.length);

  const postList = screen.getByRole("list", { name: "posts-list" });
  expect(postList).toBeDefined();

  const postItem = screen.getAllByRole("listitem", { name: "post-listitem" });
  expect(postItem.length).toEqual(allTestPosts.length);
});
