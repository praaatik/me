import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getAllPosts } from "../../src/api";
import Blog from "../../pages/blog/index";
import { PostMetadata } from "interfaces/PostMetadata";
import Posts from "@/src/components/Posts";

var testPosts: PostMetadata[] = [
  {
    slug: "issues",
    excerpt:
      "This is a post to make a list of all the issues I am facing during the development of this blog, and their resolutions.",
    title: "Issues I am facing while creating this blog",
    tags: ["blog", "notes", "personal", "yetAnotherTag"],
    date: "Thu Dec 15 2022 05:30:00 GMT+0530 (India Standard Time)",
    external: true,
    url: "https://praaatik.github.io/pytorch-deep-learning/intro.html",
  },
];

var allTestPosts: PostMetadata[] = getAllPosts().map((post) => post.metadata);
var onePost = allTestPosts.slice(0, 1);

it("checks if the load posts button is present in the document", () => {
  render(<Blog posts={testPosts} />);

  const button = screen.getByText("Load more posts");
  expect(button).toBeDefined();
});

it("displays appropriate message if no post is present", () => {
  testPosts = [];
  render(<Blog posts={testPosts} />);

  const header = screen.getByRole("heading", { name: "No posts found" });

  expect(header).toBeInTheDocument();
});
