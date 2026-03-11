import webImg from "@assets/web.webp"

export const BgWebImage = () => {
  return (
    <div className="animate-fade-half fixed top-0 left-0 z-[-1] h-full w-full xl:h-full xl:w-full">
      <img src={webImg.src} alt="Spider Web" draggable="false" className="h-full w-full object-cover xl:object-cover" />
    </div>
  )
}
