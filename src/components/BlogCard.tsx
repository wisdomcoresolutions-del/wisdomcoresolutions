import { Link } from 'react-router-dom'

interface BlogCardProps {
  title: string
  category: string
  excerpt: string
  readingTime: string
  slug: string
}

function BlogCard({ title, category, excerpt, readingTime, slug }: BlogCardProps) {
  return (
    <article className="glass-card rounded-3xl border border-slate-800/80 p-6 transition hover:-translate-y-1 hover:border-accent-500/50">
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-accent-300">
        <span>{category}</span>
        <span>{readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400">{excerpt}</p>
      <Link to={`/blog#${slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-200">
        Read case study
      </Link>
    </article>
  )
}

export default BlogCard
