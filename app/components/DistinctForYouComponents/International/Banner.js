"use client";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs";


const Banner = () => {
  return (
    <>
     <div className="mx-auto">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "International Centre", href: "/distinct-for-you/international-centre" },
        ]}
      />
    </div>
    <div className="relative w-full bg-[#2050B2]">
      {/* Desktop Image */}
      <div className="hidden md:block w-full">
        <Image
          src="/international/int-banner-img.jpg"
          alt="Bachelor Program Desktop Banner"
          width={1920}
          height={1080}
          className="object-cover object-center w-full lg:h-[90vh]"
          priority
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden w-full">
        <Image
          src="/international/mobile-banner-int.png"
          alt="Bachelor Program Mobile Banner"
          width={800}
          height={1000} 
          className="object-cover object-center w-full h-auto"
          priority
        />
      </div>
    
    </div>


     <div className="w-full border-gray-300 border-t-2 border-dashed">
            <div className="container mx-auto border-r-2 border-l-2 border-dashed border-gray-300">
              <div className="max-w-4xl mx-auto py-12 px-4  md:px-8 space-y-8">
                <div className=" text-center">
                  <p className="text-md ">
                    At AYRA, we don&apos;t just prepare students for careers—we help them
                    launch them.
                  </p>
                  <p className="text-md text-gray-700 leading-relaxed">
                    The Placements & Internship Centre is a dynamic platform
                    connecting students to real-world opportunities across
                    industries, geographies, and career paths.
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-md text-gray-700 leading-relaxed">
                    Whether you&apos;re pursuing engineering, liberal arts, business,
                    hospitality, or sports sciences, we support you with resources,
                    guidance, and access to top organisations and mentors.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
     
    </>
  );
};

export default Banner;



