import React, { useContext, useEffect } from "react"
import { AppContext } from "@/context/AppContext"
import styles from "./copied-flash.module.css"

const CopiedFlash = () => {
  const { isCopied, setIsCopied } = useContext(AppContext)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1350)
    }
  }, [isCopied, setIsCopied])

  return (
    isCopied && (
      <div className={`${styles.flash} fixed px-5 py-2 rounded-md text-white`}>
        Icon Copied!
      </div>
    )
  )
}

export default CopiedFlash
