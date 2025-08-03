import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'
import { Button } from '@components/tsx/Button.tsx'

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
          text-[2.8rem] md:text-5xl font-heading font-bold
          bg-gradient-to-b from-silver-150 via-silver-150 to-silver-550 bg-clip-text text-transparent
          after:content-[''] after:absolute 
          after:-bottom-0 md:after:-bottom-3 after:right-1 md:after:right-5 after:z-1
          after:h-0.5 after:w-32 after:rounded-full 
          after:bg-green-450
          before:content-['ImMau14'] before:absolute 
          before:-bottom-2 md:before:-bottom-4 before:left-2
          before:text-sm
          before:bg-gradient-to-b before:from-silver-150 before:via-silver-150 before:to-silver-550 
          before:bg-clip-text before:text-transparent
          leading-[1.25] pb-1 
        ">
          TScraping<span 
            className="bg-gradient-to-b from-green-450 via-green-450 to-green-700 bg-clip-text text-transparent">Bot</span>
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
        <a href={ pageLinks.GitHub }><Button color="purple">
          {button.GitHub}
        </Button></a>

        <a href={ pageLinks.Telegram }><Button color="green">
          {button.Telegram}
        </Button></a>
      </motion.div>
    </main>
  )
}
