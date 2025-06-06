'use client';

import React from 'react';
import Slider from 'react-slick';

const blocks = [
  {
    isText: true,
    title: 'THE OPEN CANVAS PHILOSOPHY',
    content:
      "At AYRA, students co-create their journey. Whether they want to move faster or slower, specialise or stay broad, we support them in building an education that reflects who they are and who they want to become."
  },
  {
    isText: true,
    title: 'Designed Around You',
    content:
      'From flexible academic structures to a diverse ecosystem of learning and mentorship, every aspect of AYRA has been built around the evolving needs of young people today.'
  },
  {
    isText: true,
    title: 'Future-Ready Curriculum',
    content:
      "With a strong foundation in liberal arts, technology, business, hospitality, and sports sciences, our academic offerings are designed to meet the demands of tomorrow's world - while fostering curiosity, creativity, and critical thought."
  },
  {
    isText: true,
    title: 'Rooted in India, Open to the World',
    content: "Based in Bengaluru, India’s innovation capital, Ayra connects the local and global. We bring the best of both worlds—deep contextual understanding and international standards."
  }
];

const TextSectionMobile = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <>
    <style>
  {`
    @media (max-width: 768px) {
      .slick-dots li button:before {
        font-size: 10px !important;
        color: #3B75CA !important; /* Default dot color */
      }

      .slick-dots li.slick-active button:before {
        color: blue !important; /* Active dot color */
      }

      .slick-dots {
        bottom: -0px !important;
      }
    }
  `}
</style>
    <div className="w-full bg-white md:hidden flex flex-col items-center justify-start pt-10 px-4 mb-10">
      {/* Top Heading */}
      <h2 className="text-6xl font-schabo text-[#2050B1] leading-tight uppercase text-center mb-8">
        What Sets Us<br />Apart
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
  );
};

export default TextSectionMobile;