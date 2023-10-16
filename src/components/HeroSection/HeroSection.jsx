import React from 'react';
import Carousel from 'react-responsive-carousel/lib/js/components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../../assets/Hero-Images/Hero-img1.png';
import Image2 from '../../assets/Hero-Images/Hero-img2.png';
import Image3 from '../../assets/Hero-Images/Hero-img3.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      swipeable={true}
      className="Carousel"

    >
      <div>
        <div className="carousel-content">
          <img src={Image2} alt="Image 1" />
          <div className="carousel-text">
            <h2>Start you life from here!</h2>
            <p>Say 'I do' with the deep blue as your witness. Book your cruise marriage party today and embark on a journey of love and adventure, surrounded by the beauty of the sea.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-content">
          <img src={Image1} alt="Image 2" />
          <div className="carousel-text">
            <h2>Have a great Kitty Party!</h2>
            <p>Kitty parties occasionally offer a forum for the attendees to address their concerns and work together to find answers, in addition to providing gossip, delectable cuisine, and entertainment..</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="carousel-content">
          <img src={Image3} alt="Image 3" />
          <div className="carousel-text">
            <h2>No corporate limits!</h2>
            <p>Set sail for an unforgettable adventure! Book your official cruise party now and let the waves of excitement carry you away. Create memories that will last a lifetime.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSection;