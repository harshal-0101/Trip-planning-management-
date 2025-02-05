import React from 'react'

import PlaceSlider from './PlaceSlider'
import BookingSystem from './BookingSystem'
import GoldPackageSection from './GoldPackageSection'
import HotelCartSlider  from './HotelCartSlider'

export default function Home() {
  return (
    <div>
      
      <main>
      <div className="main-container">
        <div className="intro">
         <h1>Explore The world with <span>Us</span></h1>
        </div>
       <div className="place">
       <PlaceSlider/>
       </div>
       <div className="title-line">
       <h1>Top Place for good  Feeling  </h1>
       </div>
      </div>
      <div className="BSystem-containe">
        <BookingSystem/>
      </div>
      <div className="Offer-Div">
        <GoldPackageSection/>
      </div>
       <div className='Hotel-Cart-Slider'>
       <HotelCartSlider/>
       </div>
      </main>
    </div>
  )
}
