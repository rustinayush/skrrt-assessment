import React from 'react'
import image from "../../assets/body-item/section3.jpg"
import "./Section1.css"


const Section3 = () => {
  return (
    <div className="section1-container">
    <div className="section1-text" style={{ backgroundColor: '#fff9e5' }}>

<p>Book Your Corporate Party with Us</p>
<p className="p-tag">Celebrate Your Success</p>
<p>Chart a course for success and celebration. Plan your corporate event at sea and let the waves of productivity and relaxation collide. A cruise corporate party, where business meets pleasure, redefining success</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section3