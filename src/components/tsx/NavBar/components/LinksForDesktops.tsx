import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Page {
  name: string
  href: string
}

interface LinksForDesktopsProps {
  pages: Page[]
}

export const LinksForDesktops = ({ pages }: LinksForDesktopsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return(
    <>
      <LayoutGroup>
        <ul className="flex space-x-4 gap-8">
          {pages.map((page, index) => (
            <li key={ index }>
              <a 
                href={ page.href } 
                className={`
                  text-[rgb(var(--soft-white))] font-body text-sm 
                  relative
                `}
                onMouseEnter={ () => setHoveredIndex(index) }
                onMouseLeave={ () => setHoveredIndex(null) }
              >
                { page.name }
                {hoveredIndex === index && (
                  <AnimatePresence>
                    <motion.div 
                      layoutId='hoverLine'
                      className={`
                        bg-[rgb(var(--neon-green))]
                        absolute -bottom-2 left-0
                        rounded-full w-full h-0.5
                      `}
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
            </li>
          ))}
        </ul>
      </LayoutGroup>
    </>
  )
}