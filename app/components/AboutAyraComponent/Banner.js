import React from 'react';

const Banner = () => {
    return (
        <div className="relative md:bg-[url('/admissions/about/about_banner.png')] bg-[url('/admissions/about/about_banner.png')] h-[90vh] bg-cover bg-center text-white">
            <div className="flex flex-col md:flex-row w-full h-full">

                {/* Left Section (hidden on mobile) */}
                <div className="w-[70%]" />

                {/* Right Section (Text Content) */}
                <div className="w-full md:w-[50%] flex items-end md:items-end pb-8 md:pb-16 px-4 md:px-12">
                    <div className="space-y-4 md:space-y-6  p-4 md:p-0">
                        <p className="text-sm md:text-[1vw] leading-relaxed font-light">
                            AYRA was founded with a bold vision: to be an open canvas where curiosity meets possibility.
                            At AYRA, we don't just prepare — we empower them to shape it.
                        </p>
                        <p className="text-sm md:text-[1vw] leading-relaxed font-light">
                            We believe that education must be as dynamic as the world our students will enter.
                            That's why we've designed a university experience that blends academic rigour with
                            creative exploration, personal growth with global relevance, and tradition with bold,
                            future-facing thinking.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
