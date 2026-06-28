import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/content'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark' // Default to dark for premium look
    }
    return 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/40 bg-white/70 backdrop-blur-xl dark:border-zinc-800/40 dark:bg-zinc-950/70 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 xl:px-0">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold text-zinc-950 dark:text-white">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-0.5 shadow-md flex items-center justify-center">
            <div className="h-full w-full rounded-[10px] bg-white dark:bg-zinc-950 flex items-center justify-center">
              <span className="text-sm font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WCS</span>
            </div>
          </div>
          <span className="tracking-tight font-bold">
            WisdomCore<span className="text-blue-600 dark:text-cyan-400 font-medium">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-200 ${
                  isActive
                    ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full border border-zinc-200/60 dark:border-zinc-800 bg-transparent p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white px-4 py-2 rounded-full border border-zinc-200/60 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition duration-200"
          >
            Talk to our CTO team
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white hover:opacity-90 hover:shadow-lg transition duration-200"
          >
            Schedule Consult
          </Link>
        </div>

        {/* Mobile Actions Container */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-full border border-zinc-200/60 dark:border-zinc-800 bg-transparent p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950 lg:hidden"
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
                        isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="border-t border-zinc-100 dark:border-zinc-900 pt-5 flex flex-col gap-2.5">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-2.5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                >
                  Talk to our CTO team
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 text-xs font-semibold text-white hover:opacity-90 hover:shadow-lg transition duration-200"
                >
                  Schedule Consult
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
