import { useEffect, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient'
import { BookOpen, Calendar, ArrowRight, X, AlertCircle, Share2, Copy, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOHead from '../components/SEOHead'

interface BlogPost {
  id: string | number
  title: string
  slug?: string
  subtitle?: string
  excerpt?: string
  content: string
  category: string
  published_at?: string
  created_at?: string
  read_time?: string
  metrics?: string
}

const STATIC_FALLBACK_POSTS: BlogPost[] = [
  {
    id: 'static-1',
    title: 'Offline-First Architecture in Dairy ERP Systems',
    slug: 'offline-first-dairy-erp',
    subtitle: 'How we solved remote synchronization and hardware failover using local SQLite caches and Supabase background sync.',
    content: `In operations-heavy industries like dairy logistics, internet connectivity is rarely guaranteed. Dairy collection centers are often located in remote regions with intermittent network connectivity. Standard SaaS options fail here because they rely on continuous cloud check-ins.

Our approach isolates remote collections into a localized offline database (SQLite) built inside local terminals. This ensures transactions are logged instantly regardless of network status. 

When a network connection is detected, a background worker reconciles local sequences with the primary PostgreSQL/Supabase database using custom conflict-resolution rules.

Key architecture rules applied:
1. Local sequence hashing to prevent double-billing.
2. Read-heavy calculations (Fat/SNF pricing grids) stored locally.
3. Multi-channel notifications via SMS triggers for instant farmer receipts.`,
    category: 'Engineering',
    published_at: '2026-06-10',
    read_time: '5 min read',
    metrics: '99.9% offline durability verified'
  },
  {
    id: 'static-2',
    title: 'Optimizing PostgreSQL Query Speeds for 50k+ Daily Site Logs',
    slug: 'optimizing-postgresql-query-speeds',
    subtitle: 'A review of partition strategies, index clustering, and database caching patterns used in modern construction supply chains.',
    content: `As construction ERP platforms scale, single-table systems begin to experience query degradation. In our LogiBuild ecosystem, daily transit entries grew exponentially, leading to 1.5s+ latency profiles.

To resolve this, we implemented horizontal table partitioning. By partitioning the transit logs table by calendar month, queries for current inventory are restricted to small, indexed tables.

Additionally, we added index configurations:
1. Composite indexing on vendor and material type ID fields.
2. Index clustering on daily timestamp ranges.
3. Redis caching layers for master vendor listings.

Following these adjustments, average latency fell to under 120ms, securing stable dashboard operations during peak hours.`,
    category: 'Database Architecture',
    published_at: '2026-06-08',
    read_time: '7 min read',
    metrics: 'PostgreSQL query speeds improved by 85%'
  }
]

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(STATIC_FALLBACK_POSTS)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(false)
  const [dbError, setDbError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function fetchBlogs() {
      if (!isSupabaseConfigured || !supabase) {
        console.warn('Supabase not configured, showing fallback blog content.')
        return
      }

      setLoading(true)
      setDbError(null)

      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          throw error
        }

        if (data && data.length > 0) {
          setPosts(data)
        }
      } catch (err: any) {
        console.error('Error fetching blogs from Supabase:', err)
        setDbError(err.message || 'Failed to connect to Supabase tables.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Auto-detect post parameter to show modal on shared link loading
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const postSlugOrId = params.get('post')
    if (postSlugOrId && posts.length > 0) {
      const found = posts.find(p => p.slug === postSlugOrId || String(p.id) === postSlugOrId)
      if (found) {
        setSelectedPost(found)
      }
    }
  }, [posts])

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post)
    const newUrl = `${window.location.pathname}?post=${post.slug || post.id}`
    window.history.pushState(null, '', newUrl)
  }

  const handleClosePost = () => {
    setSelectedPost(null)
    window.history.pushState(null, '', window.location.pathname)
  }

  return (
    <section className="space-y-12 py-10">
      <SEOHead
        title="WisdomCore Technical Ledger | ERP, Cloud & AI Engineering Blog"
        description="Read in-depth engineering insights, architecture case studies, and backend optimization strategies from WisdomCore Solutions — India's premier enterprise software consultancy."
        keywords="ERP blog India, custom software development blog, cloud architecture insights, database optimization, AI engineering, enterprise software blog, WisdomCore blog"
        canonical="/blog"
        ogType="website"
      />
      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Engineering Insights</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 sm:text-5xl leading-tight tracking-tight">
          WisdomCore Technical Ledger
        </h1>
        <p className="text-base text-zinc-650 leading-7">
          Deep-dive architecture notes, performance engineering reports, and backend optimization strategies from our active client implementations.
        </p>
      </div>

      {dbError && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs font-semibold max-w-xl">
          <AlertCircle size={16} className="text-zinc-500 shrink-0" />
          <span>Notice: {dbError} Showing local cached architecture guides.</span>
        </div>
      )}

      {loading ? (
        <div className="text-zinc-650 text-sm font-semibold">Resolving ledger files...</div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-white flex flex-col justify-between space-y-6 shadow-sm hover:border-zinc-350 transition-all duration-150"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full text-zinc-600">
                    {post.category}
                  </span>
                  <span>{post.read_time || '5 min read'}</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-zinc-950 leading-tight tracking-tight">{post.title}</h2>
                  <p className="text-zinc-650 text-xs leading-5">{post.subtitle || post.excerpt}</p>
                </div>
              </div>

              <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-medium">
                  <Calendar size={13} />
                  <span>{(post.published_at || post.created_at)?.split('T')[0] || 'June 2026'}</span>
                </div>
                <button
                  onClick={() => handleOpenPost(post)}
                  className="flex items-center gap-1.5 text-xs font-bold text-zinc-900 hover:text-zinc-800"
                >
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Dynamic Overlay Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 backdrop-blur-sm p-4 md:p-6"
            onClick={handleClosePost}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] border border-zinc-200 bg-white p-6 md:p-10 space-y-6 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClosePost}
                className="absolute top-5 right-5 h-8 w-8 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 flex items-center justify-center text-zinc-650 transition"
              >
                <X size={15} />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  <span className="bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-full text-zinc-600">
                    {selectedPost.category}
                  </span>
                  <span>{selectedPost.read_time || '5 min read'}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                  {selectedPost.title}
                </h2>
                <p className="text-zinc-600 text-sm leading-6 italic">
                  {selectedPost.subtitle || selectedPost.excerpt}
                </p>
              </div>

              {/* Dynamic Social Sharing Utility */}
              {(() => {
                const shareUrl = `${window.location.origin}/blog?post=${selectedPost.slug || selectedPost.id}`
                const shareText = encodeURIComponent(`Read this engineering insight from WisdomCore: "${selectedPost.title}"`)
                const shareOnWhatsApp = `https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(shareUrl)}`
                const shareOnLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
                const shareOnTwitter = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`
                const shareOnFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`

                return (
                  <div className="flex flex-wrap items-center gap-2.5 py-4 border-y border-zinc-100 text-xs">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1.5 mr-1.5">
                      <Share2 size={13} /> Share
                    </span>
                    
                    <a
                      href={shareOnWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition font-medium"
                    >
                      WhatsApp
                    </a>

                    <a
                      href={shareOnLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100 transition font-medium"
                    >
                      LinkedIn
                    </a>

                    <a
                      href={shareOnTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 transition font-medium"
                    >
                      Twitter / X
                    </a>

                    <a
                      href={shareOnFacebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 transition font-medium"
                    >
                      Facebook
                    </a>

                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(shareUrl)
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 transition font-medium sm:ml-auto"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                )
              })()}

              {selectedPost.metrics && (
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-bold">
                  📊 Metrics Achieved: {selectedPost.metrics}
                </div>
              )}

              <div className="border-t border-zinc-100 pt-6">
                <p className="text-zinc-800 text-sm leading-7 whitespace-pre-wrap font-normal">
                  {selectedPost.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blog
