import { useState } from "react"

type Page = {
  name: string
  href: string
}

interface LinksForDesktopsProps {
  pages: Page[]
}

export const LinksForDesktops = ({ pages }: LinksForDesktopsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>
      <ul className="hidden gap-8 space-x-4 md:flex">
        {pages.map((page, index) => (
          <li
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`animate-ease-out relative before:absolute before:-bottom-1.5 before:left-0 before:h-0.5 before:w-full before:bg-green-500 before:opacity-80 ${hovered === index ? "before:animate-expand-horizontally" : "before:animate-contract-horizontally"}`}
          >
            <a
              href={page.href}
              className="from-silver-150 via-silver-150 to-silver-450 font-body bg-linear-to-b bg-clip-text text-sm text-transparent transition-colors duration-200 hover:text-white"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
