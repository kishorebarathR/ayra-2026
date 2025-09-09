import Image from "next/image";
import React from "react";

const StudentClubs = () => {
  const items = [
    "Immediate medical attention as per requirements",
    "Annual health check-ups and medical camps",
    "Blood donation drives",
    "Nutrition and diet counselling",
    "Hygiene awareness programs",
    "Telemedicine services for remote consultations",
  ];

  return (
    <>
      {/* Desktop */}
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background Image */}
        <Image
          src="/cfh/key-activities.png"
          alt="Design for Community & Comfort"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute bottom-10 left-4 right-4 md:right-8 md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-lg p-4 md:p-0 rounded-md">
            <ul className="mt-2 md:mt-6 space-y-3 md:text-base font-tthoves-extralight">
              {items.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <Image
                    src="/rocket-icon.svg"
                    className="rotate-45 pt-1"
                    alt="Bullet Point"
                    width={20}
                    height={20}
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Paragraph aligned under list */}
            <p className="mt-4 text-sm md:text-base font-tthoves-light">
              At AYRA, healthcare is not just about treatment but about
              prevention, awareness, and empowerment. The Healthcare & Infirmary
              Centre makes sure every student is supported to live and learn in
              a safe, healthy environment.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="my-10 bg-[url('/cfsw/mobile-students.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#2050B1]">
        <div className="flex flex-col items-start px-4 lg:pb-10 pb-0 text-white">

          <ul className="mt-2 space-y-3 text-sm font-tthoves-extralight">
            {items.map((text, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                <span className="text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-sm leading-relaxed">
            At AYRA, healthcare is not just about treatment but about
            prevention, awareness, and empowerment. The Healthcare & Infirmary
            Centre makes sure every student is supported to live and learn in a
            safe, healthy environment.
          </p>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-300" />
    </>
  );
};

export default StudentClubs;
