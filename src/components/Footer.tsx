import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Facebook, Phone, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100/50 px-6 py-12 xl:px-0">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1.2fr]">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-icon.png" alt="WisdomCore Logo" className="h-10 w-10 object-contain rounded-full" />
              <span className="text-lg font-bold tracking-tight text-zinc-950">
                WisdomCore<span className="text-zinc-500 font-medium">Solutions</span>
              </span>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-600">
              Precision-engineering for complex operations, enterprise workflows, and mission-critical data systems.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/company/wisdomcoresolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/wisdomcoresolutions?igsh=cWRhYTBoZjR4a21m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1BW6MnGZQY/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Navigation</h4>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-650">
              <li><Link to="/" className="hover:text-zinc-950 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-zinc-950 transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-zinc-950 transition">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-zinc-950 transition">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-zinc-950 transition">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-zinc-950 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Get in Touch</h4>
            <ul className="space-y-3 text-sm font-semibold text-zinc-800">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-zinc-400" />
                <a href="tel:+919050524678" className="hover:text-zinc-950 transition">+91 9050524678</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-zinc-400" />
                <a href="mailto:wisdomcoresolutions@gmail.com" className="hover:text-zinc-950 transition">
                  wisdomcoresolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright info */}
        <div className="border-t border-zinc-200/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-500 font-medium">
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
