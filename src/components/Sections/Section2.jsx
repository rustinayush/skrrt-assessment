import React from 'react'
import image from "../../assets/body-item/section2.jpg"
import "./Section2.css"


const Section2 = () => {
  return (
    <div className="section2-container">
    
    <div className="section2-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    <div className="section2-text">

<p>Proposal Booking</p>
<p className="p-tag">Witness your love with the wave of Ocean</p>
<p>Take the plunge with the one you love. Book a cruise proposal and let the sea witness the moment your love story reaches its peak. A proposal at sea, a memory forever.</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    </div>
  )
}

export default Section2