import { motion } from "framer-motion"
import { TSLogoSvg } from "@components/tsx/TSLogoSvg.tsx"
import { Button } from "@components/tsx/Button.tsx"

interface HomePageProps {
  className: string
  description: string
  button: {
    Telegram: string
    GitHub: string
  }
}

const pageLinks = {
  GitHub: "https://github.com/ImMau14/tscrapingbot",
  Telegram: "https://t.me/TScrapingBot",
}

export const HomePage = ({ className, description, button }: HomePageProps) => {
  const offset = -3

  return (
    <main className={className}>
      <motion.header
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
        className="flex flex-col items-start gap-4"
      >
        <TSLogoSvg className="fill-silver-300 h-20" />
        <h1 className="font-heading from-silver-150 via-silver-150 to-silver-550 after:bg-green-450 before:from-silver-150 before:via-silver-150 before:to-silver-550 relative flex items-center bg-gradient-to-b bg-clip-text pr-0 pb-1 text-[2.8rem] leading-[1.25] font-bold text-transparent before:absolute before:-bottom-2 before:left-2 before:bg-gradient-to-b before:bg-clip-text before:text-sm before:text-transparent before:content-['ImMau14'] after:absolute after:right-1 after:-bottom-0 after:z-1 after:h-0.5 after:w-32 after:rounded-full after:content-[''] md:pr-4 md:text-5xl md:before:-bottom-4 md:after:right-5 md:after:-bottom-3">
          TScraping
          <span className="from-green-450 via-green-450 bg-gradient-to-b to-green-700 bg-clip-text text-transparent">
            Bot
          </span>
        </h1>
      </motion.header>

      <motion.p
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-silver-450 font-body text-sm"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: offset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="flex justify-center gap-4 text-white"
      >
        <a href={pageLinks.GitHub}>
          <Button color="purple">{button.GitHub}</Button>
        </a>

        <a href={pageLinks.Telegram}>
          <Button color="green">{button.Telegram}</Button>
        </a>
      </motion.div>
    </main>
  )
}
