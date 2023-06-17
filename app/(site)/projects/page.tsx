import { getProjects } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PortableText } from "@portabletext/react";

export default async function Project(){
    const projects = await getProjects();
    return (
    <div className="bg-white text-black">
        <Header/>
        <div className="flex flex-row w-full">
            <div className="w-2/3 mx-auto">
                <div className="my-20 flex flex-row w-full">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">All projects</h1>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(0, Math.ceil(projects.length/3)).map((project) => (
                            <div className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black" key={project._id}>
                                        {project.name}
                                    </div>
                                    <div className="mb-3 border p-1 text-sm border-blue-200 rounded-lg">{project.category}</div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className="absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max">View project</button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(Math.ceil(projects.length/3), Math.ceil(projects.length - projects.length/3)).map((project) => (
                            <div className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black" key={project._id}>
                                        {project.name}
                                    </div>
                                    <div className="mb-3 border p-1 text-sm border-blue-200 rounded-lg">{project.category}</div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className="absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max">View project</button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(Math.ceil(projects.length - projects.length/3), projects.length).map((project) => (
                            <div className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black" key={project._id}>
                                        {project.name}
                                    </div>
                                    <div className="mb-3 border p-1 text-sm border-blue-200 rounded-lg">{project.category}</div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className="absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 w-max">View project</button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}