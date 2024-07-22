import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  blogPost?: BlogPostWhereUniqueInput | null;
};
