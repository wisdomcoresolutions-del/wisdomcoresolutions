import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 xl:px-0">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold text-zinc-950">
          <img src="/logo-icon.png" alt="WisdomCore Logo" className="h-10 w-10 object-contain rounded-full" />
          <span className="tracking-tight font-bold">
            WisdomCore<span className="text-zinc-500 font-medium">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-950'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50 hover:border-zinc-300"
          >
            Talk to our CTO team
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 transition shadow-sm"
          >
            Schedule consult
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="rounded-xl border border-zinc-200 bg-white p-2 text-zinc-800 hover:bg-zinc-50 lg:hidden transition focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-zinc-200/50 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-6">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-bold transition py-2 ${
                        isActive ? 'text-zinc-950' : 'text-zinc-600 hover:text-zinc-950'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="border-t border-zinc-100 pt-5 flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center rounded-full border border-zinc-200 bg-white py-2.5 text-xs font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  Talk to our CTO team
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center rounded-full bg-zinc-950 py-2.5 text-xs font-semibold text-white hover:bg-zinc-800 transition shadow-sm"
                >
                  Schedule consult
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar
