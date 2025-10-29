import './CarouselStyle.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from "../../../assets/home/1-white.png"
import img2 from "../../../assets/home/2-white.png"
import img3 from "../../../assets/home/3-white.png"
import img4 from "../../../assets/home/4-white.png"
import img5 from "../../../assets/home/5-white.png"
import img6 from "../../../assets/home/6-white.png"
import img7 from "../../../assets/home/7-white.png"

const images = [img1, img2, img3, img4, img5, img6, img7];

const CarouselCard = () => {
  return (
    <div className="Card">
      <h1>Trusted By Over 500 Clients Around The World</h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 37,
          },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide ${index + 1}`} className='imgSwiper'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCard;
