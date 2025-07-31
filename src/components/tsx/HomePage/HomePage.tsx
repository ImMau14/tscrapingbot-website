import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'

interface HomePageProps {
  className: string
  description: string
  button: {
    Telegram: string
    GitHub: string
  }
}

const pageLinks = {
  GitHub: 'https://github.com/ImMau14/tscrapingbot',
  Telegram: 'https://t.me/TScrapingBot'
}

// TODO: Add multilingual support.
export const HomePage = ({ className, description, button }: HomePageProps) => {
  const offset = -3

  return (
    <main className={ className } > 
      <motion.header
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
        className="flex flex-col gap-4 items-start"
      >
        <TSLogoSvg className="fill-silver-300 h-20" />
        <h1 className="
          flex items-center pr-0 md:pr-4 relative 
          text-[2.8rem] md:text-5xl font-heading font-bold text-silver-300 
          after:content-[''] after:absolute 
          after:-bottom-0 md:after:-bottom-3 after:right-1 md:after:right-5
          after:h-0.5 after:w-32 after:rounded-full 
          after:bg-green-450
          before:content-['ImMau14'] before:absolute 
          before:-bottom-2 md:before:-bottom-4 before:left-2
          before:text-sm
        ">
          TScraping<span className="text-green-450">Bot</span>
        </h1>
      </motion.header>

      <motion.p
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="text-silver-450 font-body text-sm"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        className="text-white flex gap-4 justify-center"
      >
        <a href={ pageLinks.GitHub } >
          <motion.button
            className="
              flex items-center justify-center text-[0.7rem] md:text-sm font-body py-1 px-4 
              hover:bg-purple-850 duration-200
              bg-purple-950 border-2 
              border-purple-300/50
              rounded-full
            "
            initial={false}
            transition={{ type: 'spring', stiffness: 900, damping: 25 }}
            whileHover={{ scale: 1.06 }}
          >
            {button.GitHub}
          </motion.button>
        </a>
        
        <a href={ pageLinks.Telegram } >
          <motion.button 
            className="
              flex items-center justify-center text-[0.7rem] md:text-sm font-body py-1 px-4  
              hover:bg-green-850 duration-200
              bg-purple-950 border-2 
              border-green-300/50 
              rounded-full
            "
            initial={false}
            transition={{ type: 'spring', stiffness: 900, damping: 25 }}
            whileHover={{ scale: 1.06 }}
          >
            {button.Telegram}
          </motion.button>
        </a>
      </motion.div>
    </main>
  )
}
