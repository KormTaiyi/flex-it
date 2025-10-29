
import CarouselCard from '../components/home/carouselCard/CarouselCard';
import MainBanner from '../components/home/main-banner/Banner';
import WhyChooseUs from '../components/home/Why-choose-us/Why-choose-us'
import LatestNews from '../components/home/News/LatestNews'
import PricingPlans from '../components/home/PricingPlans/PricingPlans'
import RunningNum from '../components/home/Runing-Number/RunningNum';
import ServiceOffer from '../components/ome/ServiceOffer/ServiceOffer';
import TestiMo from '../components/home/Testimonial/TestiMo';
import Scroll from '../components/scroll-up/Scroll';
import HomeAboutUs from '../components/home/about-us/about-us';
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
