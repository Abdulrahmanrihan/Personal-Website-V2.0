import { getProjects } from "@/sanity/sanity-utils";
import { getBlogPosts } from "@/sanity/sanity-utils";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Skill from "@/components/skill";
import BlogTicker from "@/components/BlogTicker";
import TypeWriter from "@/components/TypeWriter";

import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/Project";

// ── Data ───────────────────────────────────────────────────────────────

const skills = [
  {
    title: "AI & Machine Learning",
    description: "PyTorch, LangChain, LangGraph, CrewAI, Qdrant — from model training to multi-agent frameworks and production RAG systems.",
    category: "AI",
    key: 1,
  },
  {
    title: "Web Development",
    description: "React, Next.js, Svelte, Tailwind CSS, Node.js, FastAPI — building modern, responsive, production-grade web applications.",
    category: "Web",
    key: 2,
  },
  {
    title: "MLOps & Cloud",
    description: "AWS, Docker, Databricks, CI/CD pipelines — deploying and maintaining scalable AI systems in cloud-native environments.",
    category: "Cloud",
    key: 3,
  },
  {
    title: "Data & Databases",
    description: "MongoDB, SQL, Pandas, NumPy — structuring, querying, and analysing data to power intelligent applications.",
    category: "database",
    key: 4,
  },
]

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Modern, responsive websites and internal tools built with React, Next.js, and Svelte. From clean marketing pages to complex dashboards.",
    gradient: "from-blue-500 to-cyan-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5v9ZM4 12.5h10.5V9H4v3.5Z" />
      </svg>
    ),
  },
  {
    title: "AI & RAG Systems",
    description:
      "Custom retrieval-augmented generation pipelines powered by LLMs for intelligent document Q&A, knowledge bases, and AI-driven internal tooling.",
    gradient: "from-purple-500 to-blue-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
        <path d="M27 24a2.96 2.96 0 0 0-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0 0 24 27a3 3 0 1 0 3-3zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a2.995 2.995 0 0 0-2.816 2H18v2h6.184A2.995 2.995 0 1 0 27 13zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a3.003 3.003 0 0 0-3 3a2.966 2.966 0 0 0 .348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1 0 27 2zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/>
        <path d="M18 6h2V4h-2a3.976 3.976 0 0 0-3 1.382A3.976 3.976 0 0 0 12 4h-1a9.01 9.01 0 0 0-9 9v6a9.01 9.01 0 0 0 9 9h1a3.976 3.976 0 0 0 3-1.382A3.976 3.976 0 0 0 18 28h2v-2h-2a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2Zm-6 20h-1a7.005 7.005 0 0 1-6.92-6H6v-2H4v-4h3a3.003 3.003 0 0 0 3-3V9H8v2a1 1 0 0 1-1 1H4.08A7.005 7.005 0 0 1 11 6h1a2.002 2.002 0 0 1 2 2v4h-2v2h2v4h-2a3.003 3.003 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h2v4a2.002 2.002 0 0 1-2 2Z"/>
      </svg>
    ),
  },
  {
    title: "Machine Learning Solutions",
    description:
      "End-to-end ML model development — computer vision, NLP, multi-agent frameworks, and generative AI fine-tuning (LoRA / Stable Diffusion).",
    gradient: "from-green-400 to-teal-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5l10-5l-10-5M2 17l10 5l10-5M2 12l10 5l10-5" />
      </svg>
    ),
  },
  {
    title: "Data Automation & Pipelines",
    description:
      "Generative AI–powered extraction of unstructured data (documents, PDFs, records) into structured, queryable databases and dashboards.",
    gradient: "from-orange-400 to-pink-500",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z" />
      </svg>
    ),
  },
]

// ── Sub-components ─────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-xs font-mono font-bold tracking-widest text-green-500 dark:text-green-400 mb-3 uppercase">
      {"< "}{text}{" />"}
    </p>
  )
}

function TerminalProjectCard({ project }: { project: Project }) {
  const slug = project.name.toLowerCase().replace(/\s+/g, "-")
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10 group flex flex-col">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-xs font-mono text-gray-400 dark:text-gray-500 truncate">
          ~/projects/{slug}
        </span>
      </div>
      {/* body */}
      <div className="flex flex-col flex-1 p-6 bg-white dark:bg-gray-900">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.name}</h3>
          {(project.categories?.[0] || project.legacyCategory) && (
            <span className="flex-shrink-0 text-xs border border-blue-400 dark:border-blue-500 text-blue-500 dark:text-blue-400 px-2 py-0.5 rounded-lg">
              {project.categories?.[0] ?? project.legacyCategory}
            </span>
          )}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed mb-5">
          <PortableText value={project.content} />
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
          >
            View project
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────

export default async function Home() {
  const projects = await getProjects()
  const blogs = await getBlogPosts()

  return (
    <div className="bg-white dark:bg-gray-900 regular">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080e1a] min-h-[88vh] flex items-center">
        {/* Aurora blobs */}
        <div className="absolute top-10 left-1/4 w-[520px] h-[520px] bg-blue-600/20 rounded-full blur-[120px] animate-aurora-1 pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[420px] h-[420px] bg-green-500/15 rounded-full blur-[100px] animate-aurora-2 pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[280px] h-[280px] bg-purple-600/10 rounded-full blur-[80px] animate-aurora-3 pointer-events-none" />
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines pointer-events-none" />

        <div className="relative z-10 mx-auto md:w-2/3 w-full px-6 md:px-0 py-32">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-green-400 border border-green-400/30 px-3 py-1.5 rounded-full mb-8 bg-green-400/5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
            Available for opportunities
          </div>

          {/* Name with glitch on hover */}
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight bold mb-4 glitch"
            data-text="Abdelrahman Rihan."
          >
            Abdelrahman<br />
          </h1>

          {/* Typewriter */}
          <div className="h-8 flex items-center mb-6">
            <TypeWriter />
          </div>

          <p className="text-gray-400 max-w-lg leading-relaxed mb-10">
            AI Engineer intern at Enza Group. Building production RAG systems, ML pipelines, and modern web applications since 2022.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
            >
              View Projects
            </Link>
            <a
              href="mailto:abdelrahman.rihan@ejust.edu.eg"
              className="px-6 py-3 rounded-lg text-sm font-semibold text-gray-300 border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── BLOG TICKER ──────────────────────────────────────── */}
      <BlogTicker blogs={blogs} />

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <div className="mx-auto md:w-2/3 w-full px-6 md:px-0">

        {/* SKILLS */}
        <section className="py-20">
          <SectionLabel text="EXPERTISE" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 ">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div key={skill.key} className={`animate-fade-up-${i + 1} h-full`}>
                <Skill title={skill.title} category={skill.category} description={skill.description} />
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <SectionLabel text="WHAT I DO" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <div
                key={i}
                className={`animate-fade-up-${i + 1} rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/5 transition-all group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{service.title}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECENT PROJECTS */}
        <section className="py-20 border-t border-gray-100 dark:border-gray-800">
          <SectionLabel text="WORK" />
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Recent Projects</h2>
            <Link href="/projects" className="text-sm text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1">
              All projects
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <TerminalProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
