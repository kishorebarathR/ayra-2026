import Image from "next/image";
import React from "react";
import { keyAreasData } from "../../utils/KeyAreasData/keyAreasData";

const KeyAreas = () => {
  return (
    <>
      <div className="bg-white lg:py-20 pb-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Image
              src="/centre-for-community-engagement/key-areas.png"
              alt="Path Ways"
              width={1000}
              height={1000}
              className="w- hidden lg:block"
            />
            <div>
              <h4 className="text-3xl font-bold lg:hidden text-[#2050B1] font-tthoves-bold pb-5">
                Key Areas of Work
              </h4>
            </div>
            <div className="lg:hidden">
              <Image
                src="/centre-for-community-engagement/key-areas-mobile.svg"
                alt="Path Ways"
                width={500}
                height={500}
                className="w-full p-3"
              />
            </div>
            <div className="lg:hidden">
              <ul className="mt-4 space-y-3 text-gray-700">
                {keyAreasData.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src={item.icon}
                      alt="Bullet Icon"
                      width={16}
                      height={16}
                      className="mt-1 rotate-[50deg]"
                    />
                    <span className="text-[#002561]">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyAreas;
