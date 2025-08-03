import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  color: 'green' | 'blue' | 'purple'
}

export const Button = ({ children, color } : ButtonProps) => {  
  return (
    <motion.button 
      className={`
        flex items-center justify-center text-[0.7rem] md:text-sm font-body py-1 px-4  
        hover:bg-${color}-850 duration-150
        bg-purple-950 border-2 
        border-${color}-300/50 
        rounded-lg
        text-silver-50
      `}
      initial={false}
      transition={{
        scale: { type: 'spring', stiffness: 900, damping: 25 },
        filter: { duration: 0.2 }
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ filter: 'brightness(1.7)' }}
    >
      {children}
    </motion.button>
  )
}