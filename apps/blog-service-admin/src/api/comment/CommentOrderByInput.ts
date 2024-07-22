import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  content?: SortOrder;
  blogPostId?: SortOrder;
};
