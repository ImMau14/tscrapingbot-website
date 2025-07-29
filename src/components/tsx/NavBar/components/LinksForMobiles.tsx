import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'

interface Page { 
  name: string
  href: string 
}

export const LinksForMobiles = ({ pages }: Page[]) => {
  const [isOpen, setIsOpen] = useState(false)
  const [alignRight, setAlignRight] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    if (btnRef.current) {
      const { right } = btnRef.current.getBoundingClientRect()
      const spaceRight = window.innerWidth - right
      setAlignRight(spaceRight < 150)
    }
    setIsOpen(open => !open)
  }

  const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative inline-block">
      <motion.button
        ref={ btnRef }
        onClick={ toggleMenu }
        initial={ false }
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="px-4 py-2 font-body text-sm rounded-md"
        style={{
          backgroundColor: '#23cc7a',
          color: '#eff3ff'
        }}
      >
        ...
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="dropdown"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={ listVariants }
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            className={`
              absolute mt-2 w-40 
              right-0
              shadow-lg rounded-md overflow-hidden
            `}
            style={{ backgroundColor: 'black' }}
          >
            {pages.map((page, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                transition={{ duration: 0.25, ease: 'easeOut', delay: idx * 0.04 }}
                initial={false}
                whileHover={{ backgroundColor: 'rgba(10, 198, 107, 0.2)' }}
              >
                <a
                  href={page.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm font-body"
                  style={{ color: '#eff3ff' }}
                >
                  {page.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}