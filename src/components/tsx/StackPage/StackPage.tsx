import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'

interface StackPageProps {
  className: string
  stack: {
    title: string
    metaContent: string
    description1: string
    description2: string
    stackList: Array<{
      name: string
      icon: string
    }>
  }
}

export const StackPage = ({ className, stack }: StackPageProps) => {
  const offset = -20

  return (
    <main className={className}>
      <motion.header
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className='flex flex-col items-center gap-2'
      >
        <TSLogoSvg className="fill-silver-300 h-16" />
        <h1
          className='
            bg-gradient-to-b from-silver-150 via-silver-150 to-silver-550
            bg-clip-text text-transparent pb-2
            text-4xl md:text-5xl font-heading font-bold
          '
        >
          {stack.title}
        </h1>
        <p className='text-md font-body text-silver-400 text-center px-4 md:px-10'>
          {stack.description1}
        </p>
        <p className='text-md font-body text-silver-400 text-center px-4 md:px-10'>
          {stack.description2}
        </p>
      </motion.header>

      <div className='flex gap-4 justify-center items-center px-0 md:px-4 flex-wrap'>
        {stack.stackList.map((item, i) => (
          <motion.img
            key={item.name}
            initial={{ opacity: 0, y: offset }}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeOut', delay: i * 0.1 + 0.1 },
              y: { duration: 0.8, ease: 'easeOut', delay: i * 0.1 + 0.1 },
              scale: { duration: 0.2 }
            }}
            className="
              border border-2 border-blue-350
              rounded-full
            "

            alt={item.name}
            src={item.icon}
          />
        ))}
      </div>
    </main>
  )
}
