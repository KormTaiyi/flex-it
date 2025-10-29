
import CarouselCard from '../components/home/carouselCard/CarouselCard';
import MainBanner from '../components/home/main-banner/Banner';
import HomeAboutUs from '../components/home/about-us/About-us';
import WhyChooseUs from '../components/home/Why-choose-us/Why-choose-us'
import LatestNews from '../components/home/News/LatestNews'
import PricingPlans from '../components/home/PricingPlans/PricingPlans'
import RunningNum from '../components/home/runing-number/RunningNum';
import ServiceOffer from '../components/home/serviceOffer/ServiceOffer';
import TestiMo from '../components/home/testimonial/TestiMo';
import Scroll from '../components/scroll-up/Scroll';
const HomePage = () => {
  return (
    <>
      <div>
        <MainBanner/>
        <ServiceOffer/>
        <HomeAboutUs/>
        <WhyChooseUs/>
        <CarouselCard />
        <RunningNum/>
        <TestiMo/>
        <PricingPlans />
        <LatestNews />
        <Scroll />
      </div>
    </>
  );
};

export default HomePage;
