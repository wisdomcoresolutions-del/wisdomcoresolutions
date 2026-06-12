import { motion } from 'framer-motion'

function WhatsAppFloat() {
  const whatsappNumber = '919050524678' // Adding India country code (+91)
  const message = encodeURIComponent('Hello Wisdomcoresolution')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
    >
      {/* Pulsing ring effects */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/30 opacity-75 animate-ping duration-1000 pointer-events-none" />
      <span className="absolute -inset-2 rounded-full bg-emerald-500/10 opacity-40 animate-pulse pointer-events-none" />

      {/* Tooltip text bubble on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
        <span>Chat with us on WhatsApp</span>
      </div>

      {/* WhatsApp Link button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WisdomCore Solutions on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer relative"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          className="text-white"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.115-2.908-6.993-1.88-1.88-4.36-2.91-7.002-2.91-5.45 0-9.88 4.424-9.884 9.87-.001 1.777.475 3.51 1.376 5.061L1.177 22.84l6.096-1.599c.003-.001.002-.001.002 0zM17.16 14.73c-.283-.141-1.67-.824-1.93-.917-.257-.094-.446-.141-.634.141-.188.281-.727.917-.891 1.101-.163.184-.327.207-.61.066-.283-.14-1.196-.44-2.28-1.408-.843-.751-1.412-1.68-1.577-1.961-.164-.282-.018-.434.123-.574.127-.127.283-.329.424-.493.14-.165.188-.282.282-.47.094-.188.047-.353-.023-.493-.07-.14-.634-1.53-.87-2.095-.228-.55-.459-.475-.634-.484-.163-.008-.353-.01-.54-.01-.188 0-.494.07-.753.353-.258.282-.99 1.011-.99 2.467 0 1.457 1.058 2.87 1.2 3.058.143.189 2.08 3.178 5.04 4.46.703.305 1.252.487 1.68.623.707.226 1.35.194 1.858.118.566-.085 1.67-.682 1.905-1.34.235-.659.235-1.224.164-1.34-.07-.117-.258-.188-.54-.33z" />
        </svg>
      </a>
    </motion.div>
  )
}

export default WhatsAppFloat
