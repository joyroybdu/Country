import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
export const HeroSection = () => {
  return (
    <main className="hero-section main">
         <div className="container grid grid-two-cols">
           <div className="hero-content">
             <h1 className="heading-xl">Explore Delicious Food</h1>
             <p className="paragraph">Get the best food in town</p>
             <button className='btn btn-darken btn-inline bg-white-box'>Explore Foods<FaArrowRight />
             </button>
             <div className="hero-image">
               <img src="your-image-url.jpg" alt="Delicious Food" />
             </div>
           </div>
         </div>
       </main>
  )
}
