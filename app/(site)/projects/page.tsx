import { getProjects } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PortableText } from "@portabletext/react";


const projectIcons: {[key: string]: JSX.Element} = {
    "Python": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clip-path="url(#akarIconsPythonFill0)"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0ZM8.708 1.85c.578 0 1.046.47 1.046 1.052c0 .581-.468 1.051-1.046 1.051c-.579 0-1.046-.47-1.046-1.051c0-.582.467-1.052 1.046-1.052Z"/><path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24Zm3.206-1.85c-.579 0-1.046-.47-1.046-1.052c0-.581.467-1.051 1.046-1.051c.578 0 1.046.47 1.046 1.051c0 .582-.468 1.052-1.046 1.052Z"/></g><defs><clipPath id="akarIconsPythonFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>,
    "Web development": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5v9ZM4 12.5h10.5V9H4v3.5Z"/></svg>,
    "Flutter": <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M14.314 0L2.3 12L6 15.7L21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468l6.46-6.46h-7.37z"/></svg>,
   "Machine learning":<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M27 24a2.96 2.96 0 0 0-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0 0 24 27a3 3 0 1 0 3-3zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a2.995 2.995 0 0 0-2.816 2H18v2h6.184A2.995 2.995 0 1 0 27 13zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm0-15a3.003 3.003 0 0 0-3 3a2.966 2.966 0 0 0 .348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1 0 27 2zm0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1z"/><path fill="currentColor" d="M18 6h2V4h-2a3.976 3.976 0 0 0-3 1.382A3.976 3.976 0 0 0 12 4h-1a9.01 9.01 0 0 0-9 9v6a9.01 9.01 0 0 0 9 9h1a3.976 3.976 0 0 0 3-1.382A3.976 3.976 0 0 0 18 28h2v-2h-2a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2Zm-6 20h-1a7.005 7.005 0 0 1-6.92-6H6v-2H4v-4h3a3.003 3.003 0 0 0 3-3V9H8v2a1 1 0 0 1-1 1H4.08A7.005 7.005 0 0 1 11 6h1a2.002 2.002 0 0 1 2 2v4h-2v2h2v4h-2a3.003 3.003 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h2v4a2.002 2.002 0 0 1-2 2Z"/></svg>,
    "Unity 3D":<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M10.11 17H7.5l-4.91-5L7.5 7h2.61l1.31-2.26L18.21 3l1.87 6.74L18.77 12l1.31 2.26L18.21 21l-6.79-1.74L10.11 17m.14-.25l5.13 1.38L12.42 13H6.5l3.75 3.75m6.87.38L18.5 12l-1.38-5.13L14.15 12l2.97 5.13m-6.87-9.88L6.5 11h5.92l2.96-5.13l-5.13 1.38Z"/></svg>,
}

export default async function Project(){
    const projects = await getProjects();
    return (
    <div className="bg-white text-black">
        <Header/>
        <div className="flex flex-row w-full">
            <div className="w-2/3 mx-auto">
                <div className="my-20 flex flex-row w-full">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text bold text-transparent ">All projects</h1>
                </div>
                <div className="hidden md:flex flex-row">
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(0, Math.ceil(projects.length/3)).map((project) => (
                            <div key={project._id} className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black">
                                        {project.name}
                                    </div>
                                    <div className="mb-2 flex flex-row border border-blue-400 rounded-lg">
                                        <div className="m-1">{projectIcons[project.category]}</div>
                                        <div className="m-1 text-sm ">{project.category}</div>
                                    </div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className={project.url? "absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max": 'hidden'}>View project</button></a>
                                    <div className={project.url? 'hidden' : 'text-sm'}>Finished</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(Math.ceil(projects.length/3), Math.ceil(projects.length - projects.length/3)).map((project) => (
                            <div key={project._id} className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black">
                                        {project.name}
                                    </div>
                                    <div className="mb-2 flex flex-row border border-blue-400 rounded-lg">
                                        <div className="m-1">{projectIcons[project.category]}</div>
                                        <div className="m-1 text-sm ">{project.category}</div>
                                    </div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className={project.url? "absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max": 'hidden'}>View project</button></a>
                                    <div className={project.url? 'hidden' : 'text-sm text-gray-500'}>Finished</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col w-1/3 mb-24">
                        {projects.slice(Math.ceil(projects.length - projects.length/3), projects.length).map((project) => (
                            <div key={project._id} className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mr-2 mb-2">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black">
                                        {project.name}
                                    </div>
                                    <div className="mb-2 flex flex-row border border-blue-400 rounded-lg">
                                        <div className="m-1">{projectIcons[project.category]}</div>
                                        <div className="m-1 text-sm ">{project.category}</div>
                                    </div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className={project.url? "absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max": 'hidden'}>View project</button></a>
                                    <div className={project.url? 'hidden' : 'text-sm text-gray-500'}>Finished</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:hidden flex flex-col">
                        {projects.map((project) => (
                            <div key={project._id} className="h-min bg-gradient-to-r from-blue-500 via-green-400 to-green-600 rounded-xl p-0.5 mb-6">
                                <div className="relative bg-white p-3 rounded-xl h-full items-center flex flex-col ">
                                    <div className="pb-2 bold text-lg text-black">
                                        {project.name}
                                    </div>
                                    <div className="mb-2 flex flex-row border border-blue-400 rounded-lg">
                                        <div className="m-1">{projectIcons[project.category]}</div>
                                        <div className="m-1 text-sm ">{project.category}</div>
                                    </div>
                                    <div className="mb-12"><PortableText value={project.content}/></div>
                                    <a className="rounded-lg" href={project.url}><button className={project.url? "absolute bottom-0 text-white text-sm rounded-lg p-2 m-2 bg-gradient-to-r from-green-400 to-blue-500  hover:scale-105 w-max": 'hidden'}>View project</button></a>
                                    <div className={project.url? 'hidden' : 'text-sm text-gray-500'}>Finished</div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}