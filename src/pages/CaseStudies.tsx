import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Layers, Rocket, CheckCircle, ArrowRight, Star, Clock } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const FILTERS = ['All', 'ERP', 'Web', 'Mobile', 'AI']

const DETAILED_CASE_STUDIES = [
  {
    title: 'Milk Dairy Management System',
    category: 'ERP',
    industry: 'Dairy / Agriculture',
    problem: 'Legacy billing and milk testing workflows slowed down daily collections and caused data drift across vendors, causing payment trust issues.',
    solution: 'Built an offline-first dairy collection platform with automated fat/SNF billing calculation tables, local database caching, and Supabase database sync.',
    techStack: ['React', 'Supabase', 'Tailwind CSS', 'SQLite', 'Node.js'],
    timeline: '10 weeks',
    results: 'Improved payout cycle by 48%, reduced settlement errors to under 0.2%, and enabled 24/7 offline operations across 12 collection centers.',
    feedback: '"WisdomCore solutions digitized our entire milk intake. Our payment calculations are now fully transparent, and operations run flawlessly offline." — Dairy Manager'
  },
  {
    title: 'Construction ERP for Site Logistics',
    category: 'ERP',
    industry: 'Construction / Supply Chain',
    problem: 'Fragmented material records, stock leakage, and slow database queries across 15+ remote construction sites blocked active execution velocity.',
    solution: 'Engineered a unified logistics ERP with indexed site inventory, predictive restocking modules, role-based approval logs, and partitioned database records.',
    techStack: ['React', 'Supabase', 'PostgreSQL', 'Docker', 'AWS'],
    timeline: '12 weeks',
    results: 'Enabled 3x faster reporting, reduced inventory write-offs by 32%, and sustained consistent database performance at 50k+ daily transactions.',
    feedback: '"Their supply chain ERP gave us absolute control over material movements. We saved millions in waste in just three months." — Director of Logistics'
  },
  {
    title: 'HMS Pro Patient Portal',
    category: 'Web',
    industry: 'Healthcare Operations',
    problem: 'Patient admission delays, manual bed-allocation errors, and pharmacy inventory sync lag resulted in operational friction.',
    solution: 'Designed and deployed a real-time Hospital Management System (HMS) with a live interactive bed allocation map and database inventory triggers.',
    techStack: ['Next.js', 'Supabase', 'Tailwind CSS', 'WebSockets', 'Prisma'],
    timeline: '8 weeks',
    results: 'Reduced patient wait times by 40%, ensured 100% billing accuracy, and reduced staff administrative overhead by 25%.',
    feedback: '"HMS Pro simplified our hospital operations. The real-time bed map alone saved our staff hours of phone calls." — Clinical Director'
  },
  {
    title: 'AI-Powered Support Assistant',
    category: 'AI',
    industry: 'Customer Support / FinTech',
    problem: 'Support team was overwhelmed by high volumes of repetitive, low-complexity API integration support tickets.',
    solution: 'Built and integrated a localized Retrieval-Augmented Generation (RAG) agent using Supabase vector DB matching for instant support response.',
    techStack: ['React', 'Python', 'Supabase Vector', 'OpenAI', 'FastAPI'],
    timeline: '6 weeks',
    results: 'Automated 35% of repetitive support tickets and resolved integration queries instantly with under 2-second average response time.',
    feedback: '"The AI assistant resolves customer queries instantly. Our developers now focus purely on building product updates." — Head of Support'
  }
]

function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'All') return DETAILED_CASE_STUDIES
    return DETAILED_CASE_STUDIES.filter((study) => study.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="space-y-12 py-10">
      <SEOHead
        title="Case Studies | Enterprise ERP & Software Projects | WisdomCore Solutions"
        description="Explore WisdomCore Solutions' enterprise project case studies — from dairy ERP systems and hospital management platforms to AI automation and cloud infrastructure deployments across India."
        keywords="ERP case study India, software project portfolio, dairy management system, hospital software India, construction ERP case study, enterprise software projects, WisdomCore portfolio"
        canonical="/case-studies"
      />
      {/* Page Header */}
      <div className="space-y-4 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">The Trust Engine</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 sm:text-5xl leading-tight tracking-tight">
          Complex engineering stories with measurable operational impact.
        </h1>
        <p className="text-base text-zinc-600 leading-7">
          Explore our portfolio of enterprise case studies, showcasing how we optimize databases, build custom workflows, and deploy resilient web apps.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="glass-card rounded-[2rem] border border-zinc-200 bg-white p-3.5 max-w-xl shadow-sm">
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-xs font-semibold transition ${
                activeFilter === filter
                  ? 'bg-zinc-950 text-white shadow-sm'
                  : 'bg-zinc-50 border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          {filteredStudies.map((study) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-white flex flex-col justify-between space-y-6 shadow-sm hover:border-zinc-350 transition-all duration-150"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5 text-zinc-900">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{study.industry}</p>
                      <h2 className="text-lg font-bold text-zinc-950 mt-0.5">{study.title}</h2>
                    </div>
                  </div>
                  <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500">
                    {study.category}
                  </span>
                </div>

                <div className="border-t border-zinc-100 pt-6 space-y-5">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Problem Statement</h4>
                    <p className="mt-1 text-zinc-700 text-xs leading-5 font-normal">{study.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Our Engineered Solution</h4>
                    <p className="mt-1 text-zinc-700 text-xs leading-5 font-normal">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Tech Stack & Timeline</h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {study.techStack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-zinc-50 border border-zinc-200 px-2.5 py-1 text-xs text-zinc-700 font-medium">
                          {tech}
                        </span>
                      ))}
                      <span className="rounded-lg bg-zinc-100 border border-zinc-200 px-2.5 py-1 text-xs text-zinc-900 font-bold flex items-center gap-1">
                        <Clock size={11} />
                        {study.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 pt-4 border-t border-zinc-100">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Outcome</span>
                  <p className="text-zinc-900 text-xs font-bold leading-5">{study.results}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-2.5">
                  <Star className="text-zinc-900 shrink-0 mt-0.5" size={13} fill="currentColor" />
                  <p className="text-zinc-650 text-[11px] italic leading-5 font-medium">{study.feedback}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Strategic Platform Callout */}
      <div className="grid gap-8 rounded-[2rem] border border-zinc-200 bg-white p-8 md:grid-cols-[1.1fr_0.9fr] shadow-sm">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-950 leading-tight">A platform strategy for long-term enterprise resilience</h2>
          <p className="text-zinc-650 text-sm leading-6">
            We don’t ship short-term fixes. We design enterprise systems capable of handling peak database workloads, remote synchronization issues, and evolving accounting workflows.
          </p>
        </div>
        <div className="grid gap-3">
          <div className="flex items-start gap-3 rounded-2xl bg-zinc-50 border border-zinc-200 p-4 shadow-sm">
            <div className="rounded-lg bg-zinc-950 p-2 text-white">
              <Layers size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">Layered Data Security</p>
              <p className="mt-1 text-xs text-zinc-500 leading-5">Row-level security policies, JWT tokens, and strict validation layers keep databases clean.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-zinc-50 border border-zinc-200 p-4 shadow-sm">
            <div className="rounded-lg bg-zinc-950 p-2 text-white">
              <Rocket size={16} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">Outcome-Led Architecture</p>
              <p className="mt-1 text-xs text-zinc-500 leading-5">Every module features concrete operational success criteria before launch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
