import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  date: string;
  category: string;
  subtitle: string
  content: PortableTextBlock[];
}