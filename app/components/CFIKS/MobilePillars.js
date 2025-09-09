import Image from "next/image";
import React from "react";
import { MobilePillarsData } from "./MobilePillarsData";

const MobilePillars = () => {
  return (
    <div className="bg-white lg:hidden">
      <div className="lg:hidden p-5">
        <ul className="mt-4 space-y-3 text-gray-700">
          {MobilePillarsData.map((item, index) => (
            <li key={index} className="flex items-start justify- gap-3">
              <Image
                src={item.icon}
                alt="Bullet Icon"
                width={60}
                height={60}
                className="mt-1"
              />
              <span className="text-[#002561]">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobilePillars;
