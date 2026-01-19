"use client"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
}

const SchoolPrograms = ({
  programs,
  imageSrc,
  imageAlt = "school image",
  title,
  description,
  layoutVariant = "default", // "default" or "engineering"
  introText, // For engineering variant
}) => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full flex flex-col justify-center items-center">
        {layoutVariant === "engineering" ? (
          <>
            <div className="container flex flex-col gap-10">
              <div className="flex flex-col items-center px-4">
                <div className="container mx-auto  border-l border-r border-dashed border-[#000000] flex items-center justify-center flex-col  text-left">
                  {introText?.map((text, index) => (
                    <p key={index} className="text-left lg:w-2/3 pt-4">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:border-b border-t md:border-dashed md:border-black  py-5  ">
              <div className="flex flex-col justify-center items-center md:flex-row  container mx-auto ">
                <div className=" w-1/2 flex flex-col items-start justify-start ">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={350}
                    height={370}
                    className=" w-full h-auto p-4 max-w-[300px] "
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center   ">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-tthoves-bold w-[85%]   ">
                    {title}
                  </h2>
                  <p className="text-black  font-tthoves-light  w-[85%]  ">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-[] flex flex-col pb-10">
            <div className="flex flex-col md:flex-row md:border-b border-t md:border-dashed md:border-black ">
              <div className="w-full md:w-1/2  flex flex-col items-center">
                <Image
                  src={imageSrc}
                  className="text-center p-4"
                  alt={imageAlt}
                  width={500}
                  height={100}
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black font-tthoves-bold">
                  {title}
                </h2>
                <p className="text-black  font-tthoves-light pt-5">
                  {description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Carousel Section */}
      <div className=" py-10">
        <div className="container mx-auto px-4">
          {/* Mobile: Carousel */}
          <div className="block md:hidden">
            <Slider {...sliderSettings}>
              {programs.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="relative overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      width={450}
                      height={700}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-10 w-full p-4 leading-tight space-y-2">
                      <h2 className="text-3xl font-schabo text-white text-end">
                        {item.title}
                      </h2>
                      {item.duration && (
                        <p className="text-white text-end mt-2">
                          Duration : {item.duration}
                        </p>
                      )}
                      {item.seats && (
                        <p className="text-white text-end">
                          Seats : {item.seats}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-black mt-4 px-2">{item.description}</p>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6  ">
            {programs.map((item) => (
              <div key={item.id}>
                <div className="relative overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    width={450}
                    height={700}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-10 w-full p-4 leading-tight space-y-2">
                    <h2 className="text-3xl lg:text-5xl font-schabo text-white text-end h-40">
                      {item.title}
                    </h2>
                    {item.duration && (
                      <p className="text-white text-end mt-2">
                        Duration : {item.duration}
                      </p>
                    )}
                    {item.seats && (
                      <p className="text-white text-end">
                        Seats : {item.seats}
                      </p>
                    )}
                  </div>
                </div>
                {item.description && (
                  <p className="text-black mt-4">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SchoolPrograms
