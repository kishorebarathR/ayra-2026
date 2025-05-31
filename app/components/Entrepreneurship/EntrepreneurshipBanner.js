// import React from "react"

// const EntrepreneurshipBanner = () => {
//   return (
//     <>
//       <div className="relative h-[100vh] md:h-[90vh] w-full">
//         <div className="absolute inset-0 bg-cover md:bg-[url('/entrepreneurship/entrepreneurship.png')] bg-[url('/entrepreneurship/Mobile-Banner.png')] ">
//           <div className="absolute top-[84%] px-5 md:px-0 md:top-[70%] md:right-[5%] max-w-sm md:max-w-lg text-white">
//             <p className="  text-xs md:text-base font-tthoves-light ">
//               The Centre for Entrepreneurship at AYRA is where ambition meets
//               action. Whether you’re a student with a big idea or someone
//               curious about creating change, this is your launchpad.
//             </p>
//             <p className=" text-xs md:text-base font-tthoves-light">
//               Here, entrepreneurship is not a subject—it’s a way of thinking,
//               problem-solving, and building the future.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default EntrepreneurshipBanner

import React from "react";

const Banner = () => {
  return (
    <div className="relative md:bg-[url('/entrepreneurship/entrepreneurship.png')] bg-[url('/entrepreneurship/Mobile-Banner.png')] h-screen lg:h-[90vh] bg-cover bg-center text-white">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Section (hidden on mobile) */}
        <div className="hidden md:block w-[70%] flex-1" />

        {/* Right Section (Text Content) */}
        <div className="w-full  flex flex-1 items-end justify-end pb-8 md:pb-16 px-4 md:px-12">
          <div className="space-y-4 md:space-y-6 p-4 md:p-0">
            <p className="text-xs md:text-base font-tthoves-light lg:pl-[20%]">
              The Centre for Entrepreneurship at AYRA is where ambition meets
              action. Whether you’re a student with a big idea or someone
              curious about creating change, this is your launchpad.
            </p>

            <p className="text-xs md:text-base font-tthoves-light lg:pl-[20%]">
              Here, entrepreneurship is not a subject—it’s a way of thinking,
              problem-solving, and building the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
