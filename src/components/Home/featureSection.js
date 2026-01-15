import React from "react"
import Fade from "react-reveal/Fade"

import HeroImage from "../../images/Jajan.jpeg"
import Image1 from "../../images/Risol.jpeg"
import Image2 from "../../images/Lontong.jpeg"
import Image3 from "../../images/Donat.jpeg"

const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2">
          <img
            src={HeroImage}
            alt="Aneka Jajanan"
            className="rounded-xl w-full h-64 sm:h-80 lg:h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-right">
          <h3 className="text-black font-bold text-3xl sm:text-4xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Macam Macam Aneka Jajanan Pasar
          </h3>

          <p className="mt-4 text-black opacity-70 text-sm sm:text-base lg:text-lg">
            Ada banyak aneka jajanan pasar yang biasa di jual belikan dalam pasar tradisional
            dan kami hadirkan untuk Anda.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
            <a
              href="tel:#"
              className="px-8 py-3 rounded-md bg-purple text-white border border-purple hover:bg-transparent hover:text-black transition"
            >
              Call Us Now
            </a>

            <a
              href="/gallery"
              className="px-8 py-3 rounded-md border border-purple text-black hover:bg-purple hover:text-white transition"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          <img src={Image1} alt="" className="rounded-xl w-full h-64 object-cover" />
          <img src={Image2} alt="" className="rounded-xl w-full h-64 object-cover" />
          <img src={Image3} alt="" className="rounded-xl w-full h-64 object-cover hidden lg:block" />
        </div>
      </Fade>

      {/* CONTOH CARD */}
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 text-center">
          
          <div className="p-6 rounded-xl bg-gradient-to-r from-pink to-purple">
            <h3 className="text-black text-xl font-semibold">Contoh</h3>
            <p className="mt-4 text-black opacity-70">
              Risol isi mayo pedas dengan daging asap
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dp text-white">
            <h3 className="text-xl font-semibold">Contoh</h3>
            <p className="mt-4 opacity-70">
              Lontong isi sayuran atau nama lainnya rogut
            </p>
          </div>

          <div className="p-6 rounded-xl bg-dp text-white">
            <h3 className="text-xl font-semibold">Contoh</h3>
            <p className="mt-4 opacity-70">
              Aneka donat kentang dengan varian yang cukup banyak
            </p>
          </div>

        </div>
      </Fade>
    </section>
  )
}

export default FeatureSection
