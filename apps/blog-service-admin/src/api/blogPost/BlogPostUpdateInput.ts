import { CommentUpdateManyWithoutBlogPostsInput } from "./CommentUpdateManyWithoutBlogPostsInput";

export type BlogPostUpdateInput = {
  content?: string | null;
  author?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
  comments?: CommentUpdateManyWithoutBlogPostsInput;
};
