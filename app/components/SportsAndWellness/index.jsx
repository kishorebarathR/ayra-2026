import React from "react";
import Banner from "./Banner";
import WhatYouFind from "./WhatYouFind";
import PartOfYourDailyLife from "./PartOfYourDailyLife";
import YourJourneyStartsHere from "./yourJourneyStartsHere";
import WhatYouFindMobile from "./WhatYouFindMobile";

const index = () => {
  return (
    <div>
      <Banner />
      <WhatYouFind />
      <WhatYouFindMobile />
      <PartOfYourDailyLife />
      <YourJourneyStartsHere />
    </div>
  );
};

export default index;
