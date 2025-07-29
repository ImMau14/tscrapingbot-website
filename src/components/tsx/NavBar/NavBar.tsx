import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'
import { Links } from './components/Links.tsx'

const pages = [
  { name: 'Inicio', href: '/' },
  { name: 'Características', href: '/features' },
  { name: 'Tecnologías', href: '/stack' },
  { name: 'Probar', href: '/try' }
]

// TODO: Add multilingual support.
export const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="
        bg-transparent
        max-h-12 md:max-h-16 md:p-8 p-4
        flex items-center justify-between
      "
    >
      <a href="/" className="
        text-silver-450
        font-heading text-sm md:text-xl font-bold
        no-underline
        flex items-center
      ">
        <TSLogoSvg
          className="
            h-6 md:h-8 mr-4
            fill-silver-450
          "
        />
        <h2>TScrapingBot</h2>
      </a>

      <Links pages={ pages } />
    </motion.nav>
  )
}
