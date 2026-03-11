import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  color: "green" | "blue" | "purple"
}

const styles = {
  green: {
    border: "border-green-300/50",
    hover: "hover:bg-green-850",
  },
  blue: {
    border: "border-blue-300/50",
    hover: "hover:bg-blue-850",
  },
  purple: {
    border: "border-purple-300/50",
    hover: "hover:bg-purple-850",
  },
}

export const Button = ({ children, color }: ButtonProps) => {
  const s = styles[color]
  return (
    <motion.button
      className={`font-body text-silver-50 flex items-center justify-center rounded-lg border-2 bg-purple-950 px-4 py-1 text-[0.7rem] md:text-sm ${s.border} ${s.hover} duration-150`}
      initial={false}
      transition={{
        scale: { type: "spring", stiffness: 900, damping: 25 },
        filter: { duration: 0.2 },
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ filter: "brightness(1.7)" }}
    >
      {children}
    </motion.button>
  )
}
