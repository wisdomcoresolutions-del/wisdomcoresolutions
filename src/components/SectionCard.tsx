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
      <h3 className="text-lg font-bold text-zinc-950">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-zinc-600 font-normal">{description}</p>
    </motion.div>
  )
}

export default SectionCard
