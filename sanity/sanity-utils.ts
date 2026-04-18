import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import clientConfig from './config/client-config'

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"] | order(year desc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "images": images[]{
        "url": asset->url,
        alt
      },
      "legacyImage": image.asset->url,
      url,
      categories,
      "legacyCategory": category,
      year,
      content
    }`
  )
}

export async function getBlogPosts(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      category,
      subtitle,
      content
    }`
  )
}

export async function getBlogPost(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      date,
      category,
      subtitle,
      content
    }`,
    { slug }
  )
}
