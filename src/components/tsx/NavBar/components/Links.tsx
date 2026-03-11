import { LinksForDesktops } from "./LinksForDesktops.tsx"
// import { LinksForMobiles } from "./LinksForMobiles.tsx"

type Page = {
  name: string
  href: string
}

interface LinksProps {
  pages: Page[]
}

export const Links = ({ pages }: LinksProps) => {
  return (
    <>
      {/* <LinksForMobiles pages={pages} /> */}
      <LinksForDesktops pages={pages} />
    </>
  )
}
