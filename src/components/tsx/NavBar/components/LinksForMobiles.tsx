import { useState, useRef } from "react"
import { MenuButtonSvg } from "./MenuButtonSvg.tsx"

type Page = {
  name: string
  href: string
}

interface LinksForMobilesProps {
  pages: Page[]
}

const getDelayClass = (idx: number) => {
  const delays = [
    "delay-[0ms]",
    "delay-[40ms]",
    "delay-[80ms]",
    "delay-[120ms]",
    "delay-[160ms]",
    "delay-[200ms]",
    "delay-[240ms]",
    "delay-[280ms]",
    "delay-[320ms]",
    "delay-[360ms]",
  ]
  return delays[idx] || "delay-[400ms]"
}

export const LinksForMobiles = ({ pages }: LinksForMobilesProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className="relative inline-block md:hidden">
      <button
        ref={btnRef}
        onClick={toggleMenu}
        aria-label="Links"
        aria-expanded={isOpen}
        className="text-silver-450 bg-transparent transition-transform duration-300 ease-in-out hover:scale-[1.03]"
      >
        <MenuButtonSvg />
      </button>
      <div
        className={`absolute right-0 mt-2 grid w-40 origin-top rounded-md shadow-lg transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          isOpen
            ? "pointer-events-auto scale-100 grid-rows-[1fr] opacity-100"
            : "pointer-events-none scale-95 grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="flex min-h-0 flex-col overflow-hidden rounded-md bg-black">
          {pages.map((page, idx) => (
            <li
              key={idx}
              className={`transition-all duration-250 ease-out hover:bg-green-500/20 ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-1.25 opacity-0"
              } ${getDelayClass(idx)}`}
            >
              <a
                href={page.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-silver-450 hover:text-silver-50 block px-4 py-2 text-sm"
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
