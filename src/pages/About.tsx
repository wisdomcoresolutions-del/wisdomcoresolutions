import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin, Users, Briefcase, Award, Target, Cpu, Globe,
  Leaf, Milk, ChefHat, Star, Wallet, ArrowRight, Zap, Heart
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

const STATS = [
  { value: '10+', label: 'Successful Projects' },
  { value: '5', label: 'Team Members' },
  { value: '5+', label: 'Industries Served' },
  { value: '2026', label: 'Officially Launched' },
]

const INDUSTRIES = [
  {
    icon: Leaf,
    name: 'Agriculture & Mandi Trade',
    desc: 'Commission agent ledgers, Aadat management systems, and digital grain mandi trade workflows for traditional agricultural businesses.',
  },
  {
    icon: Milk,
    name: 'Dairy Business',
    desc: 'Automated fat/SNF billing calculation, milk collection management, and real-time vendor payment systems for dairy operations.',
  },
  {
    icon: ChefHat,
    name: 'Food, Beverage & Hospitality',
    desc: 'Modern cafe websites, hotel digital outreach, and F&B business management platforms with online presence optimization.',
  },
  {
    icon: Star,
    name: 'Astrology & Vedic Sciences',
    desc: 'Astronomical calculation dashboards, Vedic Kundli generation engines, and astrology practice management software.',
  },
  {
    icon: Wallet,
    name: 'Personal Finance',
    desc: 'Intelligent expense tracking applications, budget management tools, and personal finance dashboards for individuals and families.',
  },
]

const VALUES = [
  {
    title: 'Precision Engineering',
    desc: 'We do not build generic software. Every system is architected from scratch to fit your exact business rules, workflows, and operational constraints.',
  },
  {
    title: 'Client-First Transparency',
    desc: 'No hidden costs, no vague timelines. We work as an extension of your team — with direct communication and honest project scoping from day one.',
  },
  {
    title: 'Rooted in Real India',
    desc: 'Based in Sirsa, Haryana, we understand the ground realities of Indian businesses — from mandi traders to dairy farmers — and build software that works for them.',
  },
  {
    title: 'Future-Ready Architecture',
    desc: 'Every solution we deliver is built for scale. Whether you have 10 users today or 10,000 tomorrow, our architecture grows with your business.',
  },
]

const PROJECTS = [
  { name: 'Milk Dairy Management System', category: 'Agriculture / Dairy' },
  { name: 'Mandi Solutions', category: 'Agriculture / Trade' },
  { name: 'Daily Kharcha', category: 'Personal Finance' },
  { name: 'Vedic Kundli Dashboard', category: 'Astrology / Tech' },
  { name: 'Coffea Hisar', category: 'Food & Beverage' },
]

