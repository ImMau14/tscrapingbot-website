import { TSLogoSvg } from "@components/tsx/TSLogoSvg.tsx"

interface FeaturesPageProps {
  className: string
  featuresList: Record<
    string,
    {
      title: string
      content: string
    }
  >
  title: string
}

export const FeaturesPage = ({ className, featuresList, title }: FeaturesPageProps) => {
  return (
    <main className={className}>
      <header className="animate-fade-in-down animate-ease animate-delay-100 mb-16 flex flex-col items-center gap-2">
        <TSLogoSvg className="fill-silver-300 h-16" />
        <h1 className="from-silver-150 via-silver-150 to-silver-550 font-heading mt-2 bg-linear-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          {title}
        </h1>
      </header>

      <div className="animate-fade-in-down animate-ease animate-delay-200 mb-16 grid w-full grid-cols-1 gap-8 px-4 md:mb-[10vh] md:px-60">
        {Object.values(featuresList).map((feature) => (
          <div
            key={feature.title}
            className="timeline-view animate-zoom-in animate-ease animate-range-[entry_5%_contain_20%] flex h-full w-full flex-col gap-6 rounded-lg border border-purple-300 bg-linear-to-b from-purple-800 via-purple-950 to-purple-950 p-6 transition-all duration-500 ease-in-out hover:scale-[103%] active:scale-105"
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-heading from-silver-150 via-silver-150 to-silver-550 bg-linear-to-b bg-clip-text pb-2 text-2xl font-semibold text-transparent">
                {feature.title}
              </h2>
              <p className="text-md font-body text-silver-400 leading-loose">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
