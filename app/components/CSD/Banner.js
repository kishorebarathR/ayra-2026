import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../utils/Breadcrumbs";

const Banner = () => {
  return (
    <>
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Centre for Skill Development",
              href: "/centres-for-excellence/centre-for-skill-development",
            },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/csd/banner.png"
            alt="Center for Skill Development Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/csd/banner-mobile.png"
            alt="Center for Skill Development Mobile Banner"
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
