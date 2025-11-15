import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/Jajan.jpeg"
import Image1 from "../../images/Risol.jpeg"
import Image2 from "../../images/Lontong.jpeg"
import Image3 from "../../images/Donat.jpeg"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Akreditasi</h3>
            <h4 className="mt-10 text-black  opacity-70 text-xl">A</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Metode Pembeljaran</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Praktikum</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
          <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl m-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block">
            <h3 className="text-white text-2xl">Kurikulum</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">100</h4>
          </div>
        </div>
      </Fade> */}

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4">
            <img
              className="rounded-xl h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold"></h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Macam Macam Aneka Jajanan Pasar
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Ada banyak aneka jajanan pasar yang biasa di jual belikan dalam pasar tradisional disini dan banyak juga yang kami jual disini. 
              Lihat selengkapnya di bawah ini
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Call Us Now
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  View Gallery
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              TECH STACK
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">Gatsby 5+</p>
                <p className="text-black opacity-50 text-sm">SSG and more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">React 18+</p>
                <p className="text-black opacity-50 text-sm">Create more...</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">Tailwind CSS 3+</p>
                <p className="text-black opacity-50 text-sm">
                  A utility-first CSS
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
              Start building amazing web experiences
            </h2>
            <p className="mt-10 text-white opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Fade> */}

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          LANDASAN RASA
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Warisan Manis Nusantara
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Jajanan pasar bukan sekadar pemuas lidah; ia adalah fondasi warisan kuliner yang kaya akan nilai sejarah dan filosofi. 
          Kami percaya bahwa setiap jajanan, dari klepon hingga getuk, membawa kisah tentang bahan lokal dan kearifan proses pembuatan tradisional. 
          Oleh karena itu, kami secara intensif mengintegrasikan empat pilar utama dalam menikmati jajanan pasar: Bahan Baku Berkualitas, Resep Otentik, Proses Pengolahan Higienis, dan Apresiasi Budaya
        </p>
      </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INOVASI RASA
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Kreativitas dan Adaptasi Jajanan
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Menghadapi semangat kuliner yang fleksibel dan adaptif terhadap perkembangan zaman, kami berkomitmen untuk menyediakan jajanan pasar yang tidak hanya otentik tetapi juga relevan dengan selera modern.
          Kami mengintegrasikan teknik penyajian dan kemasan modern sebagai sarana untuk membuka wawasan global, sambil tetap mempertahankan esensi rasa dan bahan baku lokal.
          Kami mendorong para pembuat jajanan pasar untuk berani bereksplorasi, berpikir kritis terhadap tren, dan menjadi pencipta rasa baru yang kreatif.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              See More
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">Contoh</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Risol isi mayo pedas dengan daging asap</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Contoh</h3> 
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Lontong isi sayuran atau nama lainnya rogut
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Contoh</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Aneka donat kentang dengan varian yang cukup banyak
            </h4>
          </div>
        </div>
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
