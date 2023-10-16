
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import image1 from '../../assets/swiper-item/swiper1.jpeg';
import image2 from '../../assets/swiper-item/swiper2.jpeg';
import image3 from '../../assets/swiper-item/swiper3.png';
import image4 from '../../assets/swiper-item/swiper4.jpg';
import image5 from '../../assets/swiper-item/swiper5.jpg';
import image6 from '../../assets/swiper-item/swiper6.jpg';


const data = [
    {
        id: 1,
        username: 'item2',
        image: image1,
      },
  
  {
    id: 2,
    username: 'item2',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    image: image3,
  },
  {
    id: 4,
    username: 'item4',
    image: image4,
  },
  {
    id: 5,
    username: 'item4',
    image: image5,
  },
  {
    id: 6,
    username: 'item4',
    image: image6,
  },
];

const Carousel = () => {
  return (
    <div ClassName='swiper-container-wrapper'> 
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
    //   slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container" 
      loop={true}
      breakpoints={{
        // Configure breakpoints for different screen sizes
        640: {
          slidesPerView: 1, // Show 1 image per slide on smaller screens (mobile)
        },
        768: {
          slidesPerView: 2, // Show 2 images per slide on medium-sized screens (tablet)
        },
        1024: {
          slidesPerView: 3, // Show 3 images per slide on larger screens (desktop)
        },
      }}
    >
         
      {data.map((item) => (
        <SwiperSlide key={item.id} className="swiper-slide2">
            
          <div>
            
            <img src={item.image} alt={`Image ${item.id}`} />
            <div><h4>{item.test}</h4></div>
            <div>{item.Description}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
