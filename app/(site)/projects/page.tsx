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
            <div className="flex flex-row flex-wrap mb-24">
                {projects.map((project) => (
                    <>
                    <div className="w-1/4 text-black hover:scale-105" key={project._id}>
                        {project.name}
                    </div>
                    <button><link href={project.url}>View project</link></button>
                    </>
                ))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}