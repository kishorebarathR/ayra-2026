import Image from "next/image";
import React from "react";
import Breadcrumbs from '../../utils/Breadcrumbs'

const ContactBanner = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Image
          src="/contact-us/contact-hero-banner.png"
          alt="Contact Banner"
          layout="responsive"
          width={700}
          height={300}
        />

      </div>
      <div className="block lg:hidden">
        <Image
          src="/contact-us/contact-hero-mobile-banner.png"
          alt="Contact Banner"
          layout="responsive"
          width={700}
          height={300}
        />
      </div>

      <div className='container mx-auto md:px-0 px-4'>
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us', href: '/contact-us' }
        ]} />
      </div>

    </>
  );
};

export default ContactBanner;
