import { getProjects } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PortableText } from "@portabletext/react";
import { Project, ProjectImage } from "@/types/Project";

// ── Category icons (black-bg squares) ─────────────────────────────────
// Lookup is case-insensitive — normalise before matching

const ICONS: Record<string, JSX.Element> = {
  "web development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  "full-stack": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
    </svg>
  ),
  "machine learning": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="currentColor">
      <path d="M27 24a2.96 2.96 0 0 0-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0 0 24 27a3 3 0 1 0 3-3zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a2.995 2.995 0 0 0-2.816 2H18v2h6.184A2.995 2.995 0 1 0 27 13zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a3.003 3.003 0 0 0-3 3a2.966 2.966 0 0 0 .348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1 0 27 2zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/>
      <path d="M18 6h2V4h-2a3.976 3.976 0 0 0-3 1.382A3.976 3.976 0 0 0 12 4h-1a9.01 9.01 0 0 0-9 9v6a9.01 9.01 0 0 0 9 9h1a3.976 3.976 0 0 0 3-1.382A3.976 3.976 0 0 0 18 28h2v-2h-2a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2Zm-6 20h-1a7.005 7.005 0 0 1-6.92-6H6v-2H4v-4h3a3.003 3.003 0 0 0 3-3V9H8v2a1 1 0 0 1-1 1H4.08A7.005 7.005 0 0 1 11 6h1a2.002 2.002 0 0 1 2 2v4h-2v2h2v4h-2a3.003 3.003 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h2v4a2.002 2.002 0 0 1-2 2Z"/>
    </svg>
  ),
  "computer vision": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  ),
  "nlp & rag": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
    </svg>
  ),
  "data engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4S4 11.21 4 9m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4S4 16.21 4 14Z"/>
    </svg>
  ),
  "devops & cloud": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  ),
  "python": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0ZM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052Z"/>
      <path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24Zm3.206-1.85c-.579 0-1.046-.47-1.046-1.052 0-.581.467-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052Z"/>
    </svg>
  ),
  "mobile development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
    </svg>
  ),
  "flutter": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0L2.3 12L6 15.7L21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
    </svg>
  ),
  "game development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/>
    </svg>
  ),
  "unity 3d": (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.11 17H7.5l-4.91-5L7.5 7h2.61l1.31-2.26L18.21 3l1.87 6.74L18.77 12l1.31 2.26L18.21 21l-6.79-1.74L10.11 17m.14-.25l5.13 1.38L12.42 13H6.5l3.75 3.75m6.87.38L18.5 12l-1.38-5.13L14.15 12l2.97 5.13m-6.87-9.88L6.5 11h5.92l2.96-5.13-5.13 1.38Z"/>
    </svg>
  ),
}

const FALLBACK_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
)

function getIcon(category: string): JSX.Element {
  return ICONS[category?.toLowerCase().trim()] ?? FALLBACK_ICON
}

/** Merge new categories[] with legacy single category string */
function getCategories(project: Project): string[] {
  if (project.categories?.length) return project.categories
  if (project.legacyCategory) return [project.legacyCategory]
  return []
}

// ── Sub-components ─────────────────────────────────────────────────────

function getImages(project: Project): ProjectImage[] {
  return project.images?.length
    ? project.images
    : project.legacyImage
      ? [{ url: project.legacyImage, alt: "" }]
      : []
}

function CardFanRest({ imgs, name }: { imgs: ProjectImage[]; name: string }) {
  if (!imgs.length) return null
  return (
    <div className="card-fan-rest flex-shrink-0">
      {imgs.slice(0, 4).map((img, i) => (
        <img key={i} src={img.url} alt={img.alt || name} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const imgs = getImages(project)
  const hasImages = imgs.length > 0
  const cats = getCategories(project)

  return (
    <div className={`project-card${hasImages ? " has-images" : ""} h-full flex flex-col rounded-2xl
                    border border-gray-200 dark:border-gray-800
                    bg-white dark:bg-gray-900
                    hover:border-green-400/60 dark:hover:border-green-500/40
                    hover:shadow-[0_0_0_1px_rgba(74,222,128,0.25),0_12px_40px_rgba(59,130,246,0.1)]
                    transition-all duration-300 overflow-hidden hover:z-20 relative`}>

      {/* ── All blurable card content ─── */}
      <div className="card-blurable h-full flex flex-col">

        {/* Card header */}
        <div className="px-5 pt-5 pb-4 flex items-start justify-between gap-3">
          {/* Category icon badges */}
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            {cats.length > 0 ? cats.map((cat) => (
              <div key={cat} className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-7 h-7 rounded-md bg-gray-900 dark:bg-black flex items-center justify-center text-white">
                  {getIcon(cat)}
                </div>
                <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wide uppercase">
                  {cat}
                </span>
              </div>
            )) : (
              <div className="w-7 h-7 rounded-md bg-gray-900 dark:bg-black flex items-center justify-center text-white">
                {FALLBACK_ICON}
              </div>
            )}
          </div>
          {project.year && (
            <span className="flex-shrink-0 text-xs font-mono font-bold px-2.5 py-1 rounded-full
                             bg-gray-950 dark:bg-black text-green-400 border border-gray-700 dark:border-gray-600">
              {project.year}
            </span>
          )}
        </div>

        {/* Gradient divider */}
        <div className="mx-5 h-px bg-gradient-to-r from-green-400/40 via-blue-500/40 to-transparent mb-5" />

        {/* Body */}
        <div className="px-5 flex-1 flex flex-col">
          <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2 bold leading-snug">
            {project.name}
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
            <PortableText value={project.content} />
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 pb-5 pt-4 flex items-end justify-between gap-4 mt-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-blue-500 hover:text-blue-400 transition-colors flex-shrink-0"
            >
              View project
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          ) : (
            <span className="text-xs text-gray-400 dark:text-gray-600 font-mono flex-shrink-0">
              Closed source
            </span>
          )}
          <CardFanRest imgs={imgs} name={project.name} />
        </div>
      </div>

      {/* ── Expanded image overlay (shown on card hover) ─── */}
      {hasImages && (
        <div className="fan-overlay">
          {imgs.slice(0, 4).map((img, i) => (
            <img key={i} src={img.url} alt={img.alt || project.name} />
          ))}
        </div>
      )}
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────

export default async function Projects() {
  const projects = await getProjects()

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Header />
      <div className="mx-auto md:w-2/3 w-full px-6 md:px-0 py-20">

        <p className="text-xs font-mono font-bold tracking-widest text-green-500 dark:text-green-400 mb-3 uppercase">
          {"< WORK />"}
        </p>
        <div className="flex items-end justify-between mb-12">
          <h1 className="text-5xl font-extrabold bold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            All Projects
          </h1>
          <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {projects.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-20">No projects yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start pb-20">
            {projects.map((project, i) => (
              <div key={project._id} className={`animate-fade-up-${Math.min(i + 1, 6)} h-full`}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  )
}
