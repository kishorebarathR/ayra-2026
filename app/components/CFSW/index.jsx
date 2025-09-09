import React from "react";
import Banner from "./Banner";
import Counselling from "./counselling";
import StudentClubs from "./StudentClubs";
import WhatWeDo from "./WhatWeDo";
import Core from "./Core";
const index = () => {
  return (
    <>
      <div>
        <Banner />
        <WhatWeDo />
        <Core />
        <StudentClubs />
        <Counselling />
      </div>
    </>
  );
};

export default index;
