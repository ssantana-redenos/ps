import { CommentCreateNestedManyWithoutBlogPostsInput } from "./CommentCreateNestedManyWithoutBlogPostsInput";

export type BlogPostCreateInput = {
  content?: string | null;
  author?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
  comments?: CommentCreateNestedManyWithoutBlogPostsInput;
};
