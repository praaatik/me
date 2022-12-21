// import { render, screen } from "@testing-library/react";
import { getAllPosts } from "@/src/api";
import Posts from "@/src/components/Posts";
import { render, screen } from "@testing-library/react";
import { PostMetadata } from "interfaces/PostMetadata";

// it("displays message if there are no posts present", async () => {
//   //   const posts = getAllPosts().map((post) => post.metadata);
//   //   const posts: PostMetadata[] = [
//   //     {
//   //       date: "",
//   //       excerpt: "",
//   //       slug: "",
//   //       tags: [],
//   //       title: "",
//   //       external: false,
//   //       url: "",
//   //     },
//   //   ];

//   const posts: any = [];
//   render(<Posts posts={posts} />);

//   const noPostMessage = await screen.findAllByRole("heading", {
//     name: "No posts found",
//   });
//   console.log(noPostMessage);
//   //   expect(noPostMessage).toBeInTheDocument();
// });

it("runs a dummy function", () => {
  expect(true).toBeTruthy();
});
