import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2, Globe, Bot, Cpu, ArrowRight, CheckCircle, Zap, ShieldCheck, Database, HardDrive
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

const SERVICES = [
  {
    icon: Code2,
    badge: 'Core Capability',
    title: 'Custom ERP & Software Systems',
    headline: 'Built specifically for your business — not adapted from a rigid template.',
    desc: 'We design and build complex offline and online software systems from the ground up. Whether it is a mandi commission agent ledger, a dairy fat-billing engine, or a multi-branch inventory platform — we architect solutions that model your real-world operational logic precisely.',
    points: [
      'Offline-first database architecture for low-connectivity environments',
      'Complex billing, ledger & payout calculation engines',
      'Multi-user role-based access control with secure encryption',
      'SQLite + PostgreSQL hybrid data sync pipelines',
      'Automated PDF report generators and transaction audit trail systems',
    ],
    tech: ['Python', 'Node.js', 'PostgreSQL', 'SQLite', 'Supabase', 'Docker'],
  },
  {
    icon: Globe,
    badge: 'Web Systems',
    title: 'Full-Stack Web Applications',
    headline: 'Fast, modern, SEO-optimized, and conversion-focused web products.',
    desc: 'From high-conversion landing pages to full-scale SaaS platforms and administrative dashboards — we build performant, mobile-first web applications using modern frontend and backend technology stacks. Every site we deliver is optimized for Core Web Vitals and PageSpeed.',
    points: [
      'React.js / Next.js frontend development with smooth Framer Motion controls',
      'Vanilla CSS + Tailwind CSS for customized high-fidelity responsive UI',
      'Secure REST API gateways and serverless backend functions',
      'Supabase / PostgreSQL database optimization & storage integration',
      'Structured schema markup, title/meta tags, and SEO best practices',
    ],
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Python', 'Supabase'],
  },
  {
    icon: Bot,
    badge: 'AI & Automation',
    title: 'AI Integration & Workflow Automation',
    headline: 'Automate repetitive tasks and scale your business operations.',
    desc: 'We integrate advanced AI capabilities directly into your existing business workflows — saving hours of manual effort daily. From WhatsApp bulk marketing outreach pipelines to social media automation scripts and custom-trained AI chatbots, we build background engines that deliver.',
    points: [
      'WhatsApp bulk marketing and client outreach automation',
      'Automated lead qualification intake flows and email triggers',
      'LLM-powered customer support chatbots and diagnostic tools',
      'Automated Excel parsing, report generation, and data extraction',
      'API-driven automation workflows using n8n and Zapier integration',
    ],
    tech: ['OpenAI API', 'Python', 'WhatsApp Business API', 'LangChain', 'n8n', 'Zapier'],
  },
  {
    icon: Cpu,
    badge: 'Smart Automation',
    title: 'IoT & Microcontroller Prototypes',
    headline: 'Connect physical hardware sensors directly to your cloud dashboards.',
    desc: 'We design and prototype custom microcontroller-based electronic hardware integrated with software dashboards. Whether you need automated sensor data logging, environmental alert triggers, or smart warehouse monitoring solutions — we deliver complete hardware-to-cloud integration.',
    points: [
      'Arduino and ESP32 microcontroller firmware development',
      'Custom sensor integration (temperature, weight, proximity, motion)',
      'Real-time web monitoring dashboards connected via WebSocket/MQTT',
      'Automated hardware alert notifications via SMS, WhatsApp, and email',
      'Industrial sensor reading logging pipelines with SQLite buffering',
    ],
    tech: ['Arduino', 'C++', 'Python', 'MQTT Broker', 'Node.js', 'Firebase'],
  },
]

function Services() {
  return (
    <section className="space-y-20 py-8 md:py-16">
      <SEOHead
        title="Services | Custom ERP, Web Development & AI Automation | WisdomCore"
        description="WisdomCore Solutions offers custom software development, full-stack web development, AI automation, and IoT solutions for businesses across India. Based in Sirsa, Haryana — serving pan-India and globally."
        keywords="custom software development India, full stack web development Haryana, AI automation India, IoT solutions India, React.js developer India, Python developer Haryana, WhatsApp automation India"
        canonical="/services"
      />

      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400 font-bold">Capabilities</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 dark:text-white sm:text-5xl leading-tight tracking-tight">
          End-to-end engineering services for ambitious businesses.
        </h1>
        <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-7">
          From early-stage founders to growing manufacturing enterprises — WisdomCore delivers precision-engineered technology solutions across software, web, AI, and hardware. We build custom codebases designed to solve your exact business constraints.
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8">
        {SERVICES.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-8 md:p-12 shadow-sm dark:shadow-md/10 hover:border-zinc-300 dark:hover:border-zinc-700 transition duration-300"
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left side info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-950 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
                      <Icon size={18} className="text-white dark:text-cyan-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold border border-zinc-250 dark:border-zinc-800 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 italic">{service.headline}</p>
                    <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">{service.desc}</p>
                  </div>

                  {/* Tech Stack tags */}
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-extrabold">Primary Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-zinc-50 dark:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side list */}
                <div className="space-y-4 lg:pt-3 lg:border-l lg:border-zinc-150 lg:dark:border-zinc-800/80 lg:pl-10">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-450 dark:text-zinc-505 font-bold mb-5">
                    What's Included
                  </p>
                  <div className="space-y-3.5">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle size={15} className="text-blue-650 dark:text-cyan-455 mt-0.5 shrink-0" />
                        <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Global Delivery Banner */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900/10 p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
        <Globe size={32} className="text-blue-600 dark:text-cyan-450 shrink-0" />
        <div className="space-y-1">
          <h3 className="font-bold text-zinc-950 dark:text-white text-base">Pan-India & Global System Delivery</h3>
          <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            While WisdomCore Solutions is based in Sirsa, Haryana, our development systems are entirely remote-first and cloud-linked. We design and deliver custom software frameworks globally, providing reliable technical onboarding and SLA support channels.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-8 md:p-14 text-center space-y-6 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#3b82f6/5_95%)] pointer-events-none" />
        <Zap size={26} className="mx-auto text-blue-600 dark:text-cyan-400" />
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Not sure which service fits your need?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Schedule a free 30-minute systems evaluation session. We will help map your database requirements and structure a target implementation roadmap.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-xs font-semibold text-white hover:opacity-95 shadow-md transition duration-200"
        >
          Book Free Consultation <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  )
}

export default Services
