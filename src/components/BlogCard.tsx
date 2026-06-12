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
    <article className="glass-card rounded-3xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-350 shadow-sm">
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wider text-zinc-500 font-bold">
        <span>{category}</span>
        <span>{readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-zinc-950 tracking-tight">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-zinc-600 font-normal">{excerpt}</p>
      <Link to={`/blog#${slug}`} className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-zinc-950 hover:text-zinc-800">
        Read case study
      </Link>
    </article>
  )
}

export default BlogCard
