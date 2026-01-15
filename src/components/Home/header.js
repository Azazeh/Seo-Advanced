import React from "react"
import Fade from "react-reveal/Fade"
import hero from "../../images/Logobaru.png"

const Header = () => {
  return (
    <Fade duration={2200}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          
          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-semibold opacity-70">
              Selamat Datang Di Toko Aneka Jajanan Pasar Kami
            </h1>

            <h2 className="mt-3 text-black font-bold text-3xl sm:text-4xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Moms Pantry
            </h2>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://wa.me/62895414881330?text=Halo%20saya%20ingin%20bertanya%20tentang%20produk%20Mom's%20Pantry"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md bg-purple text-white border border-purple hover:bg-transparent hover:text-black transition"
              >
                Contact Us
              </a>

              <a
                href="https://wa.me/62895414881330"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-md border border-purple text-black hover:bg-purple hover:text-white transition"
              >
                Get To Know Us
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={hero}
              alt="Moms Pantry"
              className="max-w-xs sm:max-w-sm lg:max-w-md w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Header
