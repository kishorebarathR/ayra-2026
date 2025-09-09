import Image from "next/image";
import React from "react";
import { MobileLearningData } from "./MobileLearningDat";

const MobileLearning = () => {
  return (
    <div className="bg-white lg:hidden">
      <div className="flex justify-center items-center px-4">
        <div>
          <Image
            src="/csd/learning-mobile.svg"
            width={300}
            height={300}
            priority
            alt="csd learning journey"
            className="object-cover lg:hidden"
          />
        </div>
        <div className="lg:hidden p-5">
          <ul className="mt-4 space-y-3 text-gray-700">
            {MobileLearningData.map((item, index) => (
              <li key={index} className="flex items-start justify- gap-2">
                <span className="text-[#002561]">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileLearning;
