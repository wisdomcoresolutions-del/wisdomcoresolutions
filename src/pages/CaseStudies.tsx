import { caseStudies } from '../data/content'
import { Briefcase, Layers, Rocket } from 'lucide-react'

function CaseStudies() {
  return (
    <section className="space-y-12 py-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-300">The Trust Engine</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          Complex engineering stories with measurable operational impact.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-400">
          Two deep-dives focused on dairy logistics and construction site performance, built with enterprise-grade reliability.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.title} className="glass-card rounded-[2rem] border border-slate-800/80 p-8">
            <div className="flex items-center gap-4 text-accent-200">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-900/90">
                <Briefcase size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-accent-300">{study.industry}</p>
                <h2 className="text-2xl font-semibold text-white">{study.title}</h2>
              </div>
            </div>
            <div className="mt-8 space-y-8">
              <section>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Problem Statement</p>
                <p className="mt-3 text-slate-300">{study.problem}</p>
              </section>
              <section>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Our Engineered Solution</p>
                <p className="mt-3 text-slate-300">{study.solution}</p>
              </section>
              <section>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Business Outcome</p>
                <p className="mt-3 text-slate-300">{study.outcome}</p>
              </section>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/60 p-8 md:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="text-3xl font-semibold text-white">A platform strategy for long-term enterprise resilience</h2>
          <p className="mt-4 text-slate-400">
            We don’t ship features — we design systems that survive peak demand, remote operations, and evolving business rules.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-start gap-4 rounded-3xl bg-slate-900/80 p-5">
            <div className="rounded-2xl bg-accent-500/15 p-3 text-accent-300">
              <Layers size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">Layered data strategy</p>
              <p className="mt-2 text-slate-400">Segmentation, indexing, archival, and cached APIs reduce operational load.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-3xl bg-slate-900/80 p-5">
            <div className="rounded-2xl bg-accent-500/15 p-3 text-accent-300">
              <Rocket size={20} />
            </div>
            <div>
              <p className="font-semibold text-white">Outcome-led delivery</p>
              <p className="mt-2 text-slate-400">Every implementation includes measurable metrics and operational acceptance criteria.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
