import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  url: string;
  category: string;
  content: PortableTextBlock[];
}