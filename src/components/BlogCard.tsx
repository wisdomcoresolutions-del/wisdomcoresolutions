import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  category: string
  excerpt: string
  readingTime: string
  slug: string
}

function BlogCard({ title, category, excerpt, readingTime, slug }: BlogCardProps) {
  return (
    <article className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-350 dark:hover:border-zinc-700 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-4 text-[10px] font-bold text-zinc-500 dark:text-zinc-450 uppercase tracking-widest">
          <span className="bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 px-2.5 py-0.5 rounded-full text-zinc-650 dark:text-zinc-350">
            {category}
          </span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mt-4 text-lg font-extrabold text-zinc-950 dark:text-white leading-tight tracking-tight">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-650 dark:text-zinc-400 font-medium">{excerpt}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-zinc-150 dark:border-zinc-800/80">
        <Link 
          to={`/blog?post=${slug}`} 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:opacity-90"
        >
          <span>Read Article</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
