import React from 'react'
import image from "../../assets/body-item/section4.png"
import "./Section2.css"


const Section4 = () => {
  return (
    <div className="section2-container">
    
    <div className="section2-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    <div className="section2-text">

<p>Book Your Bachelorette Party With Us</p>
<p className="p-tag">Enjoy Cherished Moments</p>
<p>Set sail on the ultimate adventure before the big day. Book your cruise bachelor/bachelorette party and let the fun flow like the ocean's waves. It's time to celebrate and make unforgettable memories as you embark on this pre-wedding journey.
</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    </div>
  )
}

export default Section4