import React, { createRef, useContext } from "react"
import { AppContext } from "@/context/AppContext"
import PropTypes from "prop-types"
import styles from "./icon-item.module.css"
import { newUntil, newIcons } from "@/data/news"

const IconItem = ({ icon }) => {
  const { setIsCopied, sizeFilter } = useContext(AppContext)
  const iconSize = sizeFilter || 24

  if (!icon) return ""
  const iconRef = createRef()

  const isNew = () => {
    const currentTimestamp = Math.round(new Date().getTime() / 1000)
    return (
      newUntil && currentTimestamp < newUntil && newIcons.includes(icon.name)
    )
  }

  const copyIcon = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(iconRef.current.outerHTML)
  }

  const downloadIcon = () => {
    const blob = new Blob([iconRef.current.outerHTML])
    const el = document.createElement("a")
    el.href = window.URL.createObjectURL(blob)
    el.download = `${icon.name}.svg`
    el.click()
    el.remove()
  }

  return (
    <div
      className={`${styles.item} relative bg-gray-300 w-full rounded-xl px-3 py-2 flex-col text-center flex items-center justify-between hover:shadow-outline border-4 border-gray-300  transition-all duration-300`}
    >
      <div
        className={`${styles.name} absolute invisible mb-0 rounded-md text-white opacity-0 transition-all duration-300`}
      >
        {icon.name}
      </div>
      {isNew() && (
        <div
          className={`${styles.new} pl-3 absolute uppercase font-bold text-yellow-500`}
        >
          New!
        </div>
      )}
      <div className="py-2 flex-1 flex items-center">
        <svg
          ref={iconRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={icon.viewBox}
          width={iconSize}
          fill="currentColor"
          dangerouslySetInnerHTML={{
            __html: icon.path,
          }}
        />
      </div>
      <div
        className={`${styles.cta} flex w-full justify-between overflow-hidden transition-all duration-300 opacity-0 `}
      >
        <button
          onClick={downloadIcon}
          className="rounded-lg p-1 hover:bg-yellow-500 transition-background duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-5 -5 24 24"
            height="20"
            preserveAspectRatio="xMinYMin"
          >
            <path d="M8 6.641l1.121-1.12a1 1 0 0 1 1.415 1.413L7.707 9.763a.997.997 0 0 1-1.414 0L3.464 6.934A1 1 0 1 1 4.88 5.52L6 6.641V1a1 1 0 1 1 2 0v5.641zM1 12h12a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
        <button
          onClick={copyIcon}
          className="rounded-lg p-1 hover:bg-yellow-500 transition-background duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3 -2 24 24"
            height="20"
            preserveAspectRatio="xMinYMin"
          >
            <path d="M6 15H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3l3 3v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3zm0-2V7a2 2 0 0 1 2-2h2V2H2v11h4zm8.172-6H8v11h8V8.828L14.172 7z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

IconItem.propTypes = {
  icon: PropTypes.object.isRequired,
}

export default IconItem
