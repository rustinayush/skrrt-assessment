import React from 'react'
import image from "../../assets/body-item/section1.webp"
import "./Section1.css"


const Section1 = () => {
  return (
    <div className="section1-container">
    <div className="section1-text">

<p>Wedding Party</p>
<p className="p-tag">Book Your Wedding Party With Us</p>
<p>Set your love adrift on the waves of romance. Book your cruise wedding and let the ocean's embrace be the witness to your eternal commitment.</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section1