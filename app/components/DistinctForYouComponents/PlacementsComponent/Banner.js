'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../utils/Breadcrumbs'

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
        };

        // Initial check
        handleResize();

        // Listen for screen resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? '/admissions/placements/placements_mob_banner.png'
        : '/admissions/placements/placements_banner.png';

    return (
        <>
            <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#002560]">
                <Image
                    src={imageSrc}
                    alt="Placements Program Banner"
                    fill
                    className="px-6"
                    priority
                />
            </div>
            <div className='container mx-auto md:px-0 px-4'>
                <Breadcrumbs items={[
                    { label: 'Home', href: '/' },
                    { label: 'Placements and Internships', href: '/distinct-for-you/placements-internship' },
                ]} />
            </div>
        </>
    );
};

export default Banner;
