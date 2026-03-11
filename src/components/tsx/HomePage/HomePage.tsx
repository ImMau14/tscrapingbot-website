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
  GitHub: "https://github.com/ImMau14/tscrapingbot-rs",
  Telegram: "https://t.me/TScrapingBot",
}

export const HomePage = ({ className, description, button }: HomePageProps) => {
  return (
    <main className={className}>
      <header className="animate-fade-in-down animate-delay-100 animate-ease flex flex-col items-start gap-4">
        <TSLogoSvg className="fill-silver-300 h-20" />
        <h1 className="font-heading from-silver-150 via-silver-150 to-silver-550 after:bg-green-450 before:from-silver-150 before:via-silver-150 before:to-silver-550 relative flex items-center bg-linear-to-b bg-clip-text pr-0 pb-1 text-[2.8rem] leading-tight font-bold text-transparent before:absolute before:-bottom-2 before:left-2 before:bg-linear-to-b before:bg-clip-text before:text-sm before:text-transparent before:content-['ImMau14'] after:absolute after:right-1 after:bottom-0 after:z-1 after:h-0.5 after:w-32 after:rounded-full after:content-[''] md:pr-4 md:text-5xl md:before:-bottom-4 md:after:right-5 md:after:-bottom-3">
          TScraping
          <span className="from-green-450 via-green-450 bg-linear-to-b to-green-700 bg-clip-text text-transparent">
            Bot
          </span>
        </h1>
      </header>

      <p className="text-silver-450 font-body animate-fade-in-down animate-ease animate-delay-200 text-sm">
        {description}
      </p>

      <div className="animate-fade-in-down animate-delay-300 animate-ease flex justify-center gap-4 text-white">
        <a href={pageLinks.GitHub}>
          <Button color="purple">{button.GitHub}</Button>
        </a>

        <a href={pageLinks.Telegram}>
          <Button color="green">{button.Telegram}</Button>
        </a>
      </div>
    </main>
  )
}
