import React from "react"
import AboutTeamCard from "./aboutTeamCard"

import grid1 from "../../images/Risol.jpeg"
import grid2 from "../../images/Lontong.jpeg"
import grid3 from "../../images/Donat.jpeg"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard Import grid1
        imgSrc={grid1}
        position="Risol Mayo"
      ></AboutTeamCard>
      <AboutTeamCard Import grid3
        imgSrc={grid3}
        position="Donat Aneka Rasa"
      ></AboutTeamCard>
      <AboutTeamCard Import grid2
        imgSrc={grid2}
        position="Lontong Isi"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
