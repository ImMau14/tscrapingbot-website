import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { LinksForDesktops } from './components/LinksForDesktops.tsx'
import { TSLogo } from './components/TSLogo.tsx'

const pages = [
  { name: 'Inicio', href: '/' },
  { name: 'Características', href: '/features' },
  { name: 'Tecnologías', href: '/stack' },
  { name: 'Probar', href: '/try' }
]

// TODO: Add multilingual support.
export const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 740 })

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={`
        bg-transparent 
        h-16 ${isMobile ? 'p-4' : 'p-8'}
        flex items-center justify-between
      `}
    >
      <a href="/" className={`
        text-[rgb(var(--soft-white))] 
        font-heading text-xl font-bold
        no-underline
        flex items-center
      `}>
        <TSLogo
          className={`
            h-8 mr-4
            fill-[rgb(var(--soft-white))]
          `}
        />
        <h1>TScrapingBot</h1>
      </a>

      {isMobile ? (
        <h2 className="font-body text-[rgb(var(--soft-white))]">Aún no...</h2>
      ) : (
        <LinksForDesktops pages={ pages } />
      )}
    </motion.nav>
  )
}
