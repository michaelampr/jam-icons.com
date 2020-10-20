import "./src/assets/css/jam.css"
import React from "react"

import { AppProvider } from "./src/context/AppContext"

export const wrapRootElement = ({ element }) => (
  <AppProvider>{element}</AppProvider>
)
