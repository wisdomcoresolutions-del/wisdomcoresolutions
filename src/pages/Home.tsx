import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, Cloud, Database, ShieldCheck, Terminal, Cpu, Layers, 
  Workflow, CheckCircle, ChevronDown, ChevronUp, Star, Users, Briefcase, 
  Settings, Award, Zap, Phone, BookOpen, Mail, WifiOff, MessageSquare, Code, LineChart, Server
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const STATS = [
  { value: '150+', label: 'Successful Deployments' },
  { value: '99.99%', label: 'Uptime Architecture SLA' },
  { value: '$25M+', label: 'Client Transactions Managed' },
  { value: '98%', label: 'Client Retention Rate' }
]

const INDUSTRIES = [
  'Healthcare & Pharma', 'EdTech & Learning', 'E-commerce & Retail', 
  'Advanced Manufacturing', 'AgriTech', 'Hospitality & Travel', 
  'FinTech', 'Logistics & Supply Chain', 'IoT & Smart Spaces'
]

const LOGOS = [
  { name: 'AWS Partner', class: 'text-orange-500' },
  { name: 'Google Cloud Partner', class: 'text-blue-500' },
  { name: 'Supabase Certified', class: 'text-emerald-500' },
  { name: 'Cloudflare Enterprise', class: 'text-orange-400' },
  { name: 'Vercel Expert', class: 'text-zinc-950 dark:text-white' },
  { name: 'Tailwind CSS Certified', class: 'text-cyan-500' }
]

const SERVICES_PREVIEW = [
  {
    icon: Cpu,
    title: 'Custom ERP & CRMs',
    desc: 'Bespoke systems built for dairy logistics, manufacturing flow control, and enterprise accounting logic.',
    badge: 'Flagship'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps Solutions',
    desc: 'Uptime-hardened server configurations, Kubernetes deployments, and automated zero-downtime integration.',
    badge: 'Scale'
  },
  {
    icon: Database,
    title: 'Database Engineering',
    desc: 'Complex schema designs, low-latency queries, partition scheduling, and high-frequency PostgreSQL setups.',
    badge: 'Speed'
  },
  {
    icon: Terminal,
    title: 'Web & Mobile Apps',
    desc: 'Full-stack React, Next.js, and Flutter systems built for extreme speed, SEO visibility, and accessibility.',
    badge: 'Frontier'
  },
  {
    icon: Workflow,
    title: 'AI Solutions & Chatbots',
    desc: 'LLM agents, automated data parsing, bulk WhatsApp outreach platforms, and custom machine learning pipelines.',
    badge: 'Advanced'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    desc: 'Replace legacy Excel sheets with secure backends, scheduled trigger functions, and automated alert panels.',
    badge: 'Impact'
  }
]

const PRODUCTS = [
  {
    name: 'WisdomCore Dairy ERP',
    tag: 'Dairy Logistics & Payouts',
    desc: 'Reconcile morning and evening milk collection metrics, automated FAT/SNF payouts calculation, and custom offline billing tools.',
    features: ['SNF/Fat Auto-calculation', 'Offline-First Collection Sync', 'SMS Payout Alerts']
  },
  {
    name: 'WisdomCore LogiBuild',
    tag: 'Construction & Material Planning',
    desc: 'Multi-site asset tracker, raw material usage projection pipelines, truck dispatch logging, and supply auditing database.',
    features: ['Real-Time Site Logs', 'Smart Inventory Alerts', 'Vendor Billing Auditing']
  },
  {
    name: 'WisdomCore HMS Pro',
    tag: 'Healthcare & Bed Allocation',
    desc: 'Automate patient check-in records, secure health logs, dynamic bed status panels, and billing invoicing.',
    features: ['Secure Health Records', 'GST Invoicing Terminal', 'Doctor Consultation Scheduler']
  }
]

const PROCESS_STEPS = [
  { phase: '01', title: 'Architecture Discovery', desc: 'We dissect your legacy workflows, write a data schema roadmap, and formulate target metrics.' },
  { phase: '02', title: 'High-Fidelity UI/UX & Schema Design', desc: 'Structure custom interactive mockups and construct secure relational PostgreSQL tables.' },
  { phase: '03', title: 'Agile Software Engineering', desc: 'Clean React/NextJS components, robust database controllers, and offline-resilient cache states.' },
  { phase: '04', title: 'Strict QA & Vulnerability Auditing', desc: 'Conduct load tests, verify authorization roles, and audit security layers.' },
  { phase: '05', title: 'Deployment & SLA Support', desc: 'Ship to AWS/Cloudflare CDN, transition admin tools, and establish 24/7 technical support lines.' }
]

