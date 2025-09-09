import React from "react";
import Banner from "./Banner";
import Facilities from "./Facilities";
import Core from "./Core";
import KeyActivities from "./KeyActivities";
import Counselling from "./counselling";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Facilities />
        <Core />
        <KeyActivities />
        <Counselling />
      </div>
    </>
  );
};

export default index;
