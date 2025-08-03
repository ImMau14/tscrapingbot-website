import { motion } from 'framer-motion'
import QRImage from '@assets/qr.webp'
import { Button } from '@components/tsx/Button.tsx'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'

interface UsePageProps {
  className?: string
  use: {
    title: string
    description: string
    button: string
  }
}

export const UsePage = ({ className = '', use }: UsePageProps) => {
  const offset = -20

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: offset },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.main
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.header
        variants={itemVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-2"
      >
        <TSLogoSvg className="fill-silver-300 h-16" />

        <h1
          className="
            bg-gradient-to-b from-silver-150 via-silver-150 to-silver-550
            bg-clip-text text-transparent pb-2
            text-4xl md:text-5xl font-heading font-bold
          "
        >
          {use.title}
        </h1>

        <p className="text-md font-body text-silver-450 text-center px-4 md:px-10">
          {use.description}
        </p>
      </motion.header>

      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-8 pt-4"
      >
        <img
          src={QRImage.src}
          alt="QR"
          className="w-40 h-40 md:w-52 md:h-52"
        />

        <a href="https://t.me/TScrapingBot"><Button color="blue">
          {use.button}
        </Button></a>
      </motion.div>
    </motion.main>
  )
}