const TECH_CATEGORIES: Record<string, string[]> = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Flutter'],
  Backend: ['Node.js', 'NestJS', 'Express.js', 'Python', 'Go', 'Supabase Edge Functions'],
  Database: ['PostgreSQL', 'Supabase Database', 'Redis Cache', 'SQLite (Local Sync)', 'Firebase'],
  CloudOps: ['AWS EC2/S3', 'Docker', 'Cloudflare CDN', 'GitHub Actions', 'Vercel Deployment']
}

const TESTIMONIALS = [
  {
    quote: "WisdomCore completely automated our collection centers. Payout reconciliation errors dropped to zero and our operational cycles became 3x faster.",
    author: "Rakesh Dhillon",
    role: "Director, Dhillon Dairy Logistics",
    rating: 5,
    platform: "Google Verified Review"
  },
  {
    quote: "The ERP custom built for our supply pipeline handles 40k+ records daily without breaking a sweat. Their team is literally responsive 24/7.",
    author: "Sanjay Singhal",
    role: "Operations Head, Singhal Steel & Build",
    rating: 5,
    platform: "LinkedIn Review"
  },
  {
    quote: "We got our hospital dashboard designed, built, and deployed on AWS within 6 weeks. The patient check-in experience has improved drastically.",
    author: "Dr. Anirudh Mehta",
    role: "Chief Surgeon, MedLife Clinics",
    rating: 5,
    platform: "Direct Partner Feedback"
  }
]

const FAQS = [
  { q: 'Why build custom software over a standard monthly SaaS?', a: 'Generic SaaS products force your company to adapt its workflow to their rigid codebase. WisdomCore engineers custom systems tailored specifically to your business, eliminating monthly user-licensing fees and future-proofing your operations.' },
  { q: 'How does the offline-first sync mechanism function?', a: 'For remote locations like dairy collections or construction sites, data is stored locally in an encrypted local database. The moment internet connectivity becomes stable, WCS sync pipelines securely reconcile entries to your main cloud database.' },
  { q: 'What database optimizations do you apply to secure large datasets?', a: 'We construct horizontal partitioning systems, optimize index structures, integrate Redis memory caches, and separate read/write queries. This ensures dashboard queries load in under 150ms even with millions of active records.' },
  { q: 'How do we request a custom features update post-launch?', a: 'We offer dedicated maintenance contracts and Level-3 technical SLAs, ensuring you have direct developer channels to coordinate new features, layout changes, and integrations.' }
]

