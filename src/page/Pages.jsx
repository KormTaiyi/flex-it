import React from 'react';
import Scroll from '../components/scroll-up/Scroll';
import PricingPlans from '../components/home/PricingPlans/PricingPlans'
import PropHeader from "../components/home/PropHeader/PropHeader";
import TestiMo from '../components/home/testimonial/TestiMo';
import CarouselCard from '../components/home/carouselCard/CarouselCard';
import ContactBanner from '../components/portfolio/contact-banner/Contact-banner';

const Pages = () => {
  return (
    <>
      <PropHeader
      title="Pricing Plans"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Pricing Plans" },
      ]}/>
      <PricingPlans />
      <TestiMo/>
      <CarouselCard />
      <ContactBanner/>
        
      <Scroll />
    </>
  );
};

export default Pages;
