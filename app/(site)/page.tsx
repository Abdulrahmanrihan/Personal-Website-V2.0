import { getProjects } from "@/sanity/sanity-utils";
import { getBlogPosts } from "@/sanity/sanity-utils";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Skill from "@/components/skill";

import Link from "next/link";

import { PortableText } from "@portabletext/react";

const skills = [
  {
    title: "AI & Machine Learning",
    description: "PyTorch, Keras, LangChain, LangGraph, CrewAI, FAISS, Chroma — from model training to multi-agent frameworks and RAG systems.",
    category: "AI",
    key: 1
  },
  {
    title: "Web Development",
    description: "React, Next.js, Svelte, Tailwind CSS, Node.js, FastAPI — building modern, responsive, production-grade web applications.",
    category: "Web",
    key: 2
  },
  {
    title: "MLOps & Cloud",
    description: "AWS, Docker, Databricks, CI/CD pipelines — deploying and maintaining scalable AI systems in cloud-native environments.",
    category: "Cloud",
    key: 3
  },
  {
    title: "Data & Databases",
    description: "MongoDB, SQL, Pandas, NumPy — structuring, querying, and analyzing data to power intelligent applications.",
    category: "database",
    key: 4
  }
]

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Modern, responsive websites and internal tools built with React, Next.js, and Svelte. From clean marketing pages to complex dashboards with intricate state management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5v9ZM4 12.5h10.5V9H4v3.5Z"/></svg>
    )
  },
  {
    title: "AI & RAG Systems",
    description: "Custom retrieval-augmented generation pipelines powered by LLMs for intelligent document Q&A, knowledge bases, and AI-driven internal tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="currentColor" d="M27 24a2.96 2.96 0 0 0-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0 0 24 27a3 3 0 1 0 3-3zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a2.995 2.995 0 0 0-2.816 2H18v2h6.184A2.995 2.995 0 1 0 27 13zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a3.003 3.003 0 0 0-3 3a2.966 2.966 0 0 0 .348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1 0 27 2zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/><path fill="currentColor" d="M18 6h2V4h-2a3.976 3.976 0 0 0-3 1.382A3.976 3.976 0 0 0 12 4h-1a9.01 9.01 0 0 0-9 9v6a9.01 9.01 0 0 0 9 9h1a3.976 3.976 0 0 0 3-1.382A3.976 3.976 0 0 0 18 28h2v-2h-2a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2Zm-6 20h-1a7.005 7.005 0 0 1-6.92-6H6v-2H4v-4h3a3.003 3.003 0 0 0 3-3V9H8v2a1 1 0 0 1-1 1H4.08A7.005 7.005 0 0 1 11 6h1a2.002 2.002 0 0 1 2 2v4h-2v2h2v4h-2a3.003 3.003 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h2v4a2.002 2.002 0 0 1-2 2Z"/></svg>
    )
  },
  {
    title: "Machine Learning Solutions",
    description: "End-to-end ML model development — computer vision, NLP, multi-agent frameworks, and generative AI fine-tuning (LoRA/Stable Diffusion).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" opacity=".3"/><path fill="currentColor" d="m22.65 6.21l-9.58-5.49a2.11 2.11 0 0 0-2.13 0L1.36 6.21a.5.5 0 0 0 0 .87l9.57 5.49a2.1 2.1 0 0 0 2.13 0l9.59-5.49a.51.51 0 0 0 0-.87z"/><path fill="currentColor" d="M11.5 21.81L2 16.15A.51.51 0 0 1 1.75 15.7V7.93a.5.5 0 0 1 .75-.44l9.5 5.64a.5.5 0 0 1 .25.43v7.81a.5.5 0 0 1-.75.44z"/><path fill="currentColor" d="M12.5 21.81a.5.5 0 0 1-.5-.44v-7.81a.5.5 0 0 1 .25-.43l9.5-5.64a.5.5 0 0 1 .75.44v7.77a.51.51 0 0 1-.25.43l-9.5 5.64a.51.51 0 0 1-.25.04z"/></svg>
    )
  },
  {
    title: "Data Automation & Pipelines",
    description: "Generative AI–powered extraction of unstructured data (documents, PDFs, records) into structured, queryable databases and dashboards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/></svg>
    )
  }
]

export default async function Home() {
  const projects = await getProjects();
  const blogs = await getBlogPosts();
  return(
    <div className="w-full bg-white regular">
      <Header/>

      {/* Hero */}
      <div className="mx-auto md:w-2/3 w-full px-6 md:px-0">
        <div className="my-24">
          <h1 className="text-5xl my-8 font-extrabold text-black">
            Hi, I&apos;m
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 hover:from-green-200 hover:via-green-400 hover:to-blue-400 bg-clip-text text-transparent bold"> Abdelrahman Rihan</span>.
          </h1>
          <p className="mt-3 text-xl text-gray-600 leading-relaxed max-w-2xl">
            AI Engineer &amp; Full-Stack Developer with 3+ years of experience building intelligent systems and modern web applications.
          </p>
          <div className="mt-8 flex flex-row gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform">
              View Projects
            </Link>
            <a href="mailto:abdelrahman.rihan@ejust.edu.eg" className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-500 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-0 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Skills</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap text-black mb-24">
          {skills.map((skill) =>
            <Skill key={skill.key} title={skill.title} category={skill.category} description={skill.description}/>
          )}
        </div>

        {/* Services */}
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-0 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Services</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {services.map((service, i) => (
            <div key={i} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-blue-500">{service.icon}</div>
                <h3 className="text-lg font-bold text-black">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-0 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-lg font-bold">Recent Projects</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap mb-24 w-full">
          {projects.slice(0, 2).map((project) => (
            <div key={project._id} className="w-full md:w-1/2 p-6 mx-auto flex flex-col">
              <div className="pb-3 mx-2 md:mx-0 bold text-lg text-black">
                {project.name}
              </div>
              <div className="pb-5 mx-2 md:mx-0 text-gray-700"><PortableText value={project.content}/></div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white text-sm rounded-xl p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500 w-1/2 text-center hover:scale-105 transition-transform">
                  View project
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Recent Blogs */}
        <div className="md:-ml-24 w-44 text-center bg-gradient-to-r from-green-400 to-blue-500 md:-rotate-12 rounded-lg mb-8 ml-0 p-1">
          <div className="bg-white h-full p-2">
            <p className="text-black text-xl font-bold">Recent Blogs</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between mb-24">
          {blogs.slice(0, 3).map((blog) => (
            <Link key={blog._id} href={`/blog/${blog.slug}`} className="p-4 w-full md:w-1/4 mr-3 text-black hover:scale-105 transition-transform border border-gray-100 rounded-xl mb-4 md:mb-0 hover:border-blue-200">
              <div className="flex flex-row flex-wrap gap-2 mb-2">
                <div className="text-base font-bold">{blog.name}</div>
                <div className="h-min border p-1 text-xs border-blue-200 rounded-lg text-blue-500">{blog.category}</div>
              </div>
              <div className="text-sm text-gray-600">{blog.subtitle}</div>
            </Link>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
}
