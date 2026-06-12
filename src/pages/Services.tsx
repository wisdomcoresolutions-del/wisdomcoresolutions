import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2, Globe, Bot, Cpu, ArrowRight, CheckCircle, Zap
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

const SERVICES = [
  {
    icon: Code2,
    badge: 'Core Offering',
    title: 'Custom Software Development',
    headline: 'Built exactly for your business — not adapted from a template.',
    desc: 'We design and build complex offline and online software systems from the ground up. Whether it is a mandi commission agent ledger, a dairy fat-billing engine, or a multi-branch inventory platform — we architect solutions that model your real-world operational logic precisely.',
    points: [
      'Offline-first architecture for low-connectivity environments',
      'Complex billing, ledger & reconciliation systems',
      'Multi-user role-based access control',
      'SQLite + PostgreSQL hybrid data pipelines',
      'Automated reporting and audit trail systems',
    ],
    tech: ['Python', 'Node.js', 'PostgreSQL', 'SQLite', 'Supabase', 'Electron'],
  },
  {
    icon: Globe,
    badge: 'Web Solutions',
    title: 'Full-Stack Web Development',
    headline: 'Fast, modern, and conversion-optimised web products.',
    desc: 'From landing pages and portfolio sites to full-scale SaaS platforms and admin dashboards — we build performant, mobile-first web applications using modern frontend and backend technology stacks. Every site we deliver is SEO-optimised and production-ready from day one.',
    points: [
      'React.js / Next.js frontend development',
      'Tailwind CSS with responsive, premium UI design',
      'Node.js / Python REST API and backend services',
      'Supabase / PostgreSQL database integration',
      'SEO, Core Web Vitals, and performance optimisation',
    ],
    tech: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Python', 'Supabase'],
  },
  {
    icon: Bot,
    badge: 'AI & Automation',
    title: 'AI Integration & Automation',
    headline: 'Automate repetitive work. Scale smarter.',
    desc: 'We integrate AI capabilities directly into your existing business workflows — saving hours of manual effort daily. From WhatsApp bulk marketing pipelines to social media scheduling scripts and LLM-powered chatbots, we build automation systems that run in the background and deliver measurable results.',
    points: [
      'WhatsApp bulk marketing and broadcast automation',
      'Social media outreach and scheduling scripts',
      'LLM-powered chatbots and intake assistants',
      'Automated report generation and data extraction',
      'AI-driven recommendation and classification engines',
    ],
    tech: ['OpenAI API', 'Python', 'WhatsApp API', 'LangChain', 'n8n', 'Zapier'],
  },
  {
    icon: Cpu,
    badge: 'Hardware + Software',
    title: 'IoT & Smart Automation',
    headline: 'Connect the physical world to your digital systems.',
    desc: 'We design and prototype Arduino-based custom electronic hardware integrated with software dashboards. Whether you need automated sensor-based data logging, smart alert systems, or industrial monitoring solutions — we deliver end-to-end IoT solutions from circuit design to cloud integration.',
    points: [
      'Arduino and microcontroller programming',
      'Custom sensor integration (temperature, weight, motion)',
      'Real-time data dashboards connected to hardware',
      'Automated alerts via SMS, WhatsApp, and email',
      'Industrial monitoring and control system prototypes',
    ],
    tech: ['Arduino', 'C++', 'Python', 'MQTT', 'Node.js', 'Firebase'],
  },
]

function Services() {
  return (
    <section className="space-y-16 py-10">
      <SEOHead
        title="Services | Custom Software, Web Development & AI Automation | WisdomCore"
        description="WisdomCore Solutions offers custom software development, full-stack web development, AI automation, and IoT solutions for businesses across India. Based in Sirsa, Haryana — serving pan-India and globally."
        keywords="custom software development India, full stack web development Haryana, AI automation India, IoT solutions India, React.js developer India, Python developer Haryana, WhatsApp automation India"
        canonical="/services"
      />

      {/* Header */}
      <div className="space-y-4 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">What We Build</p>
        <h1 className="text-4xl font-extrabold text-zinc-950 sm:text-5xl leading-tight tracking-tight">
          End-to-end engineering services for ambitious businesses.
        </h1>
        <p className="text-base text-zinc-600 leading-7">
          From solo founders to growing enterprises — WisdomCore delivers precision-engineered technology solutions across software, web, AI, and hardware. We don't sell packages. We build exactly what you need.
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
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-12 shadow-sm"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                {/* Left */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-zinc-950 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold border border-zinc-200 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-zinc-700 italic">{service.headline}</p>
                  <p className="text-sm text-zinc-600 leading-7">{service.desc}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="space-y-3 lg:pt-2">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mb-4">
                    What's Included
                  </p>
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-zinc-700 mt-0.5 shrink-0" />
                      <p className="text-sm text-zinc-700 leading-5">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Service Area Banner */}
      <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 flex flex-col sm:flex-row items-center gap-6">
        <Globe size={32} className="text-zinc-400 shrink-0" />
        <div>
          <h3 className="font-bold text-zinc-950 text-base">Pan-India & Global Service Delivery</h3>
          <p className="text-sm text-zinc-600 mt-1 leading-6">
            While WisdomCore Solutions is headquartered in Sirsa, Haryana, our software development services are entirely remote-first and borderless. We have delivered projects for clients across Haryana, Punjab, Rajasthan, and beyond — and actively welcome global engagements.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-[2.5rem] border border-zinc-200 bg-zinc-950 p-8 md:p-14 text-center space-y-5 shadow-sm">
        <Zap size={26} className="mx-auto text-zinc-400" />
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Not sure which service fits your need?
        </h2>
        <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-6">
          Schedule a free 30-minute technical consultation. We'll understand your problem, recommend the right solution, and give you a no-obligation project scope estimate.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-semibold text-zinc-950 hover:bg-zinc-100 transition shadow-sm"
        >
          Book Free Consultation <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  )
}

export default Services
