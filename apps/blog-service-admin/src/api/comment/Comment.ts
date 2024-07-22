import { BlogPost } from "../blogPost/BlogPost";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  author: string | null;
  content: string | null;
  blogPost?: BlogPost | null;
};
