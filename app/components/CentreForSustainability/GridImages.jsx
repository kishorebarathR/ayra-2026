import Image from "next/image";
import React from "react";
import { WhatDrivesUsData } from "../../utils/WhatDrivesUsData/WhatDrivesUsData";

const GridImages = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 container mx-auto py-5">
        {WhatDrivesUsData.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={`Grid ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-full object-cover p-3 lg:p-5"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default GridImages;
