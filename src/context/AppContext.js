import React, { createContext, useState } from "react"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("all")
  const [filter, setFilter] = useState()
  const [isCopied, setIsCopied] = useState(false)
  const [sizeFilter, setSizeFilter] = useState(24)
  const [typeFilter, setTypeFilter] = useState("both")

  const providerValue = {
    category,
    setCategory,
    isCopied,
    setIsCopied,
    filter,
    setFilter,
    sizeFilter,
    setSizeFilter,
    typeFilter,
    setTypeFilter,
  }

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
