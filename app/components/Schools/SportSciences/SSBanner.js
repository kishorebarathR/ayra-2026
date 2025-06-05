import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs";
import Image from "next/image";
const SSBanner = () => {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Sports Sciences", href: "/schools/sports-sciences" },
          ]}
        />
      </div>
      {/* Sports Sciences Banner */}
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/schools/sports-and-sciences/sport-sciences-banner.png"
            alt="Sports Sciences Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/schools/sports-and-sciences/sport-sciences-mobile.png"
            alt="Sports Sciences Mobile Banner"
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

export default SSBanner;
