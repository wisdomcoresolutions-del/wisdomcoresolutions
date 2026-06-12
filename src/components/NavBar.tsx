import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Briefcase, ShieldCheck } from 'lucide-react'
import { navLinks } from '../data/content'

function NavBar() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 xl:px-0">
        <Link to="/" className="flex items-center gap-3 text-xl font-semibold text-zinc-950">
          <img src="/logo-icon.png" alt="WisdomCore Logo" className="h-9 w-9 object-contain" />
          <span className="tracking-tight font-bold">
            WisdomCore<span className="text-zinc-500 font-medium">Solutions</span>
          </span>
        </Link>

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
      </div>
    </header>
  )
}

export default NavBar
