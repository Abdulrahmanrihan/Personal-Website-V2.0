import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Blog } from "@/types/Blog";
import clientConfig from './config/client-config'

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      category,
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
      category,
      subtitle,
      content
    }`,
    { slug }
  )
}
