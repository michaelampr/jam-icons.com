import React from "react"
import styles from "./icons-list-placeholder.module.css"

const IconsItem = () => {
  const item = key => (
    <div
      key={key}
      className={`${styles.item} pulse bg-gray-400 w-full rounded-xl px-3 py-2`}
    />
  )
  let items = []
  for (let i = 0; i < 32; i++) {
    items.push(item(i))
  }

  return items
}

const IconsListPlaceholder = () => {
  return (
    <div className="p-2 item-list grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-5">
      <IconsItem />
    </div>
  )
}

export default IconsListPlaceholder
