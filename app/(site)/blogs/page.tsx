import { getBlogPosts } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default async function Project(){
    const blogs = await getBlogPosts();
    return (
    <div className="bg-white text-black">
        <Header/>   
        <div className="flex flex-row w-full">
            <div className="w-2/3 mx-auto">
            <div className="my-24">
                    <h1 className="text-5xl bold font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">All blog posts </h1>
                </div>
            <div className="flex flex-row flex-wrap mb-24">
                {blogs.map((blog) => (
                    <div key={blog._id} className="w-1/4 bg-gradient-to-r g-gradient-to-r from-green-400 via-blue-400 to-blue-600 rounded-xl p-0.5 mr-2 mb-2 hover:scale-105">
                        <div className="h-full bg-white rounded-xl p-3">
                            <div className="flex flex-row flex-wrap">
                                <Link href={`/blog/${blog.slug}`} className="mr-1 bold text-black">
                                {blog.name}
                                </Link>
                                <div className="border p-1 text-sm border-blue-200 rounded-lg">{blog.category}</div>
                            </div>
                            <div className="my-2 text-sm">{blog.subtitle}</div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <div className="my-12"></div>
        <Footer/>
    </div>
    );
}