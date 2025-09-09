import Image from "next/image"
import React from "react"

const StudentClubs = () => {
  const items = [
    "Institutional Clubs include Research, Entrepreneurship, Career Advancement, Media, Sports, Sustainability, IKS, and more.",
    "School Clubs are tailored to each discipline—Techno Club (Engineering), Unicorn Club (Business), Chefs Club (Hospitality), Expressions Club (Liberal Arts), Athlete’s Edge (Sports), and more.",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background Image */}
        <Image
          src="/cfsw/student-clubs.png"
          alt="Design for Community & Comfort"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute bottom-40 left-4 right-4 md:right-4 md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md">
            <ul className="mt-2 md:mt-6 space-y-3 md:text-base font-tthoves-extralight">
              {items.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <Image src="/rocket-icon.svg" className="rotate-45 pt-1" alt="Bullet Point" width={20} height={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10 bg-[url('/cfsw/mobile-students.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#2050B1]">
        <div className="flex items-center px-4 lg:pb-10 pb-10">
          <ul className="mt-2 md:mt-6 space-y-3 text-sm font-tthoves-extralight text-white">
            {items.map((text, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                <Image src="/rocket-icon.svg" className="rotate-45 pt-1" alt="Bullet Point" width={20} height={20} /> 
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-300" />
    </>
  )
}

  export default StudentClubs
