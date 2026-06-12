import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100/50 px-6 py-12 xl:px-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-zinc-900">WisdomCore Solutions © 2026</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600">
            Precision-engineering for complex operations, enterprise workflows, and mission-critical data systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-zinc-600">
          <Link to="/case-studies" className="hover:text-zinc-900 transition">
            Case Studies
          </Link>
          <Link to="/blog" className="hover:text-zinc-900 transition">
            Insights
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
