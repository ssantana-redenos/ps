import { SortOrder } from "../../util/SortOrder";

export type BlogPostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
  publishedAt?: SortOrder;
  title?: SortOrder;
};
