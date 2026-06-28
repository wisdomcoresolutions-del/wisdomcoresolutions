import { motion } from 'framer-motion'

interface SectionCardProps {
  title: string
  description: string
}

function SectionCard({ title, description }: SectionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 shadow-sm hover:border-zinc-350 dark:hover:border-zinc-700 transition"
    >
      <h3 className="text-base font-extrabold text-zinc-950 dark:text-white leading-tight tracking-tight">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-zinc-650 dark:text-zinc-400 font-medium">{description}</p>
    </motion.div>
  )
}

export default SectionCard
