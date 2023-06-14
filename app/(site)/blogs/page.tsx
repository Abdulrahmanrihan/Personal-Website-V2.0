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
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent ">All blog posts </h1>
                </div>
            <div className="flex flex-row flex-wrap mb-24">
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.slug}`} className="w-1/4 text-black hover:scale-105" key={blog._id}>
                    {blog.name}
                    </Link>
                ))}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}