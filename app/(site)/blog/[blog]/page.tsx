import { getBlogPost } from "@/sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Coffee from "@/components/buyCoffee"
import { PortableText } from "@portabletext/react";

type Props = {
    params: {blog: string};
}

const portableTextComponents = {
    block: {
        h2: ({children}: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-black">{children}</h2>,
        h3: ({children}: any) => <h3 className="text-2xl font-bold mt-8 mb-3 text-black">{children}</h3>,
        normal: ({children}: any) => <p className="mb-5 leading-relaxed text-gray-800">{children}</p>,
        blockquote: ({children}: any) => (
            <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-6">{children}</blockquote>
        ),
    },
    list: {
        bullet: ({children}: any) => <ul className="list-disc list-inside mb-5 space-y-1 text-gray-800">{children}</ul>,
        number: ({children}: any) => <ol className="list-decimal list-inside mb-5 space-y-1 text-gray-800">{children}</ol>,
    },
    listItem: {
        bullet: ({children}: any) => <li className="ml-4">{children}</li>,
        number: ({children}: any) => <li className="ml-4">{children}</li>,
    },
    marks: {
        strong: ({children}: any) => <strong className="font-bold">{children}</strong>,
        em: ({children}: any) => <em className="italic">{children}</em>,
        underline: ({children}: any) => <span className="underline">{children}</span>,
        code: ({children}: any) => (
            <code className="bg-gray-100 text-sm font-mono px-1.5 py-0.5 rounded text-gray-800">{children}</code>
        ),
        link: ({children, value}: any) => (
            <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
                {children}
            </a>
        ),
    },
    types: {
        image: ({value}: any) => (
            <div className="my-8 rounded-xl overflow-hidden">
                <img src={value?.asset?.url} alt={value?.alt || ""} className="w-full object-cover rounded-xl" />
            </div>
        ),
    },
};

export default async function Blog({params}: Props){
    const slug = params.blog;
    const blog = await getBlogPost(slug);
    return(
        <main className="bg-white text-black">
        <Coffee/>
        <div className="flex regular flex-row z-10 sticky top-0 justify-between bg-gray-300 w-full py-5 px-20 font-bold text-white">
            <Link href="/blogs">Back</Link>
        </div>
        <div className="flex flex-row w-full">
            <div className="w-full md:w-2/3 mx-auto px-6 md:px-0">
                <div className="mb-3 mt-24 flex justify-between flex-row w-full">
                    <h1 className="text-4xl md:text-5xl bold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">{blog.name}</h1>
                    <p className="ml-2 p-2 float-right font-bold h-min rounded-xl border-2 border-blue-300 text-sm text-gray-700 whitespace-nowrap">{blog.category}</p>
                </div>
                {blog.subtitle && <div className="mb-2 text-lg text-gray-600">{blog.subtitle}</div>}
                <div className="mb-6 text-sm text-gray-400">{blog.date}</div>
                {blog.image && (
                    <div className="mb-10 rounded-xl overflow-hidden">
                        <img src={blog.image} alt={blog.name} className="w-full object-cover rounded-xl max-h-96" />
                    </div>
                )}
                <div className="mb-20 text-lg">
                    <PortableText value={blog.content} components={portableTextComponents}/>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
    );
}
