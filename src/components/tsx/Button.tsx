import type { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  color: "green" | "blue" | "purple"
}

const styles = {
  green: {
    border: "border-green-300/50",
    hover: "hover:bg-green-850",
  },
  blue: {
    border: "border-blue-300/50",
    hover: "hover:bg-blue-850",
  },
  purple: {
    border: "border-purple-300/50",
    hover: "hover:bg-purple-850",
  },
}

export const Button = ({ children, color }: ButtonProps) => {
  const s = styles[color]
  return (
    <button
      draggable="false"
      className={`font-body text-silver-50 flex cursor-pointer items-center justify-center rounded-lg border-2 bg-purple-950 px-4 py-1 text-[0.7rem] md:text-sm ${s.border} ${s.hover} transition-all duration-150 hover:scale-105 active:scale-110`}
    >
      {children}
    </button>
  )
}
