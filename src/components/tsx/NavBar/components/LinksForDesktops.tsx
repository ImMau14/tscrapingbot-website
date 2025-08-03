import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Page {
  name: string
  href: string
}

export const LinksForDesktops = ({ pages }: Page[]) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return(
    <>
      <LayoutGroup>
        <ul 
          className="hidden md:flex space-x-4 gap-8"
        >
          {pages.map((page, index) => (
            <motion.li 
              key={ index } 
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              whileHover={{ scale: 1.06 }}
              initial={ false }
            >
              <a 
                href={ page.href } 
                className="
                  bg-gradient-to-b from-silver-150 via-silver-150 to-silver-450
                  bg-clip-text text-transparent hover:text-white duration-200
                  font-body text-sm 
                  relative
                "
                onMouseEnter={ () => setHoveredIndex(index) }
                onMouseLeave={ () => setHoveredIndex(null) }
              >
                { page.name }
                {hoveredIndex === index && (
                  <AnimatePresence>
                    <motion.div 
                      layoutId='hoverLine'
                      className="
                        bg-green-450
                        absolute -bottom-2 left-0
                        rounded-full w-full h-0.5
                      "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 300,
                        damping: 20
                      }}
                    />
                  </AnimatePresence>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </LayoutGroup>
    </>
  )
}