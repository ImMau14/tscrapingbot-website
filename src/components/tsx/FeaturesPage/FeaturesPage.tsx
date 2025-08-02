import { motion } from 'framer-motion'
import { TSLogoSvg } from '@components/tsx/TSLogoSvg.tsx'

interface FeaturesPageProps {
  className: string
  featuresList: Record<string, {
    title: string
    content: string
  }>
  title: string
}

export const FeaturesPage = ({ className, featuresList, title }: FeaturesPageProps) => {
  const offset = -20

  return (
    <main className={className}>
      <motion.header
        initial={{ opacity: 0, y: offset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0 }}
        className="flex flex-col items-center gap-2 mb-8"
      >
        <TSLogoSvg className="fill-silver-300 h-16" />
        <h1 
          className="
            bg-gradient-to-b from-silver-150 via-silver-150 to-silver-550 bg-clip-text text-transparent
            text-4xl md:text-5xl font-heading font-bold mt-2
          "
        >
          {title}
        </h1>
      </motion.header>

      <div className="grid grid-cols-1 gap-8 w-full px-4 md:px-60">
        {Object.values(featuresList).map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: offset }}
            whileHover={{ scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              opacity: { duration: 0.8, ease: 'easeOut', delay: i * 0.2 + 0.2 },
              y: { duration: 0.8, ease: 'easeOut', delay: i * 0.2 + 0.2 },
              scale: { duration: 0.2 }
            }}
            className="
              bg-gradient-to-b from-purple-800 via-purple-950 to-purple-950
              border border-purple-300
              rounded-lg p-6 flex flex-col gap-6
              w-full h-full
            "
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold font-heading text-silver-200">
                {feature.title}
              </h2>
              <p className="text-md font-body text-silver-400 leading-loose">
                {feature.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
