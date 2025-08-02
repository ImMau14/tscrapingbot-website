import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { LinksForDesktops } from './components/LinksForDesktops'
import { LinksForMobiles } from './components/LinksForMobiles'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg'

interface Page { 
  name: string
  href: string
}

interface NavBarProps {
  pages: Page[]
}

export const NavBar: React.FC<NavBarProps> = ({ pages }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    if (window.scrollY > 0) onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`
        sticky top-0 z-50 w-full backdrop-filter
        transition duration-200 ease-out
        ${scrolled ? 'backdrop-blur-sm' : 'backdrop-blur-none'}
        max-h-12 md:max-h-16 p-4 md:p-8
        flex items-center justify-between
      `}
    >
      <a
        href="/"
        className="
          flex items-center no-underline
          font-heading font-bold
          text-sm md:text-xl
          bg-gradient-to-b from-silver-150 via-silver-150 to-silver-550 bg-clip-text text-transparent
        "
      >
        <TSLogoSvg className="h-6 md:h-8 mr-4 fill-silver-450" />
        <h2>TScrapingBot</h2>
      </a>

      <LinksForMobiles pages={pages} />
      <LinksForDesktops pages={pages} />
    </motion.nav>
  )
}
