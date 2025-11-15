import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      {/* <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row mb-5 max-h-80">
          <div className="w-2/4 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-5xl mt-5 font-bold text-white">
              test<br></br>
            </h1>
            <p className="mt-5 text-white opacity-70">
              test
            </p>
          </div>
          <div className="overflow-hidden rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6 object-cover object-center h-full w-full">
            <img src={Image3} alt="image"></img>
          </div>
        </div>
      </Fade> */}

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
       {/* <p class="text-black opacity-70 font-normal mt-3 text-justify -ml--100">
          SDN KAMPUNG BAMBU III adalah institusi pendidikan dasar yang berkomitmen menciptakan lulusan yang tidak hanya unggul dalam akademis, tetapi juga memiliki karakter kuat dan adaptif. Terinspirasi oleh lingkungan 'Kampung Bambu', kami menanamkan filosofi bambu dalam proses belajar mengajar: tumbuh tegak, fleksibel menghadapi perubahan, dan solidaritas yang erat antar sesama.
          Kami mengintegrasikan nilai-nilai Pancasila sebagai inti kurikulum karakter, memastikan setiap siswa memahami pentingnya persatuan, kemanusiaan, dan keadilan.
          Dengan dukungan lingkungan belajar yang tenang, kami siap membekali putra-putri bangsa dengan pengetahuan dan integritas yang dibutuhkan untuk masa depan.  
       </p> */}
      

      <div className="mt-10 px-8">  
        <h2 className="text-black text-4xl font-semibold">KEMAJUAN KULINER</h2>
        <h3 className="text-black text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-gradient bg-gradient-to-r from-pink to-purple">
          Membentuk Cita Rasa dengan Kecepatan Inovasi.
        </h3>

        <p className="text-black opacity-70 font-normal mt-3 text-3xl xxs:text-3xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-lg">
          Kualitas jajanan pasar kami diukur dari seberapa cepat kami mampu beradaptasi dengan tren rasa dan menguasai teknik pengolahan baru.
          Kami menerapkan metode produksi yang dinamis dan higienis, sejalan dengan sifat kuliner Nusantara yang kaya namun tetap luwes untuk dimodifikasi.
          Dengan fokus pada penggunaan bahan baku lokal dan integrasi teknik pengemasan modern, kami memastikan bahwa setiap produk tidak hanya menyerap resep kuno, tetapi juga membangun citra fundamental untuk bersaing dan memimpin di era digital.
        </p>
      </div>
    </div>
  )
}

export default WorkPage
