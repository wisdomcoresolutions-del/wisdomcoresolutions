import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Phone, Mail, ArrowRight, Check } from 'lucide-react'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 px-6 py-16 xl:px-0 transition-all duration-300">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="h-full w-full rounded-[7px] bg-white dark:bg-zinc-950 flex items-center justify-center">
                  <span className="text-xs font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WCS</span>
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white">
                WisdomCore<span className="text-blue-600 dark:text-cyan-400 font-medium">Solutions</span>
              </span>
            </div>
            <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400 max-w-sm">
              We design and deploy precision-engineered custom ERPs, high-throughput database systems, and secure cloud infrastructure for operations-heavy industries.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/wisdomcoresolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/wisdomcoresolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-pink-600 dark:text-zinc-500 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1BW6MnGZQY/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-750 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li><Link to="/" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Insights Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Our Services</h4>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Custom Software Development</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Full-Stack Web Apps</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">AI & Automation Integration</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Cloud & DevOps Architecture</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">IoT & Hardware Solutions</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Details */}
          <div className="space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Stay Updated</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal">
              Subscribe to get modern systems engineering resources and case studies.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-4 py-2.5 text-xs outline-none focus:border-blue-600 dark:focus:border-cyan-400 transition-colors pr-10"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-2 hover:opacity-90 transition-opacity"
              >
                {subscribed ? <Check size={12} /> : <ArrowRight size={12} />}
              </button>
            </form>
            
            <div className="pt-2 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone size={12} className="text-zinc-400" />
                <a href="tel:+919050524678" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">+91 9050524678</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={12} className="text-zinc-400" />
                <a href="mailto:wisdomcoresolutions@gmail.com" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  wisdomcoresolutions@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright info */}
        <div className="border-t border-zinc-200/50 dark:border-zinc-800/80 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] text-zinc-500 dark:text-zinc-500 font-medium">
          <p>WisdomCore Solutions © 2026. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
