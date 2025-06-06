"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const blocks = [
  {
    isText: true,
    title: "Learning as a Partnership",
    content:
      "Teaching at AYRA is grounded in dialogue, co-creation, and mentorship. Faculty are collaborators in your learning journey, not just instructors.",
  },
  {
    isText: true,
    title: "Bridging Theory and Practice",
    content:
      "From corporate boardrooms to field research, our faculty bring diverse experiences into the classroom, making learning dynamic, applied, and relevant.",
  },
  {
    isText: true,
    title: "Interdisciplinary by Default",
    content:
      "You’ll find business professors collaborating with tech faculty, and artists working with data scientists. Because at AYRA, problems don’t come in silos—so neither should learning.",
  },
  {
    isText: true,
    title: "Always Evolving",
    content:
      "Our faculty are lifelong learners themselves. They continuously evolve their teaching practice to respond to new knowledge, technologies, and student needs.",
  },
]

const OurFacultyPhilosophyMobile = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .slick-dots li button:before {
              font-size: 10px !important;
              color: #3B75CA !important;
            }
            .slick-dots li.slick-active button:before {
              color: blue !important;
            }
            .slick-dots {
              bottom: 0px !important;
            }
          }
        `}
      </style>

      <div className="w-full bg-white flex flex-col items-center justify-start pt-10 px-4 mb-10">
        {/* Heading */}
        <h2 className="text-6xl font-schabo text-[#2050B1] leading-tight uppercase text-center mb-8">
          OUR FACULTY
          <br />
          PHILOSOPHY
        </h2>

        {/* Slider */}
        <div className="w-full">
          <Slider {...settings}>
            {blocks.map((block, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-full px-6"
              >
                <div className="flex flex-col items-center justify-center text-center max-w-md my-12">
                  <h3 className="text-lg font-bold text-[#2050B1] uppercase mb-3">
                    {block.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{block.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default OurFacultyPhilosophyMobile
