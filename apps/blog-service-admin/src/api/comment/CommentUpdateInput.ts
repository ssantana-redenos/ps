import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
};
