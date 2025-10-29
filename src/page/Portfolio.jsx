import React from 'react';
import ImageBanner from '../components/portfolio/image-banner/Image-banner';
import ProjectGoal from '../components/portfolio/project-goal/project-goal';
import SideCard from '../components/portfolio/side-card/Side-card';
import Scroll from "../components/scroll-up/Scroll";
import ContactBanner from '../components/portfolio/contact-banner/Contact-banner';
import PropHeader from "../components/home/PropHeader/PropHeader";


const Portfolio = () => {
  return (
    <>
    <div>
        <PropHeader
        title="Portfolio"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Portfolio" },
        ]}/>
      <ImageBanner/>
      <div className='row px-10' style={{marginBottom: '130px',}}>
        <div className='col-lg-9 col-md-12'>
          <ProjectGoal/>
        </div>
        <div className='col-lg-3 col-md-12'>
          <SideCard/>
        </div>
      </div>
      <ContactBanner/>
      <Scroll/>
    </div>
    </>
  );
};

export default Portfolio;
