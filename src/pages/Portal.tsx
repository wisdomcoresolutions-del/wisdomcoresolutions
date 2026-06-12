import { useEffect, useMemo, useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient'

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
  if (!isSupabaseConfigured) {
    return (
      <section className="space-y-10 py-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Client Portal</p>
          <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight">Secure admin console for blog and lead management.</h1>
          <p className="max-w-3xl text-base text-zinc-650 leading-7">
            Supabase is not configured yet. Create a local `.env` file with your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, then restart the dev server.
          </p>
        </div>
        <div className="glass-card rounded-[2rem] border border-zinc-200 p-8 bg-white shadow-sm">
          <p className="text-zinc-850 font-medium">Without Supabase configuration, the portal cannot be initialized.</p>
        </div>
      </section>
    )
  }

  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [blogs, setBlogs] = useState<BlogEntry[]>([])
  const [leads, setLeads] = useState<LeadEntry[]>([])
  const [draft, setDraft] = useState({ title: '', slug: '', excerpt: '', category: 'ERP', cover_image_url: '', content: '' })
  const [saving, setSaving] = useState(false)

  if (!isSupabaseConfigured || !supabase) {
    return (
      <section className="space-y-10 py-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Client Portal</p>
          <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight">Secure admin console for blog and lead management.</h1>
          <p className="max-w-3xl text-base text-zinc-650 leading-7">
            Supabase is not configured yet. Create a local `.env` file with your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, then restart the dev server.
          </p>
        </div>
        <div className="glass-card rounded-[2rem] border border-zinc-200 p-8 bg-white shadow-sm">
          <p className="text-zinc-850 font-medium">Without Supabase configuration, the portal cannot be initialized.</p>
        </div>
      </section>
    )
  }

  const client = supabase

  useEffect(() => {
    const sessionData = client.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: authListener } = client.auth.onAuthStateChange((_event, session) => {
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
      client.from('blogs').select('*').order('created_at', { ascending: false }),
      client.from('leads').select('*').order('created_at', { ascending: false })
    ])
    setBlogs((blogData ?? []) as BlogEntry[])
    setLeads((leadData ?? []) as LeadEntry[])
    setLoading(false)
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const { error: signInError } = await client.auth.signInWithPassword({ email, password })
    if (signInError) {
      setError(signInError.message)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await client.auth.signOut()
    setSession(null)
  }

  const handleCreateBlog = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    const { error: createError } = await client.from('blogs').insert([
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
    await client.from('leads').update({ status }).eq('id', id)
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
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">Client Portal</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 tracking-tight">Secure admin console for blog and lead management.</h1>
        <p className="max-w-3xl text-base text-zinc-650 leading-7">
          Log in to manage content, review leads, and maintain your enterprise-grade audience pipeline.
        </p>
      </div>

      {!isLoggedIn ? (
        <div className="glass-card rounded-[2rem] border border-zinc-200 p-8 md:w-3/4 bg-white shadow-sm">
          <form className="grid gap-6" onSubmit={handleLogin}>
            <label className="space-y-2 text-xs font-bold text-zinc-700 uppercase tracking-wide block">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal mt-1"
              />
            </label>
            <label className="space-y-2 text-xs font-bold text-zinc-700 uppercase tracking-wide block">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3.5 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal mt-1"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-7 py-3.5 text-xs font-semibold text-white transition hover:bg-zinc-800 shadow-sm"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
            {error && <p className="text-sm font-semibold text-rose-800">{error}</p>}
          </form>
        </div>
      ) : (
        <div className="space-y-10">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-zinc-950">Admin Dashboard</h2>
                <p className="mt-2 text-sm text-zinc-600">Manage blog posts, review incoming leads, and track your pipeline status.</p>
              </div>
              <button
                onClick={handleLogout}
                className="rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-850 hover:bg-zinc-50 transition"
              >
                Sign out
              </button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-5 shadow-sm">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Blog posts</p>
                <p className="mt-2 text-3xl font-extrabold text-zinc-950">{portalSummary.blogs}</p>
              </div>
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-5 shadow-sm">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Leads</p>
                <p className="mt-2 text-3xl font-extrabold text-zinc-950">{portalSummary.leads}</p>
              </div>
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-5 shadow-sm">
                <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">New</p>
                <p className="mt-2 text-3xl font-extrabold text-zinc-950">{portalSummary.newLeads}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="glass-card rounded-[2rem] border border-zinc-200 p-8 bg-white shadow-sm">
              <h2 className="text-xl font-bold text-zinc-950">Blog Manager</h2>
              <p className="mt-2 text-xs text-zinc-650">Create and publish content securely to the Supabase blogs table.</p>
              <form className="mt-8 grid gap-5" onSubmit={handleCreateBlog}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    value={draft.title}
                    onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                    placeholder="Title"
                    required
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                  />
                  <input
                    value={draft.slug}
                    onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
                    placeholder="Slug"
                    required
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    value={draft.excerpt}
                    onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                    placeholder="Excerpt"
                    required
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                  />
                  <input
                    value={draft.category}
                    onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                    placeholder="Category"
                    className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                  />
                </div>
                <input
                  value={draft.cover_image_url}
                  onChange={(e) => setDraft({ ...draft, cover_image_url: e.target.value })}
                  placeholder="Cover image URL"
                  className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                />
                <textarea
                  value={draft.content}
                  onChange={(e) => setDraft({ ...draft, content: e.target.value })}
                  placeholder="Content / Markdown"
                  rows={8}
                  required
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 text-sm outline-none transition focus:border-zinc-950 font-normal"
                />
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-xs font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-60 shadow-sm"
                >
                  {saving ? 'Saving…' : 'Create Blog Post'}
                </button>
                {error && <p className="text-sm font-semibold text-rose-800">{error}</p>}
              </form>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-[2rem] border border-zinc-200 p-8 bg-white shadow-sm">
                <h2 className="text-xl font-bold text-zinc-950">Lead Manager</h2>
                <p className="mt-2 text-xs text-zinc-650">Review and update incoming inquiries without leaving the portal.</p>
                <div className="mt-6 space-y-4">
                  {loading && <p className="text-sm text-zinc-600">Loading leads…</p>}
                  {leads.slice(0, 5).map((lead) => (
                    <div key={lead.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 shadow-sm">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-bold text-zinc-900 text-sm">{lead.name}</p>
                          <p className="text-xs text-zinc-500">{lead.company} · {lead.industry}</p>
                        </div>
                        <span className="rounded-full bg-white border border-zinc-200 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-600 font-bold">
                          {lead.status}
                        </span>
                      </div>
                      <p className="mt-3 text-xs leading-5 text-zinc-650 font-normal">{lead.message}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {['New', 'Contacted', 'Archiving'].map((state) => (
                          <button
                            key={state}
                            type="button"
                            onClick={() => updateLeadStatus(lead.id, state)}
                            className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-bold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
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
