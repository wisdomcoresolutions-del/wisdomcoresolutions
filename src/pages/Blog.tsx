import { useMemo, useState } from 'react'
import { Search, Tag } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/content'

const categories = ['ERP', 'Database', 'Case Studies', 'Cloud']

function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category
      const matchesQuery = [post.title, post.excerpt, post.category]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <section className="space-y-10 py-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">Blog & Insights</p>
        <h1 className="text-4xl font-semibold text-white">Content for CTOs, IT directors, and engineering leaders.</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-400">
          Technical-but-accessible articles on ERP, database engineering, cloud architecture, and complex software operations.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-[2rem] border border-slate-800/80 p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search enterprise topics"
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 py-4 pl-12 pr-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCategory('All')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === 'All' ? 'bg-accent-500 text-slate-950' : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                All
              </button>
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === item ? 'bg-accent-500 text-slate-950' : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/60 p-8">
          <div className="flex items-center gap-3 text-accent-200">
            <Tag size={22} />
            <h2 className="text-xl font-semibold text-white">Priority reads</h2>
          </div>
          <p className="mt-4 text-slate-400">
            Curated articles that connect technical strategy with business outcomes for hard-pressed operations teams.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 text-slate-400">
          No posts matched your search. Try broader keywords or select a different category.
        </div>
      )}
    </section>
  )
}

export default Blog
