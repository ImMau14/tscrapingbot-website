import { motion } from 'framer-motion'
import webImg from '@assets/web.webp'

export const BgWebImage = () => {
  return (
    <motion.img
      src={ webImg.src }
      alt="Spider Web Image"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      draggable="false"
      className={`
        fixed top-0 left-0
        h-full w-full object-cover
        xl:w-full xl:h-full xl:object-cover
        -z-1
      `}
    />
  )
}