function About() {
  return (
    <section className="space-y-20 py-8 md:py-16">
      <SEOHead
        title="About WisdomCore Solutions | Custom Software Company Sirsa, Haryana"
        description="WisdomCore Solutions is a custom software development company based in Sirsa, Haryana, founded by Anirudh Sharma. We build ERP systems, web apps, AI automation, and IoT solutions for businesses across India."
        keywords="WisdomCore Solutions about, software company Sirsa Haryana, Anirudh Sharma developer, custom ERP India, dairy software company, mandi software India, enterprise software Haryana"
        canonical="/about"
      />

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-8 md:p-16 shadow-sm">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white leading-tight tracking-tight">
            Built in Sirsa.<br />Engineered for India.
          </h1>
          <p className="text-xs md:text-sm text-zinc-605 dark:text-zinc-400 leading-relaxed">
            WisdomCore Solutions is a precision software engineering company founded by <strong className="text-zinc-900 dark:text-white">Anirudh Sharma</strong> in Sirsa, Haryana. We started with a simple but powerful belief — that traditional Indian businesses deserve the same quality of software that large corporations use, built around <em>their</em> workflows, not the other way around.
          </p>
          <p className="text-xs md:text-sm text-zinc-605 dark:text-zinc-400 leading-relaxed">
            From automating dairy fat-billing calculations for local milk collection centers to digitizing Aadat ledgers for commission agents, we have spent years solving real, on-ground operational challenges with technology. Today, WisdomCore officially serves clients pan-India and beyond with a focused team of five engineers and designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-xs font-semibold text-white hover:opacity-95 transition shadow-sm"
            >
              <span>Work with us</span>
              <ArrowRight size={13} />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-3 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              View our work
            </Link>
          </div>
        </div>

        {/* Decorative badge */}
        <div className="absolute top-8 right-8 hidden md:flex flex-col items-center justify-center w-28 h-28 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 shadow-sm">
          <span className="text-2xl font-extrabold text-zinc-950 dark:text-white">2026</span>
          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mt-1">Est.</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-blue-600 dark:text-cyan-400">{stat.value}</p>
            <p className="mt-1.5 text-[9px] text-zinc-550 dark:text-zinc-450 font-bold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Founder */}
      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-8 md:p-12 shadow-sm">
        <div className="grid gap-10 md:grid-cols-[auto_1fr] items-start">
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <Users size={36} className="text-zinc-400 dark:text-zinc-500" />
            </div>
            <div className="text-center">
              <p className="font-bold text-zinc-950 dark:text-white text-sm">Anirudh Sharma</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Founder & Lead Engineer</p>
              <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                <MapPin size={11} />
                <span>Sirsa, Haryana</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Founder profile</p>
            <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Engineering solutions from the heart of Haryana.
            </h2>
            <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Anirudh Sharma is a full-stack engineer and systems architect with deep expertise in building complex, data-intensive applications for traditional industries. Having grown up around the ground realities of agricultural trade, dairy operations, and local business challenges, he founded WisdomCore Solutions to bridge the technology gap for businesses that conventional software companies routinely overlook.
            </p>
            <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              His technical stack spans React.js, Node.js, Python, PostgreSQL, Supabase, Arduino IoT, and AI/LLM integration — enabling WisdomCore to build everything from simple billing tools to sophisticated enterprise ERP systems and AI-driven automation pipelines.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-950 dark:bg-zinc-900/20 p-8 md:p-14 shadow-sm text-center space-y-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#3b82f6/5_95%)] pointer-events-none" />
        <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">Our Mission</p>
        <blockquote className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white leading-snug max-w-3xl mx-auto">
          "Empowering traditional businesses and modern startups with intelligent automation, custom software, and robust web solutions."
        </blockquote>
        <p className="text-zinc-550 dark:text-zinc-400 text-xs md:text-sm max-w-xl mx-auto">
          We believe technology should adapt to your business — not force your business to adapt to technology.
        </p>
      </div>

      {/* Values */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">What We Stand For</p>
          <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Our Core Values</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {VALUES.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-7 shadow-sm space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
            >
              <div className="w-8 h-8 rounded-xl bg-zinc-950 dark:bg-zinc-800 flex items-center justify-center border border-zinc-200 dark:border-zinc-700">
                <Heart size={14} className="text-white dark:text-cyan-400" />
              </div>
              <h3 className="font-bold text-zinc-950 dark:text-white text-base">{val.title}</h3>
              <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">Domain Expertise</p>
          <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Industries We've Transformed</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-7 shadow-sm space-y-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition"
              >
                <div className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850 flex items-center justify-center">
                  <Icon size={17} className="text-blue-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-bold text-zinc-950 dark:text-white text-sm">{ind.name}</h3>
                <p className="text-xs text-zinc-605 dark:text-zinc-450 leading-relaxed">{ind.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-8 md:p-12 shadow-sm space-y-6">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Portfolio Highlights</p>
          <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">Projects That Define Us</h2>
        </div>
        <div className="divide-y divide-zinc-150 dark:divide-zinc-800/80">
          {PROJECTS.map((project) => (
            <div key={project.name} className="flex items-center justify-between py-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 shrink-0" />
                <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">{project.name}</p>
              </div>
              <span className="text-[9px] text-zinc-500 dark:text-zinc-400 font-bold bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full whitespace-nowrap">
                {project.category}
              </span>
            </div>
          ))}
        </div>
        <div className="pt-2">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline"
          >
            View detailed case studies <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-8 md:p-14 text-center shadow-md space-y-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#3b82f6/5_95%)] pointer-events-none" />
        <Zap size={28} className="mx-auto text-blue-600 dark:text-cyan-400" />
        <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          Ready to build something great?
        </h2>
        <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          Whether you're a mandi trader, dairy owner, startup founder, or enterprise — WisdomCore Solutions has the experience and architecture to deliver exactly what you need.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-xs font-semibold text-white hover:opacity-95 transition shadow-sm"
        >
          Start your project <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  )
}

export default About
