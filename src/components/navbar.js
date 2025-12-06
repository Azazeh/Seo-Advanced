
import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#c49b77] border-b border-[#a78469] z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold font-montserrat tracking-wide">
          MOM'S <span className="text-gray-200">PANTRY'S</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="relative text-white font-medium opacity-90 hover:opacity-100 
              after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:#"
            className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#c49b77] transition duration-300"
          >
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden bg-white p-2 rounded-lg shadow-md active:scale-95 transition"
        >
          <svg width="26" height="26" fill="black" viewBox="0 0 1792 1792">
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 
            0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 
            0 45 19t19 45zm0-512v128q0 26-19 45t-45 
            19h-1408q-26 0-45-19t-19-45v-128q0-26 
            19-45t45-19h1408q26 0 45 19t19 
            45zm0-512v128q0 26-19 45t-45 
            19h-1408q-26 0-45-19t-19-45v-128q0-26 
            19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <div className="md:hidden bg-[#b8926f] px-6 pb-6 pt-2 space-y-4 shadow-lg animate-slide-down">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setOpenMenu(false)}
              className="block text-white text-lg font-medium opacity-90 hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:#"
            className="block w-full text-center border bg-white text-[#c49b77] py-2 rounded-md font-medium hover:bg-transparent hover:text-white transition duration-300"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar


