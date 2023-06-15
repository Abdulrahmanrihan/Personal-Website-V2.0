import { getBlogPost } from "@/sanity/sanity-utils";
import Link from "next/link";
import Footer from "@/components/footer";
import Coffee from "@/components/buyCoffee"
import { PortableText } from "@portabletext/react";

type Props = {
    params: {blog: string};
}

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
            <div className="w-2/3 mx-auto">
                <div className="my-20 flex justify-between flex-row w-full">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">{blog.name}</h1>
                    <p className="ml-2 p-2 float-right font-bold h-min rounded-xl border-2 border-red-300">{blog.category}</p>
                </div>
                <div className="my-2 text-sm">{blog.subtitle}</div>
                <div className="mb-12 text-lg font-thin ">
                    <PortableText value={blog.content}/>
                </div>
            </div>
        </div>
        <Footer/>
    </main>
    );
}