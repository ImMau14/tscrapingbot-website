import { motion } from "framer-motion"
import QRImage from "@assets/qr.webp"
import { Button } from "@components/tsx/Button.tsx"
import { TSLogoSvg } from "@components/tsx/TSLogoSvg.tsx"

interface UsePageProps {
  className?: string
  use: {
    title: string
    description: string
    button: string
  }
}

export const UsePage = ({ className = "", use }: UsePageProps) => {
  const offset = -20

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: offset },
    visible: { opacity: 1, y: 0 },
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
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-2"
      >
        <TSLogoSvg className="fill-silver-300 h-16" />

        <h1 className="from-silver-150 via-silver-150 to-silver-550 font-heading bg-gradient-to-b bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl">
          {use.title}
        </h1>

        <p className="text-md font-body text-silver-450 px-4 text-center md:px-10">{use.description}</p>
      </motion.header>

      <motion.div
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 pt-4"
      >
        <img src={QRImage.src} alt="QR" className="h-40 w-40 md:h-52 md:w-52" />

        <a href="https://t.me/TScrapingBot">
          <Button color="blue">{use.button}</Button>
        </a>
      </motion.div>
    </motion.main>
  )
}
