import { useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient'
import { industryOptions } from '../data/content'
import { Calculator, Zap, Calendar, Bot, Shield, CreditCard, BarChart, WifiOff, FileText, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const BASE_PRICES: Record<string, number> = {
  ERP: 600000,
  Web: 250000,
  Mobile: 350000,
  AI: 500000,
  Automation: 300000,
  HMS: 700000,
  POS: 200000
}

const PROJECT_TYPES = [
  { id: 'ERP', label: 'Custom ERP System', desc: 'Enterprise resources, logistics, and inventory management.' },
  { id: 'Web', label: 'Web Application', desc: 'High-performance, secure web portals and dashboards.' },
  { id: 'Mobile', label: 'Mobile Application', desc: 'iOS & Android app ecosystem with backend sync.' },
  { id: 'AI', label: 'AI Solutions', desc: 'NLP, computer vision, predictive models, and LLM fine-tuning.' },
  { id: 'Automation', label: 'Business Automation', desc: 'Automating legacy manual workflows and approvals.' },
  { id: 'HMS', label: 'Hospital/School Management', desc: 'Specialized workflow and records software.' },
  { id: 'POS', label: 'POS & Billing System', desc: 'Store inventory, GST invoices, and sales terminals.' }
]

const SCALE_MULTIPLIERS: Record<string, { label: string; mult: number; time: string; desc: string }> = {
  Startup: { label: 'Small / MVP', mult: 1.0, time: '4-6 weeks', desc: 'Core features only, simple user flow, quick time-to-market.' },
  Enterprise: { label: 'Medium / Enterprise', mult: 1.8, time: '8-12 weeks', desc: 'Multi-role auth, standard ERP controls, legacy database sync.' },
  Scale: { label: 'Large / High-Availability', mult: 3.0, time: '16-24 weeks', desc: 'Multi-region redundancy, audit logs, extreme performance SLA.' }
}

const ADDON_PRICES: Record<string, { label: string; price: number; icon: any }> = {
  ai: { label: 'AI Support Chatbot', price: 90000, icon: Bot },
  analytics: { label: 'Advanced Analytics Panel', price: 60000, icon: BarChart },
  payments: { label: 'Payment Gateway Integration', price: 40000, icon: CreditCard },
  offline: { label: 'Offline-First Sync Engine', price: 120000, icon: WifiOff },
  security: { label: 'Advanced Role-Aware Security', price: 80000, icon: Shield }
}

function Contact() {
  const [projectType, setProjectType] = useState('ERP')
  const [scale, setScale] = useState('Enterprise')
  const [addons, setAddons] = useState<string[]>([])
  
  // Form State
  const [form, setForm] = useState({
    name: '',
    company: '',
    industry: 'Construction',
    budget: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  // Toggle Addon
  const toggleAddon = (key: string) => {
    if (addons.includes(key)) {
      setAddons(addons.filter((item) => item !== key))
    } else {
      setAddons([...addons, key])
    }
  }

  // Calculate Estimations
  const calculateEstimate = () => {
    const base = BASE_PRICES[projectType] || 300000
    const scaleInfo = SCALE_MULTIPLIERS[scale] || { mult: 1.8, time: '8-12 weeks' }
    const addonsTotal = addons.reduce((sum, key) => sum + (ADDON_PRICES[key]?.price || 0), 0)
    
    const totalCost = Math.round(base * scaleInfo.mult + addonsTotal)
    const minCost = Math.round(totalCost * 0.9)
    const maxCost = Math.round(totalCost * 1.1)
    
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })
    
    return {
      minCostRaw: minCost,
      maxCostRaw: maxCost,
      costRange: `${formatter.format(minCost)} - ${formatter.format(maxCost)}`,
      timeline: scaleInfo.time
    }
  }

  const { costRange, timeline } = calculateEstimate()

  // Pre-fill fields from Calculator
  const handleApplyEstimate = () => {
    const projectLabel = PROJECT_TYPES.find(p => p.id === projectType)?.label || projectType
    const scaleLabel = SCALE_MULTIPLIERS[scale]?.label || scale
    const addonLabels = addons.map(a => ADDON_PRICES[a]?.label).join(', ')
    
    const calculatedBrief = `Project Type: ${projectLabel}
Scale: ${scaleLabel}
Required Add-ons: ${addonLabels || 'None'}
Timeline Estimate: ${timeline}

Brief Details: [Describe custom workflows or legacy integrations here...]`

    setForm({
      ...form,
      budget: timeline,
      message: calculatedBrief
    })

    // Scroll to form smoothly
    const formElement = document.getElementById('lead-form-section')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!supabase) {
      setStatus('error')
      setError('Supabase Client has not been initialized. Please check config parameters.')
      return
    }

    setStatus('sending')
    setError(null)

    const { error: submitError } = await supabase.from('leads').insert([
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
    <section className="space-y-16 py-8 md:py-16">
      <SEOHead
        title="Contact WisdomCore Solutions | Get a Free ERP & Software Consultation"
        description="Schedule a free technical consultation with WisdomCore Solutions. Get a custom ERP, cloud, AI, or mobile app scope estimate and submit your project inquiry to our engineering team."
        keywords="contact software company India, free ERP consultation, custom software quote India, hire software developers India, enterprise software inquiry, WisdomCore contact"
        canonical="/contact"
      />
      <div className="space-y-4 text-center max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">Intake Hub</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 dark:text-white sm:text-5xl leading-tight tracking-tight">
          Precision scope estimation. No guesswork.
        </h1>
        <p className="text-sm md:text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
          Estimate your digital implementation timeline in real-time, then apply your configured scope parameters directly to our inquiry system.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        {/* Estimator Configuration */}
        <div className="space-y-8">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 md:p-8 space-y-8 shadow-sm">
            <div className="flex items-center gap-3 border-b border-zinc-150 dark:border-zinc-800/80 pb-4">
              <Calculator className="text-zinc-900 dark:text-cyan-400" size={22} />
              <h2 className="text-lg font-bold text-zinc-950 dark:text-white">1. Configure Project Scope</h2>
            </div>

            {/* Project Type */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-extrabold block">Select Application Type</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition duration-150 ${
                      projectType === type.id
                        ? 'border-blue-600 dark:border-cyan-400 bg-blue-50/50 dark:bg-cyan-950/20 text-zinc-950 dark:text-white shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50'
                    }`}
                  >
                    <span className="font-bold text-sm">{type.label}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scale / Complexity */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-extrabold block">Choose Scale & Complexity</label>
              <div className="grid gap-3 sm:grid-cols-3">
                {Object.entries(SCALE_MULTIPLIERS).map(([key, info]) => (
                  <button
                    key={key}
                    onClick={() => setScale(key)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition duration-150 ${
                      scale === key
                        ? 'border-blue-600 dark:border-cyan-400 bg-blue-50/50 dark:bg-cyan-950/20 text-zinc-950 dark:text-white shadow-sm'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50'
                    }`}
                  >
                    <span className="font-bold text-sm">{info.label}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">{info.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-on Modules */}
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-extrabold block">Select Add-on Modules</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(ADDON_PRICES).map(([key, info]) => {
                  const Icon = info.icon
                  const isSelected = addons.includes(key)
                  return (
                    <button
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition duration-150 ${
                        isSelected
                          ? 'border-blue-600 dark:border-cyan-400 bg-blue-50/50 dark:bg-cyan-950/20 text-zinc-950 dark:text-white shadow-sm'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50/50'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl border ${
                        isSelected ? 'border-blue-600 dark:border-cyan-400 bg-blue-600 dark:bg-cyan-400 text-white dark:text-zinc-950' : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-500'
                      }`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-xs block text-zinc-900 dark:text-zinc-100">{info.label}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Live Estimator Result Card */}
        <div className="h-fit lg:sticky lg:top-24">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-extrabold">Scope Summary</p>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white">Estimator Results</h3>
            </div>

            <div className="border-t border-b border-zinc-150 dark:border-zinc-800/80 py-6 space-y-5">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-450 dark:text-zinc-400 font-bold">Estimated Delivery Timeline</p>
                <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-base mt-2">
                  <Calendar className="text-blue-600 dark:text-cyan-400" size={16} />
                  <span>{timeline}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyEstimate}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-xs font-semibold text-white transition hover:opacity-95 shadow-md"
            >
              <span>Apply Scope to Form</span>
              <ArrowRight size={14} />
            </button>
            
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 text-center leading-relaxed">
              *The above timeline is an early engineering estimate based on typical resource scheduling. Actual custom scopes will vary.
            </p>
          </div>
        </div>
      </div>

      {/* Form Submission Section */}
      <div id="lead-form-section" className="rounded-3xl border border-zinc-250 dark:border-zinc-800 p-8 space-y-8 max-w-5xl mx-auto shadow-sm bg-white dark:bg-zinc-900/20">
        <div className="flex items-center gap-3 border-b border-zinc-150 dark:border-zinc-800/80 pb-4">
          <FileText className="text-blue-600 dark:text-cyan-400" size={22} />
          <h2 className="text-lg font-bold text-zinc-950 dark:text-white">2. Submit Architecture Request</h2>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-bold text-zinc-650 dark:text-zinc-300 block uppercase tracking-wide">
              Your Name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="e.g. Sanjay Dhillon"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3.5 text-zinc-900 dark:text-zinc-100 text-sm outline-none transition focus:border-blue-600 dark:focus:border-cyan-400 font-normal mt-1"
              />
            </label>
            <label className="space-y-2 text-xs font-bold text-zinc-650 dark:text-zinc-300 block uppercase tracking-wide">
              Company Name
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
                placeholder="e.g. Singhal Logistics"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3.5 text-zinc-900 dark:text-zinc-100 text-sm outline-none transition focus:border-blue-600 dark:focus:border-cyan-400 font-normal mt-1"
              />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-2 text-xs font-bold text-zinc-650 dark:text-zinc-300 block uppercase tracking-wide">
              Industry Segment
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3.5 text-zinc-900 dark:text-zinc-100 text-sm outline-none transition focus:border-blue-600 dark:focus:border-cyan-400 font-normal mt-1"
              >
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry} className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
                    {industry}
                  </option>
                ))}
              </select>
            </label>
            <label className="space-y-2 text-xs font-bold text-zinc-650 dark:text-zinc-300 block uppercase tracking-wide">
              Target Launch Date / Timeline Goal
              <input
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                placeholder="e.g. 2 months, Q3 launch, immediate"
                className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3.5 text-zinc-900 dark:text-zinc-100 text-sm outline-none transition focus:border-blue-600 dark:focus:border-cyan-400 font-normal mt-1"
              />
            </label>
          </div>

          <label className="space-y-2 text-xs font-bold text-zinc-650 dark:text-zinc-300 block uppercase tracking-wide">
            Intake Project Brief
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={8}
              required
              placeholder="Describe your workflows, user roles, integrations, and performance goals..."
              className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-3.5 text-zinc-900 dark:text-zinc-100 text-sm outline-none transition focus:border-blue-600 dark:focus:border-cyan-400 font-normal mt-1"
            />
          </label>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {isSupabaseConfigured
                ? '🔒 Your information is saved directly in our Supabase CRM leads table.'
                : '⚠️ Supabase keys are missing in .env.'}
            </p>
            <button
              type="submit"
              disabled={!isSupabaseConfigured || status === 'sending'}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-xs font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 shadow-md"
            >
              {status === 'sending' ? 'Registering...' : 'Submit Architecture Scope'}
              <Zap size={14} />
            </button>
          </div>

          {status === 'success' && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/80 text-emerald-800 dark:text-emerald-400 text-center text-sm font-semibold">
              ✓ Lead submitted successfully. Our engineering team will review your calculator specifications and schedule a meeting.
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/80 text-rose-800 dark:text-rose-400 text-center text-sm font-semibold">
              ✗ Submission failed: {error}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
