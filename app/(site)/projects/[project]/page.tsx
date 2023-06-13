import { getProject } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {project: string};
}

export default async function Project({params}: Props){
    const slug = params.project;
    const project = await getProject(slug);

    return (
    <div className="bg-white text-black">
        <Header/>
        <div className="flex flex-row">
            <div className="w-1/4"></div>
            <div className="w-1/4">
                <div className="my-24">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">{project.name}</h1>
                </div>
                <PortableText value={project.content}/>
            </div>
            <div className="w-1/4"></div>
        </div>
        <Footer/>
    </div>
    );
}