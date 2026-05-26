import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { industryOptions } from '../data/content'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    industry: 'Construction',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setError(null)

    const { data, error: submitError } = await supabase.from('leads').insert([
      {
        name: form.name,
        company: form.company,
        industry: form.industry,
        budget: form.budget,
        message: form.message,
        status: 'New'
      }
    ])

    if (submitError) {
      setStatus('error')
      setError(submitError.message)
      return
    }

    setStatus('success')
    setForm({ name: '', company: '', industry: 'Construction', budget: '', message: '' })
  }

  return (
    <section className="space-y-10 py-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">Lead Capture</p>
        <h1 className="text-4xl font-semibold text-white">Secure project intake built for enterprise workflows.</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-400">
          Share your scope, team size, industry, and project goals. Every submission is stored securely and routed to our engineering intake team.
        </p>
      </div>

      <div className="glass-card rounded-[2rem] border border-slate-800/80 p-8">
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Company Name
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              Industry
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              >
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry} className="bg-slate-950 text-slate-100">
                    {industry}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              Estimated Budget
              <input
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="e.g. $120k - $350k"
                className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-slate-300">
            Project Brief
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={6}
              required
              className="w-full rounded-3xl border border-slate-800/90 bg-slate-900/80 px-4 py-4 text-slate-100 outline-none transition focus:border-accent-500"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">Submission saved directly to your Supabase lead pipeline.</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent-400"
            >
              {status === 'sending' ? 'Sending…' : 'Submit Lead'}
            </button>
          </div>

          {status === 'success' && <p className="text-sm text-emerald-400">Lead submitted successfully. Our team will respond shortly.</p>}
          {status === 'error' && <p className="text-sm text-rose-400">Submission failed: {error}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
