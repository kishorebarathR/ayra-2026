import Image from "next/image";
import React from "react";
import { MobileGlanceData } from "./MobileGlanceData";

const MobileGlance = () => {
  return (
    <div className="bg-white lg:hidden">
      <div className="lg:hidden p-5">
        <ul className="mt-4 space-y-3 text-gray-700">
          {MobileGlanceData.map((item, index) => (
            <li key={index} className="flex items-start justify- gap-2">
              <Image
                src="/rocket-icon.svg"
                width={20}
                height={16}
                className="w-5 h-4 rotate-45 mt-1.5"
                alt="rocket-logo"
              />
              <span className="text-[#002561]">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileGlance;
