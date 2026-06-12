import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, Cloud, Database, ShieldCheck, Terminal, Cpu, Layers, 
  Workflow, CheckCircle, ChevronDown, ChevronUp, Star, Users, Briefcase, 
  Settings, Award, Zap, Phone, BookOpen, Mail, WifiOff, Server
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Component as EtheralShadow } from '../components/ui/etheral-shadow'
import SEOHead from '../components/SEOHead'

const STATS = [
  { value: '99.9%', label: 'Uptime Architecture SLA' },
  { value: '3x', label: 'Faster Reporting Cycles' },
  { value: '₹4.5Cr+', label: 'Monthly Transactions Managed' },
  { value: '0.2%', label: 'Logistics Discrepancy Margin' }
]

const INDUSTRIES = [
  'Healthcare', 'Education', 'Retail', 'Manufacturing', 
  'Agriculture', 'Hospitality', 'Construction', 'Logistics', 'Government'
]

const SERVICES_V2 = [
  {
    icon: Cpu,
    title: 'Custom ERP Systems',
    desc: 'Bespoke ERPs built for manufacturing, construction, and dairy systems. Integrated approvals, multi-site sync, and GST reporting.',
    badge: 'Flagship'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'High-availability infrastructure architected on AWS and Cloudflare. Automated failover, database clustering, and security controls.',
    badge: 'Enterprise'
  },
  {
    icon: Database,
    title: 'Database Engineering',
    desc: 'High-performance PostgreSQL optimization. Index tuning, partition schemes, and data pipelines handling 50k+ daily transactions.',
    badge: 'Optimized'
  },
  {
    icon: Terminal,
    title: 'API & Microservices',
    desc: 'Secure, RESTful and GraphQL API design. Synchronous third-party integration, audit trail logging, and low-latency response profiles.',
    badge: 'Custom'
  },
  {
    icon: ShieldCheck,
    title: 'UI/UX & Systems Design',
    desc: 'Framer Motion animations, interactive dashboards, and design systems crafted for operations-heavy enterprise tools.',
    badge: 'Elite'
  },
  {
    icon: Zap,
    title: 'Business Automation',
    desc: 'Replacement of manual spreadsheet entries with automated reconciliation engines, notification systems, and approval flows.',
    badge: 'Impactful'
  }
]

const PRODUCTS = [
  {
    name: 'WisdomCore Dairy ERP',
    tag: 'Dairy Logistics',
    desc: 'Automated billing, FAT/SNF calculation engines, offline collection sync, and real-time farmer reconciliation charts.',
    features: ['SNF/Fat Auto-calculation', 'Offline-First Collection Sync', 'SMS Payout Alerts']
  },
  {
    name: 'WisdomCore LogiBuild',
    tag: 'Construction Supply Chain',
    desc: 'Multi-site inventory tracker, predictive raw materials ordering, dispatch scheduler, and transit audit logging.',
    features: ['Real-Time Site Logs', 'Smart Inventory Alerts', 'Vendor Billing Auditing']
  },
  {
    name: 'WisdomCore HMS Pro',
    tag: 'Healthcare Operations',
    desc: 'Patient records manager, real-time bed allocation dashboard, pharmacy inventory integration, and automated discharge billing.',
    features: ['Secure Health Records', 'GST Invoicing Terminal', 'Doctor Consultation Scheduler']
  }
]

const PROCESS_STEPS = [
  { phase: '01', title: 'Intake & Architecture Discovery', desc: 'We review your manual process map, identify database requirements, and finalize structural parameters.' },
  { phase: '02', title: 'Systems Design & DB Schema', desc: 'Design high-fidelity wireframes, map API paths, and structure the PostgreSQL/Supabase tables.' },
  { phase: '03', title: 'High-Fidelity Engineering', desc: 'Develop modular components using React, Tailwind CSS, secure backends, and offline-first databases.' },
  { phase: '04', title: 'Strict Quality Assurance', desc: 'Automated test suite runs, vulnerability scans, audit verification, and deployment to staging.' },
  { phase: '05', title: 'Production & SLA Launch', desc: 'Deploy to Cloudflare/AWS, transfer controls to local administrators, and initiate 24/7 uptime monitoring.' }
]

