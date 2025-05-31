import React from "react";

const Banner = () => {
    return (
        <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
            <div className="absolute inset-0 bg-cover bg-[url('/admissions/scholarship/scholarship_banner_mob.png')] md:bg-[url('/admissions/scholarship/scholarship_banner.png')]">
                
                {/* Rotated text */}
                <p className="absolute text-white text-sm md:text-base max-w-xs md:max-w-md rotate-[8deg] md:rotate-[-12deg] md:bottom-28 bottom-44 md:top-[73%] left-6 md:left-[20%] font-tthoves-light">
                    Supporting Your Journey. Investing in Your Potential.
                </p>

                {/* Paragraph text at bottom on mobile, fixed on desktop */}
                <div className="absolute bottom-10 md:top-[85%] left-4 md:left-[11%] right-4 md:right-auto">
                    <div className="w-full md:w-[50%] text-start opacity-90">
                        <p className="text-sm md:text-[1vw] font-light text-white leading-relaxed">
                            In our endeavour to encourage and support meritorious and deserving students achieve their aspirations,
                            we offer many merit-based scholarships and need-based financial support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
