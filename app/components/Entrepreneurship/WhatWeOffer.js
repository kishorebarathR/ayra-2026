import React from "react"
import Image from "next/image"

const WhatWeOffer = () => {
  const items = [
    {
      title: "Startup Incubation",
      description:
        "Support for student-led ventures with mentorship, workspace, and access to early-stage capital.",
    },
    {
      title: "Workshops & Bootcamps",
      description:
        "Hands-on learning in design thinking, product development, pitching, business model innovation, and more.",
    },
    {
      title: "Mentor <br /> Network",
      description:
        "Direct access to founders, investors, and industry leaders who’ve walked the path.",
    },
    {
      title: "Cross-Disciplinary Collaboration",
      description:
        "Ideas flourish at the intersection of disciplines—connect with peers from engineering, liberal arts, hospitality, business, and sports to co-create impactful solutions.",
    },
    {
      title: "Pitch Days & Demo Events",
      description:
        "Regular opportunities to showcase your startup ideas to investors, experts, and industry stakeholders.",
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 lg:px-14 py-6 md:py-10">
        {/* What We Offer Title */}
        <div className="flex justify-center items-center pb-6 md:pb-10">
          <Image
            src="/entrepreneurship/wwo.png"
            alt="What We Offer"
            width={600}
            height={400}
            className="w-full max-w-[400px] md:max-w-[600px] h-auto"
            priority
          />
        </div>

        {/* Image */}
        <div className="mb-8">
          <Image
            src="/entrepreneurship/img1.png"
            alt="What We Offer Image 1"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Points Grid */}
        <div className="container mx-auto ">
        {/* Points */}
        <div className="py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:divide-x divide-dashed divide-[#4FA6FF]">
            {items.map((item, index) => (
              <div key={index} className="px-2 lg:px-">
                <h1
                  className="text-xl md:text-2xl text-[#2050B1] font-tthoves-bold "
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h1>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default WhatWeOffer
