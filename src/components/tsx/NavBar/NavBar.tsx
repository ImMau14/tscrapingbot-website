import { motion } from 'framer-motion'
import { TSLogo } from './components/TSLogo.tsx'
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
      className={`
        bg-transparent
        h-16 md:p-8 p-4
        flex items-center justify-between
      `}
    >
      <a href="/" className={`
        text-silver-450
        font-heading text-xl font-bold
        no-underline
        flex items-center
      `}>
        <TSLogo />
        <h1>TScrapingBot</h1>
      </a>

      <Links pages={ pages } />
    </motion.nav>
  )
}