const TECH_CATEGORIES: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
  Backend: ['Node.js', 'NestJS', 'Express', 'JWT Auth', 'REST/GraphQL API'],
  Database: ['Supabase', 'PostgreSQL', 'Prisma ORM', 'Redis Cache', 'SQLite (Offline)'],
  CloudOps: ['AWS S3/EC2', 'Docker', 'Cloudflare CDN', 'GitHub Actions', 'Vercel']
}

const FAQS = [
  { q: 'Why build a custom ERP instead of choosing a standard SaaS?', a: 'SaaS platforms require your business to change its workflows to match their software. WisdomCore builds custom systems around your exact manual process, eliminating data drift and SaaS licensing fees.' },
  { q: 'How does the offline-first sync mechanism function?', a: 'For remote collection centers (like dairy centers or construction sites), our systems store transactions locally in an encrypted SQLite database. When internet connectivity is restored, a secure sync engine reconciles entries with the Supabase primary database.' },
  { q: 'What database optimizations do you apply for high transaction scales?', a: 'We apply read-write splitting, partition logs tables by month, configure custom indexes, and integrate Redis cache layers. This ensures response times remain under 150ms even during peak workloads.' },
  { q: 'What kind of support SLA does WisdomCore provide?', a: 'We offer dedicated Level-3 engineering support with active uptime monitoring, regular database backups, security patches, and direct support lines for system administrators.' }
]

