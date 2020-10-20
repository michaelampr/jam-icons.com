import React from "react"
import PropTypes from "prop-types"

import AppHeader from "@/components/AppHeader"
import AppFooter from "@/components/AppFooter"

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
