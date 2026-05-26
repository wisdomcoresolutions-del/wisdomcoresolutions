import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

interface BlogEntry {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  cover_image_url: string
  content: string
}

interface LeadEntry {
  id: number
  name: string
  company: string
  industry: string
  budget: string
  message: string
  status: string
  created_at: string
}

function Portal() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState<BlogEntry[]>([])
  const [leads, setLeads] = useState<LeadEntry[]>([])
  const [draft, setDraft] = useState({ title: '', slug: '', excerpt: '', category: 'ERP', cover_image_url: '', content: '' })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const sessionData = supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (!session) return
    fetchContent()
  }, [session])

  const fetchContent = async () => {
    setLoading(true)
    const [{ data: blogData }, { data: leadData }] = await Promise.all([
      supabase.from('blogs').select('*').order('created_at', { ascending: false }),
      supabase.from('leads').select('*').order('created_at', { ascending: false })
    ])
    setBlogs((blogData ?? []) as BlogEntry[])
    setLeads((leadData ?? []) as LeadEntry[])
    setLoading(false)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
    if (signInError) {
      setError(signInError.message)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  const handleCreateBlog = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    const { error: createError } = await supabase.from('blogs').insert([
      { ...draft, author_id: session?.user?.id }
    ])
    if (createError) {
      setError(createError.message)
      setSaving(false)
      return
    }
    setDraft({ title: '', slug: '', excerpt: '', category: 'ERP', cover_image_url: '', content: '' })
    fetchContent()
    setSaving(false)
  }

  const updateLeadStatus = async (id: number, status: string) => {
    await supabase.from('leads').update({ status }).eq('id', id)
    fetchContent()
  }

  const isLoggedIn = !!session

  const portalSummary = useMemo(() => ({
    blogs: blogs.length,
    leads: leads.length,
    newLeads: leads.filter((lead) => lead.status === 'New').length
  }), [blogs, leads])

  return (
    <section className="space-y-10 py-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">Client Portal</p>
        <h1 className="text-4xl font-semibold text-white">Secure admin console for blog and lead management.</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-400">
          Log in to manage content, review leads, and maintain your enterprise-grade audience pipeline.
        </p>
      </div>

      {!isLoggedIn ? (
        <div className="glass-card rounded-[2rem] border border-slate-800/80 p-8 md:w-3/4">
          <form className="grid gap-6" onSubmit={handleLogin}>
            <label className="space-y-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent-400"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
            {error && <p className="text-sm text-rose-400">{error}</p>}
          </form>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/60 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Admin Dashboard</h2>
                <p className="mt-2 text-slate-400">Manage blog posts, review incoming leads, and track your pipeline status.</p>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-full border border-slate-700/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent-500"
              >
                Sign out
              </button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Blog posts</p>
                <p className="mt-3 text-3xl font-semibold text-white">{portalSummary.blogs}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Leads</p>
                <p className="mt-3 text-3xl font-semibold text-white">{portalSummary.leads}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">New</p>
                <p className="mt-3 text-3xl font-semibold text-white">{portalSummary.newLeads}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card rounded-[2rem] border border-slate-800/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Blog Manager</h2>
              <p className="mt-2 text-slate-400">Create and publish content securely to the Supabase blogs table.</p>
              <form className="mt-8 grid gap-5" onSubmit={handleCreateBlog}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    placeholder="Title"
                    required
                    className="rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                  />
                  <input
                    value={draft.slug}
                    onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
                    placeholder="Slug"
                    required
                    className="rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    value={draft.excerpt}
                    onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                    placeholder="Excerpt"
                    required
                    className="rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                  />
                  <input
                    value={draft.category}
                    onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                    placeholder="Category"
                    className="rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                  />
                </div>
                <input
                  value={draft.cover_image_url}
                  onChange={(e) => setDraft({ ...draft, cover_image_url: e.target.value })}
                  placeholder="Cover image URL"
                  className="rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                />
                <textarea
                  value={draft.content}
                  onChange={(e) => setDraft({ ...draft, content: e.target.value })}
                  placeholder="Content / Markdown"
                  rows={8}
                  required
                  className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
                />
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent-400 disabled:opacity-60"
                >
                  {saving ? 'Saving…' : 'Create Blog Post'}
                </button>
                {error && <p className="text-sm text-rose-400">{error}</p>}
              </form>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-[2rem] border border-slate-800/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Lead Manager</h2>
                <p className="mt-2 text-slate-400">Review and update incoming inquiries without leaving the portal.</p>
                <div className="mt-6 space-y-4">
                  {loading && <p className="text-slate-400">Loading leads…</p>}
                  {leads.slice(0, 5).map((lead) => (
                    <div key={lead.id} className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white">{lead.name}</p>
                          <p className="text-sm text-slate-400">{lead.company} · {lead.industry}</p>
                        </div>
                        <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                          {lead.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{lead.message}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['New', 'Contacted', 'Archiving'].map((state) => (
                          <button
                            key={state}
                            type="button"
                            onClick={() => updateLeadStatus(lead.id, state)}
                            className="rounded-full border border-slate-700/80 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-accent-500"
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portal
