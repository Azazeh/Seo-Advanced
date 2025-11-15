import React from "react"
import Fade from "react-reveal/Fade"

import Image3 from "../../images/Jajanan2.png"

const AboutHeader = () => {
  return (
    <Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl max-h-96 m-4">
          <img alt="Image" src={Image3}></img>
        </div>
        <div className="mt-10 px-8">
          <h1 className="font-bold text-5xl text-black text-gradient bg-gradient-to-r from-pink to-purple">
            Visi & Filosofi
          </h1>
          <h2 className="text-black text-4xl font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-2xl lg:text-3xl">
         Menekankan komitmen terhadap penggunaan bahan-bahan berkualitas tinggi yang bersumber dari petani dan produsen lokal.
          </h2>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
