import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'

const pageLinks = {
  GitHub: 'https://github.com/ImMau14/tscrapingbot-website',
  Telegram: 'https://t.me/TScrapingBot'
}

// TODO: Add multilingual support.
export const HomePage = ({className}: string) => {
  return (
    <main className={ className } > 
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
        className="flex flex-col gap-4 items-start"
      >
        <TSLogoSvg className="fill-silver-300 h-20" />
        <h1 className="
          flex items-center pr-4 relative 
          text-5xl font-heading font-bold text-silver-300 
          after:content-[''] after:absolute 
          after:-bottom-3 after:right-5 
          after:h-0.5 after:w-32 after:rounded-full 
          after:bg-green-450
          before:content-['ImMau14'] before:absolute 
          before:-bottom-4 before:left-2
          before:text-sm
        ">
          TScraping<span className="text-green-450">Bot</span>
        </h1>
      </motion.header>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="text-silver-450 font-body text-sm"
      >
        Analíza páginas con IA desde Telegram con TScrapingBot
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="text-white flex gap-4 justify-center"
      >
        <a href={ pageLinks.GitHub } >
          <motion.button
            className="
              flex items-center justify-center text-sm font-body py-1 px-4 
              hover:bg-purple-850 duration-200
              bg-purple-950 border-2 
              border-purple-300/50
              rounded-full
            "
            initial={false}
            transition={{ type: 'spring', stiffness: 900, damping: 25 }}
            whileHover={{ scale: 1.06 }}
          >
            Ver en GitHub
          </motion.button>
        </a>
        
        <a href={ pageLinks.Telegram } >
          <motion.button 
            className="
              flex items-center justify-center text-sm font-body py-1 px-4  
              hover:bg-green-850 duration-200
              bg-purple-950 border-2 
              border-green-300/50 
              rounded-full
            "
            initial={false}
            transition={{ type: 'spring', stiffness: 900, damping: 25 }}
            whileHover={{ scale: 1.06 }}
          >
            Probar en Telegram
          </motion.button>
        </a>
      </motion.div>
    </main>
  )
}
