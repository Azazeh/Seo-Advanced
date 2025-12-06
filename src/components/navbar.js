
import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Gallery", to: "/gallery" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#d1a98b]/90 backdrop-blur-md border-b border-[#b48a6c] shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

        {/* Brand */}
        <Link to="/" className="text-2xl font-semibold text-[#5A2E20] tracking-wider">
          MOM'S PANTRY
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[#3b2a21] opacity-80 hover:opacity-100 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#5A2E20] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:#"
            className="ml-4 border border-[#5A2E20] px-4 py-2 rounded-lg text-[#5A2E20] hover:bg-[#5A2E20] hover:text-white transition duration-300"
          >
            Call Us
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 focus:outline-none"
        >
          <svg width="26" height="26" fill="#5A2E20" viewBox="0 0 448 512">
            <path d="M0 96c0-13 11-24 24-24h400c13 0 24 11 24 24s-11 24-24 
            24H24C11 120 0 109 0 96zm0 160c0-13 11-24 24-24h400c13 0 
            24 11 24 24s-11 24-24 24H24c-13 0-24-11-24-24zm424 
            184H24c-13 0-24-11-24-24s11-24 24-24h400c13 0 24 11 
            24 24s-11 24-24 24z"/>
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div className={`md:hidden bg-[#d1a98b] transition-all overflow-hidden ${open ? "max-h-[400px] py-3" : "max-h-0"} px-5`}>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setOpen(false)}
            className="block text-[#3b2a21] py-3 border-b border-[#b48a6c] last:border-none"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="tel:#"
          className="mt-4 block text-center border border-[#5A2E20] px-4 py-2 rounded-lg text-[#5A2E20] hover:bg-[#5A2E20] hover:text-white transition duration-300"
        >
          Call Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar
