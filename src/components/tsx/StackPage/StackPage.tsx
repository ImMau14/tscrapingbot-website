import { TSLogoSvg } from "@components/tsx/TSLogoSvg.tsx"

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
  const delays = [
    "animate-delay-300",
    "animate-delay-400",
    "animate-delay-500",
    "animate-delay-600",
    "animate-delay-700",
    "animate-delay-800",
    "animate-delay-900",
    "animate-delay-1000",
  ]

  return (
    <main className={className}>
      <header className="animate-fade-in-down animate-ease animate-delay-200 flex flex-col items-center gap-2">
        <TSLogoSvg className="fill-silver-300 h-16" />
        <h1 className="from-silver-150 via-silver-150 to-silver-550 font-heading bg-linear-to-b bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl">
          {stack.title}
        </h1>
        <p className="text-md font-body text-silver-450 px-4 text-center md:px-10">{stack.description1}</p>
        <p className="text-md font-body text-silver-450 px-4 text-center md:px-10">{stack.description2}</p>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-4 px-0 md:px-4">
        {stack.stackList.map((item, i) => (
          <img
            key={item.name}
            className={`border-blue-350 animate-fade-in-down animate-ease h-10 rounded-lg border-2 transition-all hover:scale-105 active:scale-110 ${delays[i]}`}
            alt={item.name}
            src={item.icon}
          />
        ))}
      </div>
    </main>
  )
}
