import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Database, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pillars, services } from '../data/content'

function Home() {
  return (
    <section className="space-y-16 py-10">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-white/3 px-4 py-2 text-sm text-slate-200">
            Enterprise-grade engineering for operations-heavy industries
          </div>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Built for how your business actually works.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              We design and deploy precision-engineered custom ERPs, web ecosystems, and cloud infrastructure for industries with complex operational workflows.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-accent-400 sm:w-auto"
            >
              Schedule an Architecture Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-accent-500 sm:w-auto"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>

        <div className="glass-card rounded-[2rem] border border-slate-800/60 p-8 shadow-glow">
          <div className="flex items-center gap-4 text-slate-100">
            <div className="grid h-14 w-14 place-items-center rounded-3xl bg-slate-900/90 text-accent-300">
              <Cloud size={28} />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent-300">Trusted Delivery</p>
              <p className="mt-1 text-xl font-semibold text-white">Precision delivery from planning to launch</p>
            </div>
          </div>
          <div className="mt-8 space-y-4 text-slate-300">
            <p>Transparent engineering, secure integrations, and workflow-first systems for complex environments.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Deployment</p>
                <p className="mt-2 font-semibold text-white">99.9% availability architecture</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Security</p>
                <p className="mt-2 font-semibold text-white">Role-aware access, audit-ready logs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="glass-card rounded-3xl border border-slate-800/80 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">Core Services</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <h3 className="font-semibold text-white">Custom ERP Development</h3>
              <p className="mt-2 text-slate-400">Modular ERP systems built for traceability, approval flows, and cross-site orchestration.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <h3 className="font-semibold text-white">Cloud Infrastructure Architecture</h3>
              <p className="mt-2 text-slate-400">Resilient, monitored, and cost-controlled cloud stacks for mission-critical workloads.</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <h3 className="font-semibold text-white">Advanced Database Optimization</h3>
              <p className="mt-2 text-slate-400">Indexing, partitioning, archiving, and performance engineering for high-frequency data.</p>
            </div>
          </div>
        </motion.div>

        <section className="glass-card rounded-3xl border border-slate-800/80 p-8">
          <h2 className="text-2xl font-semibold text-white">Why enterprises choose us</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl bg-slate-900/80 p-5">
                <h3 className="font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8">
          <div className="flex items-center gap-4 text-accent-200">
            <Database size={28} />
            <div>
              <p className="text-sm uppercase tracking-[0.25em]">Data-first engineering</p>
              <p className="mt-1 text-xl font-semibold text-white">Built for high-throughput operations.</p>
            </div>
          </div>
          <div className="mt-8 space-y-4 text-slate-300">
            <p>From dairy collection to site logistics, every workflow is mapped and optimized for the data that drives decisions.</p>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Outcome</p>
              <p className="mt-2 font-semibold text-white">Faster reporting, stronger controls, and measurable operational uplift.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
