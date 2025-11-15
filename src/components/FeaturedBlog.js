import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            KABAR TERKINI
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Inovasi Rasa & Cita Rasa Otentik
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Jajanan Pasar "Kue Cubit Premium" Raih Penghargaan Inovasi Rasa Terbaik di Tingkat Nasional!
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Prestasi membanggakan kembali diraih oleh UMKM kuliner lokal kami.
              Tim pembuat Kue Cubit berhasil menunjukkan kemampuan berkreasi dan mempertahankan cita rasa otentik dalam kompetisi kuliner tahunan.
              Pencapaian ini membuktikan semangat inovasi tanpa melupakan warisan rasa tradisional di dapur kita.
            </p>
            <a
              href="/blog/blog-post"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              More About
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
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Pelaksanaan Pelatihan Pengembangan Rasa dan Kemasan (PPRK)
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Para pedagang dan pembuat jajanan pasar lokal melaksanakan pelatihan nyata mengenai standar kebersihan, penggunaan bahan baku berkelanjutan, dan teknik pengemasan modern sebagai bagian dari program peningkatan kualitas.
              </p>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                More About
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
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
               Meriahnya Pekan Apresiasi Jajanan Pasar Nusantara Tahun Ini
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Seluruh komunitas kuliner memberikan apresiasi dan kejutan bagi para maestro jajanan pasar sebagai wujud terima kasih atas dedikasi dan bimbingan mereka dalam melestarikan resep kuno dan memperkenalkan rasa baru.
              </p>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                More About
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
    </Fade>
  )
}

export default FeaturedBlog
