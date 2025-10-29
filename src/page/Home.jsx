import CarouselCard from "../components/home/carouselCard/CarouselCard";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs.jsx";
import PricingPlans from "../components/home/PricingPlans/PricingPlans";
import RunningNum from "../components/home/Running-Number/RunningNum.jsx";
import ServiceOffer from "../components/home/ServiceOffer/ServiceOffer.jsx";
import Scroll from "../components/scroll-up/Scroll.jsx";
import HomeAboutUs from "../components/home/about-us/About-us.jsx";
import TestiMo from "../components/home/testimonial/TestiMo.jsx";
import LatestNews from "../components/home/news/LatestNews.jsx";
import MainBanner from "../components/home/MainBanner/Banner.jsx";
const HomePage = () => {
  return (
    <>
      <div>
        <MainBanner />
        <ServiceOffer />
        <HomeAboutUs />
        <WhyChooseUs />
        <CarouselCard />
        <RunningNum />
        <TestiMo />
        <PricingPlans />
        <LatestNews />
        <Scroll />
      </div>
    </>
  );
};

export default HomePage;
