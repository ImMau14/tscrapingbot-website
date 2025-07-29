import { LinksForDesktops } from './LinksForDesktops.tsx'
import { LinksForMobiles } from './LinksForMobiles.tsx'
import { useMediaQuery } from 'react-responsive'

interface Page { 
  name: string
  href: string 
}

export const Links = ({ pages }: Page[]) => {
  const isMobile = useMediaQuery({ maxWidth: 740 })
  if (isMobile) return ( <LinksForMobiles pages={ pages } /> )
  else return ( <LinksForDesktops pages={ pages } /> )
}