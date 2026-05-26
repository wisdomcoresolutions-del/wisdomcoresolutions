import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Briefcase, ShieldCheck } from 'lucide-react'
import { navLinks } from '../data/content'

function NavBar() {
  return (
    <header className="border-b border-slate-800/80 bg-core-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 xl:px-0">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold text-slate-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-500/30 bg-slate-900/80 text-accent-400">
            <ShieldCheck size={20} />
          </div>
          WisdomCore
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full border border-slate-700/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-accent-500 hover:text-accent-200"
          >
            Talk to our CTO team
          </Link>
          <div className="rounded-full bg-accent-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-accent-400">
            Schedule consult
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
