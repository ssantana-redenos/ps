import { Comment } from "../comment/Comment";

export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  publishedAt: Date | null;
  title: string | null;
  comments?: Array<Comment>;
};
