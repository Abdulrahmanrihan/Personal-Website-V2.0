import { PortableTextBlock } from "sanity";

export type ProjectImage = {
  url: string;
  alt?: string;
}

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  url: string;
  categories?: string[];
  legacyCategory?: string;
  year?: number;
  images?: ProjectImage[];
  legacyImage?: string;
  content: PortableTextBlock[];
}
