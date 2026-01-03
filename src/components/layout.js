import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import WhatsAppButton from "./whatsAppButton"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Layout