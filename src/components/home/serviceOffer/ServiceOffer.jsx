import React from 'react';
import { Link } from "react-router-dom";
import './service.scss';
import Button from '../../button/Button';

const ServiceOffer = ({ serviceOffer }) => {
  return (
    <div className='big-bg px-10'>
      <div className="m-auto py-5 ">
        <div className="d-flex mb-4 j-sb" data-aos="fade-up" data-aos-duration="2000">
          <div className='widthPC-60'>
            <h4 className='text-primary'>Service</h4>
            <h1>Services We Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.</p>
          </div>
          <Button >See all services</Button>
        </div>
        <div className="grid-container" data-aos="fade-up" data-aos-duration="1000">
          {serviceOffer.map((data) => (
            <div className="grid-item rounded" key={data.id}>
              <div className="font-lg text-primary">{data.icon}</div>
              <h1 className="font-md font-weight500">{data.title}</h1>
              <p>{data.des}</p>
              <Link to="#" className="font-sizePx20 text-primary"><span>Read More</span></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
