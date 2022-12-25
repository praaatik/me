// import { PostMetadata } from "interfaces/PostMetadata";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ITableOfContent from "./ITableOfContent";
import { PostMetadata } from "./PostMetadata";

export default interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  metadata: PostMetadata;
  headings: ITableOfContent[];
}
