"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import Breadcrumbs from "../../../utils/Breadcrumbs"

const Banner = () => {
  return (
    <>
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Academic Programs",
              href: "/admissions/academic-programs",
            },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#002462] m-0 p-0">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/admissions/academic-programs/programs-banner.webp"
            alt="Academic Programs Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/admissions/academic-programs/programs-banner-mobile.webp"
            alt="Academic Programs Mobile Banner"
            width={800}
            height={1000}
            className="w-full h-auto align-top px-4"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default Banner
