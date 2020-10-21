import React, { useContext, useEffect, useState } from "react"
import IconItem from "@/components/IconItem"
import IconsListPlaceholder from "@/components/IconsListPlaceholder"
import icons from "@/data/icons"
import { AppContext } from "@/context/AppContext"

const IconsList = () => {
  const [iconsEl, setIconsEl] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const { filter, category, typeFilter } = useContext(AppContext)

  useEffect(() => {
    let filteredIcons = icons
    if (filter) {
      filteredIcons = filteredIcons.filter(
        icon => icon.name.includes(filter) || icon.keywords.includes(filter)
      )
    }
    if (category !== "all") {
      filteredIcons = filteredIcons.filter(icon => icon.category === category)
    }
    if (typeFilter !== "both") {
      filteredIcons = filteredIcons.filter(icon => icon.type === typeFilter)
    }
    setIconsEl(filteredIcons)
    setIsLoaded(true)
  }, [filter, category, typeFilter])

  if (!isLoaded) {
    return <IconsListPlaceholder />
  }

  return !iconsEl.length ? (
    <div className="py-12 text-gray-500 font-semibold text-center">
      No icon found for that search.
    </div>
  ) : (
    <div className="p-2 item-list grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
      {iconsEl.map((icon, i) => (
        <IconItem icon={icon} key={`icon-${i}`} />
      ))}
    </div>
  )
}

export default IconsList
