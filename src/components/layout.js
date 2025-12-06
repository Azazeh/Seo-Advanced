/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className ="pt-24 px-4 md:px-0"></main>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
