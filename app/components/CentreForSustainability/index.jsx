import React from "react";
import HeroBanner from "./HeroBanner";
import ForStudents from "./ForStudents";
import WorkSpans from "./WorkSpans";
import WhatDrivesUS from "./WhatDrivesUS";

const index = () => {
  return (
    <>
      <HeroBanner />
      <WhatDrivesUS />
      <WorkSpans />
      <ForStudents />
    </>
  );
};

export default index;
