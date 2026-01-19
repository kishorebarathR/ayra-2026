import React from "react"
import Banner from "./Banner"

import Ayraadapt from "./Ayraadapts"
import SchoolOfEngineering from "./SchoolOfEngineering"
import SchoolOfBusiness from "./SchoolOfBusiness"
import SchoolofHospitality from "./SchoolofHospitality"
import SchoolofSports from "./SchoolofSports"
import SchoolofLiberal from "./SchoolofLiberal"
const index = () => {
  return (
    <div>
      <Banner />
      <SchoolOfEngineering />
      <SchoolOfBusiness />
      <SchoolofHospitality />
      <SchoolofSports />
      <SchoolofLiberal />
      <Ayraadapt />
    </div>
  )
}

export default index
