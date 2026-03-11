import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { LinksForDesktops } from "./components/LinksForDesktops"
import { LinksForMobiles } from "./components/LinksForMobiles"
import { TSLogoSvg } from "@components/tsx/TSLogoSvg"

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
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full backdrop-filter transition duration-200 ease-out ${scrolled ? "backdrop-blur-sm" : "backdrop-blur-none"} flex max-h-12 items-center justify-between p-4 md:max-h-16 md:p-8`}
    >
      <a
        href="/"
        className="font-heading from-silver-150 via-silver-150 to-silver-550 flex items-center bg-gradient-to-b bg-clip-text text-sm font-bold text-transparent no-underline md:text-xl"
      >
        <TSLogoSvg className="fill-silver-450 mr-4 h-6 md:h-8" />
        <h2>TScrapingBot</h2>
      </a>

      <LinksForMobiles pages={pages} />
      <LinksForDesktops pages={pages} />
    </motion.nav>
  )
}
