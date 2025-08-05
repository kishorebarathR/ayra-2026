import Image from "next/image";
import React from "react";
import { pathWaysData } from "../../utils/PathWaysData/pathWaysData";

const PathWays = () => {
  return (
    <>
      <div className="bg-white lg:py-20 pb-10">
        <div className="container mx-auto px-4 md:px-0">
          <div className="hidden lg:block">
            <div className="flex justify-center items-center">
              <Image
                src="/centre-for-inner-peace/path-ways.png"
                alt="Path Ways"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-2xl font-bold lg:hidden text-[#2050B1] font-tthoves-bold pb-5">
                Three Pathways, One Journey
              </h4>
              <p className="text-center font-tthoves-extralight">
                The Centre guides students and community members alike through
                three key practices, each mapped to a dimension of the self:
              </p>
              <Image
                src="/centre-for-inner-peace/path-ways-mobile.svg"
                alt="Path Ways"
                width={500}
                height={500}
                className="w-full py-5"
              />
            </div>
            <div className="lg:hidden">
              <ul className="mt-4 space-y-3 text-gray-700">
                {pathWaysData.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                      src={item.icon}
                      alt="Bullet Icon"
                      width={16}
                      height={16}
                      className="mt-1 rotate-[50deg]"
                    />
                    <span className="text-[#000000] font-tthoves-light">
                      {item.title}
                    </span>
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

export default PathWays;
