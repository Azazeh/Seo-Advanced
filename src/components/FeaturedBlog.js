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
          {/* ================= GOOGLE MAPS ================= */}
          <div className="mt-20">
            <h2 className="text-black text-4xl font-semibold mb-6 text-center">
              Lokasi Kami
            </h2>

            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.879715187661!2d106.6006951592488!3d-6.25379079622776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc436ba5a751%3A0x800393b01af32a14!2sJl.%20Wijaya%20Kusuma%206%20Blok%20RD3%20No.10%2C%20RT.4%2FRW.8%2C%20Bojong%20Nangka%2C%20Kecamatan%20Kelapa%20Dua%2C%20Kabupaten%20Tangerang%2C%20Banten%2015810!5e0!3m2!1sid!2sid!4v1768566023512!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
          {/* =============== END MAPS ================= */}
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