function Home() {
  const [activeTechTab, setActiveTechTab] = useState('Frontend')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="space-y-20 py-6">
      <SEOHead
        title="WisdomCore Solutions | Custom ERP, Cloud & Enterprise Software India"
        description="WisdomCore Solutions engineers custom ERP systems, cloud infrastructure, AI automation, and database solutions for manufacturing, healthcare, dairy, construction and retail enterprises across India."
        keywords="custom ERP India, enterprise software company India, cloud solutions, database engineering India, AI automation software, hospital management system, dairy ERP software, construction ERP, WisdomCore Solutions"
        canonical="/"
      />
      {/* 1. Hero Section with off-white card layout */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-16 shadow-sm min-h-[600px] flex items-center">
        <EtheralShadow
          className="absolute inset-0 -z-10"
          color="rgba(9, 9, 11, 0.01)" // Minimalist soft grey gradient
          animation={{ scale: 95, speed: 75 }}
          noise={{ opacity: 0.2, scale: 1.15 }}
          sizing="fill"
        />
        
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center w-full">
          <div className="space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
              <Zap size={13} className="text-zinc-900" />
              <span>Premium Enterprise IT Ecosystems</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold leading-[1.1] text-zinc-950 sm:text-5xl lg:text-6xl tracking-tight">
                Engineering <br />
                <span className="text-zinc-800">
                  Digital Excellence.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                We design and deploy precision-engineered custom ERPs, high-throughput database systems, and secure cloud infrastructure for operations-heavy industries.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95 shadow-sm"
              >
                <span>Book Free Consult</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 hover:border-zinc-300"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>
          </div>

          {/* Animated Systems Topology Graphics Panel */}
          <div className="panel-card relative overflow-hidden border border-zinc-200 bg-white p-6 md:p-8 space-y-6 shadow-sm flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-mono">wcs-mesh-network</span>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">v2.0 ACTIVE</span>
              </div>

              {/* Topology Mesh Container */}
              <div className="relative w-full h-[320px] bg-zinc-50/50 rounded-2xl border border-zinc-100 flex items-center justify-center">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#ffffff_90%)]" />
                </div>

                {/* Connection Lines & Flowing Packets */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320">
                  {/* Nodes link paths */}
                  <line x1="80" y1="70" x2="200" y2="160" stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="320" y1="70" x2="200" y2="160" stroke="#e4e4e7" strokeWidth="1.5" />
                  <line x1="200" y1="250" x2="200" y2="160" stroke="#e4e4e7" strokeWidth="1.5" />

                  {/* Pulsing Dot Animations along paths */}
                  <circle cx={80} cy={70} r={3.5} fill="var(--primary)" className="packet-flow-1" />
                  <circle cx={200} cy={160} r={3.5} fill="var(--primary)" className="packet-flow-2" />
                  <circle cx={200} cy={250} r={3.5} fill="var(--primary)" className="packet-flow-3" />
                </svg>

                {/* Nodes layout absolute positioned */}
                {/* 1. Top-Left Node: Offline-first SQLite Cache */}
                <div className="absolute left-[20%] top-[22%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-amber-50 border border-amber-100 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 bg-white shadow-sm hover:border-amber-400 hover:scale-110 hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer">
                    <WifiOff size={16} className="text-zinc-600 group-hover:text-amber-500 transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-20">
                    <p className="font-bold text-center">Offline SQLite Cache</p>
                    <p className="text-zinc-400 font-medium mt-0.5">Buffers transactions locally on network drops</p>
                  </div>
                </div>

                {/* 2. Top-Right Node: AWS / Cloud Gateway */}
                <div className="absolute left-[80%] top-[22%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-blue-50 border border-blue-100 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 bg-white shadow-sm hover:border-blue-400 hover:scale-110 hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer">
                    <Cloud size={16} className="text-zinc-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-20">
                    <p className="font-bold text-center">AWS API Ingress</p>
                    <p className="text-zinc-400 font-medium mt-0.5">High-speed JWT load balanced routing</p>
                  </div>
                </div>

                {/* 3. Central Node: Primary PostgreSQL Cluster */}
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-3 rounded-full bg-emerald-50 border border-emerald-100 animate-pulse opacity-40" />
                  <div className="relative w-16 h-16 rounded-full border border-zinc-300 bg-zinc-950 shadow-md hover:border-emerald-400 hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer">
                    <Database size={22} className="text-white group-hover:text-emerald-400 transition-colors" />
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-20">
                    <p className="font-bold text-center text-emerald-400">PostgreSQL Primary Cluster</p>
                    <p className="text-zinc-400 font-medium mt-0.5">Supabase cloud replication node</p>
                  </div>
                </div>

                {/* 4. Bottom Node: Client Applications / Web Portal */}
                <div className="absolute left-[50%] top-[78%] -translate-x-1/2 -translate-y-1/2 group z-10">
                  <div className="absolute -inset-2 rounded-full bg-indigo-50 border border-indigo-100 animate-ping opacity-25" />
                  <div className="relative w-12 h-12 rounded-full border border-zinc-200 bg-white shadow-sm hover:border-indigo-400 hover:scale-110 hover:shadow transition-all duration-200 flex items-center justify-center cursor-pointer">
                    <Workflow size={16} className="text-zinc-600 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-zinc-950 text-white text-[10px] px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-20">
                    <p className="font-bold text-center">React Client Portal</p>
                    <p className="text-zinc-400 font-medium mt-0.5">Real-time stats dashboard & lead logger</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Graphics Footer */}
            <div className="border-t border-zinc-100 pt-4 mt-2">
              <p className="text-[10.5px] text-zinc-400 font-mono text-center leading-relaxed">
                ⚡ Fully connected active system topography. Hover over nodes to inspect details.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Trusted Industries & Statistics */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Broad Sector Expertise</p>
          <h2 className="text-xl font-bold text-zinc-900">Targeted Software For High-Consequence Operations</h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
          {INDUSTRIES.map((ind) => (
            <span 
              key={ind} 
              className="rounded-full bg-white border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-700 tracking-wide hover:border-zinc-400 hover:text-zinc-950 transition duration-150"
            >
              {ind}
            </span>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto pt-6">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white p-6 border border-zinc-200 rounded-[2rem] text-center space-y-1.5 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Enterprise Services */}
      <div className="space-y-12">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">Specialized Capabilities</p>
          <h2 className="text-3xl font-bold text-zinc-950 tracking-tight leading-tight">High-Fidelity Engineering Services</h2>
          <p className="text-zinc-600 text-sm">
            We architect systems optimized for absolute data validation, low latency, and secure operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_V2.map((serv, index) => {
            const IconComponent = serv.icon
            return (
              <div 
                key={index}
                className="group flex flex-col justify-between p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-800 transition-colors duration-200 group-hover:bg-zinc-950 group-hover:text-white">
                      <IconComponent size={18} />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-500">
                      {serv.badge}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-zinc-950">{serv.title}</h3>
                    <p className="text-zinc-600 text-xs leading-5">{serv.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Product Showcase Section */}
      <div className="space-y-12">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">Proprietary Software Systems</p>
          <h2 className="text-3xl font-bold text-zinc-950 tracking-tight leading-tight">WisdomCore Flagship Ecosystems</h2>
          <p className="text-zinc-600 text-sm">
            Pre-built modular solutions customizable to fit your exact logistics and accounting rules.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PRODUCTS.map((prod, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 rounded-[2rem] border border-zinc-200 bg-white flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">{prod.tag}</span>
                  <h3 className="text-xl font-bold text-zinc-950">{prod.name}</h3>
                </div>
                <p className="text-zinc-600 text-xs leading-5">{prod.desc}</p>
                <div className="border-t border-zinc-100 pt-4 space-y-2">
                  {prod.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-800">
                      <CheckCircle size={13} className="text-zinc-950 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link 
                to="/contact"
                className="w-full flex items-center justify-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 py-2.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 hover:border-zinc-300 transition duration-150"
              >
                <span>Request Custom Demo</span>
                <ArrowRight size={11} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Interactive Tech Stack Tabs */}
      <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 md:p-8 space-y-6 max-w-5xl mx-auto shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-100 pb-5 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Interactive Tech Stack</p>
            <h3 className="text-xl font-bold text-zinc-950">Engineered on Modern Stacks</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(TECH_CATEGORIES).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTechTab(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                  activeTechTab === tab
                    ? 'bg-zinc-950 text-white'
                    : 'bg-zinc-50 border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <AnimatePresence mode="wait">
            {TECH_CATEGORIES[activeTechTab].map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2.5 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 transition hover:border-zinc-300"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                <span className="text-xs font-semibold text-zinc-900">{tech}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 6. Development Process Timeline */}
      <div className="space-y-12">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-bold">Structured Delivery</p>
          <h2 className="text-3xl font-bold text-zinc-950 tracking-tight leading-tight">Our Development Process</h2>
          <p className="text-zinc-600 text-sm">
            A deterministic approach from intake to support ensures predictability and zero feature creep.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto relative pl-6 border-l border-zinc-200">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative space-y-1 pb-5">
              {/* Bullet node */}
              <div className="absolute -left-[38px] top-0.5 h-7 w-7 rounded-full bg-zinc-950 border border-zinc-200 flex items-center justify-center text-[10px] font-bold text-white font-mono shadow-sm">
                {step.phase}
              </div>
              <h3 className="text-base font-bold text-zinc-950 pl-4">{step.title}</h3>
              <p className="text-zinc-600 text-xs leading-5 pl-4 max-w-2xl">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">FAQ</p>
          <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4.5 text-left text-zinc-900 font-bold text-sm hover:bg-zinc-50"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="text-zinc-800" size={16} /> : <ChevronDown className="text-zinc-400" size={16} />}
                </button>
                {isOpen && (
                  <div className="p-4.5 pt-0 border-t border-zinc-100 text-zinc-600 text-xs leading-6">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 8. Final CTA Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-14 text-center max-w-4xl mx-auto shadow-sm">
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900 border border-zinc-200">
            <Award size={20} />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
              Ready to engineer your system?
            </h2>
            <p className="text-zinc-600 text-sm leading-6">
              Let's schedule a dedicated technical consulting session. No salesmen, just solutions architecture tailored to your business rules.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground transition hover:opacity-95 shadow-sm"
            >
              <span>Schedule Intake Meeting</span>
              <ArrowRight size={13} />
            </Link>
            <a
              href="mailto:wisdomcoresolutions@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-6 py-3 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition"
            >
              <Mail size={13} />
              <span>Email Intake Team</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
