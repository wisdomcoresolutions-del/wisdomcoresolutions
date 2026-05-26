import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-core-950/80 px-6 py-8 xl:px-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-500">WisdomCore Solutions © 2026</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Precision-engineering for complex operations, enterprise workflows, and mission-critical data systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <Link to="/case-studies" className="hover:text-white">
            Case Studies
          </Link>
          <Link to="/blog" className="hover:text-white">
            Insights
          </Link>
          <Link to="/portal" className="hover:text-white">
            Client Portal
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
