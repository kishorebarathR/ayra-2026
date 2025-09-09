import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import DetailedProgram from "./DetailedProgram";
import LearningJourney from "./LearningJourney";
import IKS from "./iks";
import Glance from "./Glance";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Content />
        <Glance />
        <DetailedProgram />
        <LearningJourney />
        <IKS />
      </div>
    </>
  );
};

export default index;
