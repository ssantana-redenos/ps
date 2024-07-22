import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BlogPostWhereUniqueInput } from "../blogPost/BlogPostWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  blogPost?: BlogPostWhereUniqueInput;
};
