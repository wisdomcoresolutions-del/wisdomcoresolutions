import { motion } from 'framer-motion'

interface SectionCardProps {
  title: string
  description: string
}

function SectionCard({ title, description }: SectionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl p-6"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-400">{description}</p>
    </motion.div>
  )
}

export default SectionCard
