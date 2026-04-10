'use client'
import Link from 'next/link'

type TickerBlog = {
  _id: string
  name: string
  slug: string
  category: string
}

export default function BlogTicker({ blogs }: { blogs: TickerBlog[] }) {
  if (!blogs.length) return null
  // Triple the items so the loop is always seamless even with few posts
  const items = [...blogs, ...blogs, ...blogs]

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-500 via-blue-500 to-blue-700 py-3 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-green-500 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-700 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-14 w-max animate-marquee pause-on-hover">
        {items.map((blog, i) => (
          <Link
            key={`${blog._id}-${i}`}
            href={`/blog/${blog.slug}`}
            className="flex items-center gap-3 whitespace-nowrap text-white font-semibold text-sm hover:text-green-100 transition-colors"
          >
            <span className="text-white/40 text-xs select-none">◆</span>
            {blog.name}
            {blog.category && (
              <span className="text-xs font-normal border border-white/30 px-2 py-0.5 rounded-full text-white/70">
                {blog.category}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
