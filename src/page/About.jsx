import LatestNews from "../components/home/News/LatestNews";
import HomeAboutUs from "../components/home/about-us/About-us";
import TestiMo from "../components/home/testimonial/TestiMo";
import PropHeader from "../components/home/PropHeader/PropHeader";
import Scroll from "../components/scroll-up/Scroll";

const AboutPage = () => {
  return (
    <>
      <div>
        <PropHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}/>
        <HomeAboutUs/>
        <LatestNews/>
        <div style={{marginBottom: '-49px'}}>
          <TestiMo/>
        </div>
        <Scroll/>
      </div>
    </>
  );
};

export default AboutPage;
