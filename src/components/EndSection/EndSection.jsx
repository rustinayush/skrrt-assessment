import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./EndSection.css"
import image1 from '../../assets/end-item/end1.jpeg';
import image2 from '../../assets/end-item/end2.jpeg';
import image3 from '../../assets/end-item/end3.jpeg';



const data = [
    {
        id: 1,
        username: 'item2',
        topic:'Baby Shower',
        title:'A little Cutie On The Way',
        description:'RSail into parenthood with a baby shower on the high seas! Create cherished memories with friends and family in a serene and soothing environment, perfect for celebrating the arrival of your little one.',
        rd:'READ MORE',
        image: image1,
      },
  
  {
    id: 2,
    username: 'item2',
    topic:'Bachelorette Party',
        title:'Drunk In Love And Vegas',
        description:'Bid farewell to singlehood in style on a bachelorette cruise you and your friends will never forget! Dance, dine, and revel in the excitement of your upcoming nuptials with the backdrop of the open ocean.',
        rd:'READ MORE',
    image: image2,
  },
  {
    id: 3,
    username: 'item3',
    topic:'Bridal Shower',
        title:'Join Us For Bridal Shower Honoring',
        description:'Embark on a journey of love and joy as we host your bridal shower on the open sea. Our luxurious cruise ship offers the perfect setting for a day filled with laughter, friendship, and the promise of a beautiful future.',
        rd:'READ MORE',
    image: image3,
  },
  
];

const EndSection = () => {
  return (
    <div ClassName='main-container'> 
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
    //   slidesPerView={3}
      navigation
    
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-container-button" 
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
            <div className='text-part'>
            <div><p style={{textDecoration:"underline",fontSize:"10px", fontWeight:"bold"}}>{item.topic}</p></div>
            <div><h3>{item.title}</h3></div>
            <div><p>{item.description}</p></div>
            <div><p style={{textDecoration:"underline", fontSize:"14px", fontWeight:"bold",textDecorationColor:"red"}}>{item.rd}</p></div>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default EndSection;
