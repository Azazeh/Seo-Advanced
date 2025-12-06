
import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-[#c49b77] shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-semibold font-montserrat tracking-wide">
          MOM'S <span className="text-gray-200">PANTRY'S</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["/", "/about", "/gallery", "/blog", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              className="relative after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform duration-300 font-medium opacity-90 hover:opacity-100"
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
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
          className="md:hidden bg-white p-2 rounded shadow"
        >
          <svg width="28" height="28" fill="black" viewBox="0 0 1792 1792">
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

      {/* MOBILE MENU DROPDOWN */}
      {openMenu && (
        <div className="md:hidden bg-[#c49b77] px-6 pb-4 space-y-4 animate-slide-down">
          {["/", "/about", "/gallery", "/blog", "/contact"].map((path, idx) => (
            <Link
              key={idx}
              to={path}
              onClick={() => setOpenMenu(false)}
              className="block text-gray-100 text-lg font-medium opacity-90 hover:opacity-100"
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
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

