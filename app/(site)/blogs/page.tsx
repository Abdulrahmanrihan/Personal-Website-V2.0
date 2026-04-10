import { getBlogPosts } from "@/sanity/sanity-utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogPosts();
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Header />
      <div className="flex flex-row w-full">
        <div className="w-full md:w-2/3 mx-auto px-6 md:px-0">
          <div className="my-24">
            <p className="text-xs font-mono font-bold tracking-widest text-green-500 dark:text-green-400 mb-3 uppercase">{"< WRITING />"}</p>
            <h1 className="text-5xl bold font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              All blog posts
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-24">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="w-full md:w-fit bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 rounded-xl p-0.5 hover:scale-[1.02] transition-transform"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex flex-row flex-wrap items-center gap-2 mb-2">
                    <Link href={`/blog/${blog.slug}`} className="font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                      {blog.name}
                    </Link>
                    <span className="border px-2 py-0.5 text-xs rounded-lg border-blue-300 dark:border-blue-500 text-blue-500 dark:text-blue-400">
                      {blog.category}
                    </span>
                  </div>
                  {blog.subtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">{blog.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
