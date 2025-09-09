import React from "react";
import Banner from "./Banner";
import Content from "./Content";
import DetailedProgram from "./DetailedProgram";
import LearningJourney from "./LearningJourney";
import IKS from "./iks";
import Pillars from "./Pillars";

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Content />
        <Pillars />
        <DetailedProgram />
        <LearningJourney />
        <IKS />
      </div>
    </>
  );
};

export default index;
