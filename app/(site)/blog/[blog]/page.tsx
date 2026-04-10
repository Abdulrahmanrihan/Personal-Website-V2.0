import { getBlogPost } from "@/sanity/sanity-utils";
import Link from "next/link";
import Footer from "@/components/footer";
import Coffee from "@/components/buyCoffee";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { blog: string };
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-5 leading-relaxed text-gray-800 dark:text-gray-300">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 dark:text-gray-400 my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-5 space-y-1 text-gray-800 dark:text-gray-300">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-5 space-y-1 text-gray-800 dark:text-gray-300">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    underline: ({ children }: any) => <span className="underline">{children}</span>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 text-sm font-mono px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200">{children}</code>
    ),
    link: ({ children, value }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-400 transition-colors">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-xl overflow-hidden">
        <img src={value?.asset?.url} alt={value?.alt || ""} className="w-full object-cover rounded-xl" />
      </div>
    ),
  },
};

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlogPost(slug);
  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
      <Coffee />
      <div className="regular flex flex-row z-10 sticky top-0 justify-between bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 w-full py-4 px-8 md:px-20">
        <Link href="/blogs" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
          All posts
        </Link>
      </div>
      <div className="flex flex-row w-full">
        <div className="w-full md:w-2/3 mx-auto px-6 md:px-0">
          <div className="mb-3 mt-20 flex flex-col md:flex-row md:justify-between md:items-start gap-4 w-full">
            <h1 className="text-4xl md:text-5xl bold bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              {blog.name}
            </h1>
            <span className="flex-shrink-0 px-3 py-1.5 font-bold rounded-xl border-2 border-blue-300 dark:border-blue-500 text-sm text-gray-700 dark:text-gray-300 h-min">
              {blog.category}
            </span>
          </div>
          {blog.subtitle && <p className="mt-2 mb-2 text-lg text-gray-600 dark:text-gray-400">{blog.subtitle}</p>}
          <p className="mb-8 text-sm text-gray-400 dark:text-gray-500">{blog.date}</p>
          {blog.image && (
            <div className="mb-10 rounded-xl overflow-hidden">
              <img src={blog.image} alt={blog.name} className="w-full object-cover rounded-xl max-h-96" />
            </div>
          )}
          <div className="mb-20 text-lg">
            <PortableText value={blog.content} components={portableTextComponents} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
