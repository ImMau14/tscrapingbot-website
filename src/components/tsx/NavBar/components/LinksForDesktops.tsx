import { motion, LayoutGroup, AnimatePresence } from "framer-motion"
import { useState } from "react"

type Page = {
  name: string
  href: string
}

interface LinksForDesktopsProps {
  pages: Page[]
}

export const LinksForDesktops = ({ pages }: LinksForDesktopsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  return (
    <>
      <LayoutGroup>
        <ul className="hidden gap-8 space-x-4 md:flex">
          {pages.map((page, index) => (
            <motion.li
              key={index}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              whileHover={{ scale: 1.06 }}
              initial={false}
            >
              <a
                href={page.href}
                className="from-silver-150 via-silver-150 to-silver-450 font-body relative bg-linear-to-b bg-clip-text text-sm text-transparent duration-200 hover:text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {page.name}
                {hoveredIndex === index && (
                  <AnimatePresence>
                    <motion.div
                      layoutId="hoverLine"
                      className="bg-green-450 absolute -bottom-2 left-0 h-0.5 w-full rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
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
