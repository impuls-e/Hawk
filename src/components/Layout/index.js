import React from "react"

import "./styles.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
