import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./timo.scss";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestiMo = ({ data }) => {
  return (
    <div className="swipies">
      <div className="swip-black px-10">
        <div className="textPo py-4">
          <h6 className="text-primary font-weight">TESTIMONAILS</h6>
          <h1>Customers Testimonails</h1>
        </div>
        <Swiper
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="myySwiper"
        >
          {data.map(({ name, img, text }) => (
            <SwiperSlide key={name} className="myswip">
              <img src={img} alt="" className="widthPx-60 mx-auto al-center" />
              <h5 className="text-center mx-auto">{text}</h5>
              <h3 className="text-center">{name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestiMo;