function Home() {
  const [activeTechTab, setActiveTechTab] = useState('Frontend')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="space-y-28 py-8 md:py-16">
      <SEOHead
        title="WisdomCore Solutions | Custom ERP, Cloud & Enterprise Software India"
        description="WisdomCore Solutions builds custom ERP systems, cloud infrastructure, AI-powered automation, and mission-critical database engineering for enterprises across India."
        keywords="custom ERP India, enterprise software company India, cloud solutions, database engineering India, AI automation software, hospital management system, dairy ERP software, construction ERP, WisdomCore Solutions"
        canonical="/"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/55 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/40 p-8 md:p-20 shadow-xl dark:shadow-2xl/20 transition-all duration-300">
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center w-full">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
              <Zap size={13} className="text-blue-600 dark:text-cyan-400" />
              <span>World-Class Systems Architecture</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-[1.15] text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl tracking-tight">
                Engineering <br />
                <span className="text-gradient">
                  Digital Excellence.
                </span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
                We design and deploy custom ERPs, database systems, and secure cloud infrastructure that accelerate operations for growth-focused industries.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 text-sm font-semibold text-white transition hover:opacity-95 shadow-md hover:shadow-lg"
              >
                <span>Book Free Consult</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-7 py-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-700"
              >
                <span>View Portfolio</span>
              </Link>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center text-xs text-zinc-500 dark:text-zinc-400 pt-2 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600 dark:text-cyan-400" /> USA & European Compliance</span>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-800">•</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-600 dark:text-cyan-400" /> Pan-India Operations Support</span>
            </div>
          </div>

          {/* Interactive Topology Graphic */}
          <div className="panel-card relative overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 p-6 md:p-8 space-y-6 shadow-lg dark:shadow-2xl/10 flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-150 dark:border-zinc-800/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-400 uppercase tracking-widest font-mono">wcs-mesh-network</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">v2.1 ACTIVE</span>
              </div>

              {/* Topology Mesh Container */}
              <div className="relative w-full h-[280px] bg-zinc-50/50 dark:bg-zinc-900/10 rounded-2xl border border-zinc-150/60 dark:border-zinc-800/60 flex items-center justify-center">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-80" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_95%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_20%,#030303_95%)]" />
                </div>

                {/* Connection Lines & Flowing Packets */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 280">
                  <line x1="80" y1="60" x2="200" y2="140" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="3 3" className="opacity-40" />
                  <line x1="320" y1="60" x2="200" y2="140" stroke="#a1a1aa" strokeWidth="1.5" className="opacity-45" />
                  <line x1="200" y1="220" x2="200" y2="140" stroke="#a1a1aa" strokeWidth="1.5" className="opacity-45" />

                  <circle cx={80} cy={60} r={3} fill="#3b82f6" className="packet-flow-1" />
                  <circle cx={200} cy={140} r={3} fill="#8b5cf6" className="packet-flow-2" />
                  <circle cx={200} cy={220} r={3} fill="#06b6d4" className="packet-flow-3" />
                </svg>

                {/* Top-Left Node */}
                <div className="absolute left-[20%] top-[22%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-blue-500/10 border border-blue-500/20 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-blue-500 hover:scale-110 transition-all flex items-center justify-center cursor-pointer">
                    <WifiOff size={16} className="text-zinc-650 dark:text-zinc-300" />
                  </div>
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md z-20">
                    <p className="font-bold">Offline SQLite Cache</p>
                    <p className="text-zinc-400 mt-0.5">Buffers transactions locally on network drops</p>
                  </div>
                </div>

                {/* Top-Right Node */}
                <div className="absolute left-[80%] top-[22%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-purple-500/10 border border-purple-500/20 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-purple-500 hover:scale-110 transition-all flex items-center justify-center cursor-pointer">
                    <Cloud size={16} className="text-zinc-650 dark:text-zinc-300" />
                  </div>
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md z-20">
                    <p className="font-bold">AWS Ingress Portal</p>
                    <p className="text-zinc-400 mt-0.5">Load-balanced JWT gateways</p>
                  </div>
                </div>

                {/* Central Node */}
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 animate-pulse opacity-40" />
                  <div className="relative w-16 h-16 rounded-full border border-zinc-300 dark:border-zinc-700 bg-zinc-950 dark:bg-zinc-900 shadow-md hover:border-cyan-400 hover:scale-105 transition-all flex items-center justify-center cursor-pointer">
                    <Database size={22} className="text-white dark:text-cyan-400" />
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-white dark:border-zinc-950 animate-pulse" />
                  </div>
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md z-20">
                    <p className="font-bold text-cyan-400">PostgreSQL Primary Cluster</p>
                    <p className="text-zinc-400 mt-0.5">Automated partitioning & Supabase cloud sync</p>
                  </div>
                </div>

                {/* Bottom Node */}
                <div className="absolute left-[50%] top-[78%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:border-cyan-500 hover:scale-110 transition-all flex items-center justify-center cursor-pointer">
                    <Workflow size={16} className="text-zinc-650 dark:text-zinc-300" />
                  </div>
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-md z-20">
                    <p className="font-bold">Next.js Dashboard</p>
                    <p className="text-zinc-400 mt-0.5">Real-time charts & dynamic analytics logs</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t border-zinc-150 dark:border-zinc-800 pt-4 mt-2">
              <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono text-center">
                ⚡ Interactive network topology. Hover nodes to view specifications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Logos / Marquee */}
      <div className="space-y-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Expertise Across Modern Ecosystems</p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-350">
          {LOGOS.map((logo) => (
            <span key={logo.name} className={`text-sm font-extrabold tracking-tight ${logo.class}`}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl text-center space-y-2 shadow-sm dark:shadow-md/10 hover:border-blue-600 dark:hover:border-cyan-400 transition-colors">
            <p className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {stat.value}
            </p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-450 uppercase tracking-wider font-bold">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Targeted Sectors */}
      <div className="space-y-8 text-center max-w-5xl mx-auto">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Industry Coverage</p>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Tailored Architecture For High-Consequence Workflows</h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          {INDUSTRIES.map((ind) => (
            <span 
              key={ind} 
              className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 text-xs font-semibold text-zinc-700 dark:text-zinc-350 hover:border-blue-650 dark:hover:border-cyan-455 transition duration-150 shadow-sm"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>

      {/* Core Engineering Services */}
      <div className="space-y-16">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white tracking-tight leading-tight">High-Fidelity Engineering Services</h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm">
            We architect systems optimized for data integrity, maximum throughput, and bulletproof security.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_PREVIEW.map((serv, index) => {
            const Icon = serv.icon
            return (
              <div 
                key={index}
                className="group flex flex-col justify-between p-8 rounded-3xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:-translate-y-1 hover:border-zinc-350 dark:hover:border-zinc-700 hover:shadow-lg dark:hover:shadow-2xl/10 transition-all duration-200"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-805 dark:text-white group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 group-hover:text-white dark:group-hover:text-zinc-950 transition-colors duration-250">
                      <Icon size={18} />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400">
                      {serv.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">{serv.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-5">{serv.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center pt-2">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
          >
            <span>Explore full services list</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* Flagship Proprietary Ecosystems */}
      <div className="space-y-16">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Solutions Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white tracking-tight leading-tight">WisdomCore Flagship Ecosystems</h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm">
            Pre-built modular frameworks ready for configuration to match your exact accounting and logistical workflows.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PRODUCTS.map((prod, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl border border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden group hover:border-zinc-350 dark:hover:border-zinc-700 transition"
            >
              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">{prod.tag}</span>
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{prod.name}</h3>
                <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-5">{prod.desc}</p>
                <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5 space-y-2.5">
                  {prod.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-800 dark:text-zinc-300">
                      <CheckCircle size={14} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link 
                to="/contact"
                className="w-full flex items-center justify-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 py-3 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition duration-150"
              >
                <span>Request Custom Demo</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Interactive Grid */}
      <div className="rounded-[2rem] border border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-950/60 p-6 md:p-10 space-y-8 max-w-5xl mx-auto shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Engineering Stack</p>
            <h3 className="text-xl font-bold text-zinc-950 dark:text-white">Engineered on Modern Platforms</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(TECH_CATEGORIES).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTechTab(tab)}
                className={`rounded-full px-4.5 py-2 text-xs font-semibold transition ${
                  activeTechTab === tab
                    ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950'
                    : 'bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <AnimatePresence mode="wait">
            {TECH_CATEGORIES[activeTechTab].map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2.5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-4 hover:border-blue-600 dark:hover:border-cyan-400 transition"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{tech}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Agile Process Timeline */}
      <div className="space-y-16">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-950 dark:text-white tracking-tight leading-tight">Deterministic Delivery Engine</h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm">
            We follow an agile execution model from initial discovery call to final deployment.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto relative pl-8 border-l border-zinc-200 dark:border-zinc-800">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative space-y-1.5 pb-6">
              <div className="absolute -left-[45px] top-0.5 h-8 w-8 rounded-full bg-zinc-950 dark:bg-white border border-zinc-250 dark:border-zinc-700 flex items-center justify-center text-[10px] font-bold text-white dark:text-zinc-950 font-mono shadow-sm">
                {step.phase}
              </div>
              <h3 className="text-base font-bold text-zinc-950 dark:text-white pl-4">{step.title}</h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-5 pl-4 max-w-2xl">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Review Slider */}
      <div className="space-y-16">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">Testimonials</p>
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white tracking-tight">Trusted By Dynamic Leaders</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900/35 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between space-y-6 shadow-sm hover:border-zinc-350 transition">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-5 italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-zinc-100 dark:border-zinc-850 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 dark:text-white">{t.author}</h4>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-450 mt-0.5">{t.role}</p>
                </div>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-600 dark:text-cyan-400">{t.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-zinc-900 dark:text-white font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="text-zinc-800 dark:text-zinc-300" size={16} /> : <ChevronDown className="text-zinc-400" size={16} />}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-zinc-100 dark:border-zinc-800/80 text-zinc-650 dark:text-zinc-400 text-xs leading-6">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl dark:shadow-2xl/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-905 dark:text-white border border-zinc-200 dark:border-zinc-705">
            <Award size={20} className="text-blue-600 dark:text-cyan-400" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Ready to engineer your system?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-6">
              Let's schedule a dedicated technical consultation session. Our engineering intake team is ready to map your operational requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-xs font-semibold text-white transition hover:opacity-95 shadow-md"
            >
              <span>Schedule Intake Meeting</span>
              <ArrowRight size={13} />
            </Link>
            <a
              href="mailto:wisdomcoresolutions@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-3 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <Mail size={13} />
              <span>Email Technical Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
