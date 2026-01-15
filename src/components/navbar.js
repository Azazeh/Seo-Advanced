import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto"
  }, [openMenu])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#c49b77] border-b-4 border-[#c49b77] z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide text-white"
          >
            MOM'S <span className="opacity-80">PANTRY'S</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {["/", "/about", "/gallery", "/blog", "/contact"].map((path, idx) => (
              <Link
                key={idx}
                to={path}
                className="relative text-white font-medium opacity-90 hover:opacity-100
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-full after:bg-white after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </Link>
            ))}

            <a
              href="tel:#"
              className="border border-white text-white px-4 py-2 rounded-lg
                hover:bg-white hover:text-[#c49b77] transition duration-300"
            >
              Call Us
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden bg-white p-2 rounded-md shadow"
            aria-label="Toggle Menu"
          >
            <svg width="26" height="26" fill="black" viewBox="0 0 1792 1792">
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 
              0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 
              0 45 19t19 45zm0-512v128q0 26-19 45t-45 
              19h-1408q-26 0-45-19t-19-45v-128q0-26 
              19-45t45-19h1408q26 0 45 19t19 
              45zm0-512v128q0 26-19 45t-45 
              19h-1408q-26 0-45-19t-19-45v-128q0-26 
              19-45t45-19h1408q26 0 45 19t19 45z" />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden bg-[#c49b77] border-t border-white/30">
            <div className="px-6 py-4 space-y-4">
              {["/", "/about", "/gallery", "/blog", "/contact"].map((path, idx) => (
                <Link
                  key={idx}
                  to={path}
                  onClick={() => setOpenMenu(false)}
                  className="block text-white text-lg font-medium"
                >
                  {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
                </Link>
              ))}

              <a
                href="tel:#"
                className="block w-full text-center bg-white text-[#c49b77]
                  py-2 rounded-md font-medium"
              >
                Call Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SPACER (INI YANG FIX HEADER KEPOTONG) */}
      <div className="h-20" />
    </>
  )
}

export default Navbar
