import { getProjects } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ProjectCard } from "@/components/ProjectCard";

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
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
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
              <div key={project._id} className={`animate-fade-up-${Math.min(i + 1, 6)}`}>
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
