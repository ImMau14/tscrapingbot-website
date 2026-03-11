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
  return (
    <main className={className}>
      <header className="animate-fade-in-down animate-ease animate-delay-200 flex flex-col items-center gap-2">
        <TSLogoSvg className="fill-silver-300 h-16" />

        <h1 className="from-silver-150 via-silver-150 to-silver-550 font-heading bg-linear-to-b bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-5xl">
          {use.title}
        </h1>

        <p className="text-md font-body text-silver-450 px-4 text-center md:px-10">{use.description}</p>
      </header>

      <div className="flex flex-col items-center gap-8 pt-4">
        <img
          src={QRImage.src}
          alt="QR"
          className="animate-fade-in-down animate-ease animate-delay-300 h-40 w-40 md:h-52 md:w-52"
        />

        <a href="https://t.me/TScrapingBot" className="animate-fade-in-down animate-ease animate-delay-400">
          <Button color="blue">{use.button}</Button>
        </a>
      </div>
    </main>
  )
}
