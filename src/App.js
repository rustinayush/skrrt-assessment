import './App.css';
import Navbar from './components/NavBar/NavBar';
import TopBar from './components/NavBar/TopBar';
import  HeroSection from './components/HeroSection/HeroSection';
import Carousel from './components/Swiper/Swiper';
import Section1 from './components/Sections/Section1';
import Section2 from './components/Sections/Section2';
import Section3 from './components/Sections/Section3';
import Section4 from './components/Sections/Section4';
import Section5 from './components/Sections/Section5';
import Section6 from './components/Sections/Section6';
import EndSection from './components/EndSection/EndSection';
import Footer from './components/Footer/Footer';
import { IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

function App() {
  return (
    <div className='home-page'>
      <TopBar />
      <Navbar/>
      < HeroSection/>
      <div className="intro-text">
        
        <p className="text2">Glimpse Of Our Parties</p>
        
      </div>
      <Carousel />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <div style={{ backgroundColor: '#fff9e5' }}>
      <Section5/>
      </div>
      <Section6/>
      <div className="intro-text2">
        <h1>The Grand Cruise Ship Party</h1>
        
      <EndSection/>
      </div>
      <div className="sticky-message-icon">
        <IconButton style={{ color: 'white' }}>
          <ChatIcon />
        </IconButton>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
