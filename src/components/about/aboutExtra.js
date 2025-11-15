import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold">PELESTARI RASA</h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Wujudkan Warisan Kuliner Otentik dan Berdaya Saing.
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Jajanan pasar Nusantara adalah "rumah" bagi kekayaan resep dan kearifan lokal.
          Kami mengajak Anda untuk merasakan dan mendukung langsung bagaimana bahan baku lokal terbaik dan proses pembuatan yang otentik membentuk cita rasa yang unggul, berdaya saing, dan berkarakter.
          Jangan lewatkan kesempatan untuk menjadi bagian dari perjalanan melestarikan dan mengembangkan warisan rasa yang bermakna ini.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
            >
              JELAJAHI TOKO KAMI
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
  )
}
export default AboutExtra
