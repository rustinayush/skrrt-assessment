import React from 'react'
import image from "../../assets/body-item/section5.png"
import "./Section1.css"


const Section5 = () => {
  return (
    <div className="section1-container" >
    <div className="section1-text">

<p>Book The Baby Shower Party with Us</p>
<p className="p-tag">Celebrate Your Happiness </p>
<p>Ahoy, baby! Celebrate the newest member of your crew with a baby shower on the high seas. Book your cruise baby shower and let the ocean waves bless your little one with love, laughter, and the promise of adventures to come.</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section5