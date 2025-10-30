import CarouselCard from "../components/home/carouselCard/CarouselCard.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs.jsx";
import PricingPlans from "../components/home/PricingPlans/PricingPlans.jsx";
import RunningNum from "../components/home/Running-Number/RunningNum.jsx";
import ServiceOffer from "../components/home/ServiceOffer/ServiceOffer";
import Scroll from "../components/scroll-up/Scroll.jsx";
import HomeAboutUs from "../components/home/about-us/AboutUs.jsx";
import LatestNews from "../components/home/news/LatestNews.jsx";
import MainBanner from "../components/home/MainBanner/Banner.jsx";
import {
  faDesktop,
  faBoxOpen,
  faGears,
  faUserSecret,
  faCode,
  faMagnifyingGlass,
  faChartLine,
  faMobileAlt,
  faDatabase,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const Home = () => {
  const whyChooseUsFields = [
    {
      id: 1,
      num: "01.",
      title: "Latest Technologies",
      description:
        "We stay ahead of the curve by leveraging the latest technologies to deliver innovative solutions that empower your business.",
    },
    {
      id: 2,
      num: "02.",
      title: "Unique Solutions",
      description:
        "We understand that every business is different, which is why we offer tailored solutions designed to meet your unique challenges.",
    },
    {
      id: 3,
      num: "03.",
      title: "Powerful Strategies",
      description:
        "Success starts with a strong strategy. Our team develops powerful, data-driven strategies that deliver measurable results.",
    },
  ];

  const pricingPlans = [
    {
      icon: faDesktop,
      name: "Free Plan",
      price: 0,
      description: [
        "150 Lorem, Ipsum Dolor.",
        "20 Lorem Ipsum Dolor Sit.",
        "Lorem Ipsum Dolor Sit.",
        "Free Lorem Ipsum Dolor.",
        "Added Lorem Ipsum Dolor.",
      ],
      popular: false,
    },
    {
      icon: faGears,
      name: "Standard Plan",
      price: 85,
      description: [
        "150 Lorem, Ipsum Dolor.",
        "20 Lorem Ipsum Dolor Sit.",
        "Lorem Ipsum Dolor Sit.",
        "Free Lorem Ipsum Dolor.",
        "Added Lorem Ipsum Dolor.",
      ],
      popular: false,
    },
    {
      icon: faBoxOpen,
      name: "Pro Plan",
      price: 150,
      description: [
        "150 Lorem, Ipsum Dolor.",
        "20 Lorem Ipsum Dolor Sit.",
        "Lorem Ipsum Dolor Sit.",
        "Free Lorem Ipsum Dolor.",
        "Added Lorem Ipsum Dolor.",
      ],
      popular: true,
    },
    {
      icon: faUserSecret,
      name: "Ultimate Plan",
      price: 210,
      description: [
        "150 Lorem, Ipsum Dolor.",
        "20 Lorem Ipsum Dolor Sit.",
        "Lorem Ipsum Dolor Sit.",
        "Free Lorem Ipsum Dolor.",
        "Added Lorem Ipsum Dolor.",
      ],
      popular: false,
    },
  ];

  const testimonialData = [
    {
      img: img1,
      text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Songheng",
    },
    {
      img: img2,
      text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Norak",
    },
    {
      img: img3,
      text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
      name: "Narith",
    },
  ];

  const latestNewsArticles = [
    {
      date: "05 Oct 2022",
      category: "Hosting",
      author: "Allan Moorea",
      title: "How Litespeed Technology Works To Speed Up Your Site",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "#",
      imageUrl: image1,
    },
    {
      date: "15 Sep 2022",
      category: "Web Dev",
      author: "Mhmd Amin",
      title: "Give Your Website A New Look And Feel With Themes",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "#",
      imageUrl: image2,
    },
    {
      date: "27 Aug 2022",
      category: "SEO",
      author: "Yusuf Amin",
      title: "The Role Of Domain Names In SEO World Explained",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      link: "#",
      imageUrl: image3,
    },
  ];

  const serviceOffer = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      id: 1,
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} />,
      id: 2,
      title: "Digital Marketing",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faTable} />,
      id: 3,
      title: "SaaS Product",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      id: 4,
      title: "Apps Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      id: 5,
      title: "SEO Services",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} />,
      id: 6,
      title: "Data Analysis",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
  ];

  return (
    <>
      <MainBanner />
      <ServiceOffer serviceOffer={serviceOffer} />
      <HomeAboutUs />
      <WhyChooseUs fields={whyChooseUsFields} />
      <CarouselCard />
      <RunningNum />
      <TestiMo data={testimonialData} />
      <PricingPlans plans={pricingPlans} />
      <LatestNews articles={latestNewsArticles} />
      <Scroll />
    </>
  );
};

export default Home;
