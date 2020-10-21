import React, { createContext, useState } from "react"

const defaultState = {
  category: "all",
  setCategory: () => {},
  isCopied: false,
  setIsCopied: () => {},
  filter: null,
  setFilter: () => {},
  sizeFilter: 24,
  setSizeFilter: () => {},
  typeFilter: "both",
  setTypeFilter: () => {},
}

export const AppContext = createContext(defaultState)

export const AppProvider = ({ children }) => {
  const [category, setCategory] = useState("all")
  const [filter, setFilter] = useState(null)
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
