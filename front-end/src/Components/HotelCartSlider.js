import React, { useRef } from 'react';
import HotelCard from './HotelCart';
import "./components.css"

const HOTELS = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bn1tLPLEqLODLX57Hbw3MdMDxEOcBo.png",
    title: "Lorem Ipsum",
    rating: 4.8,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: "5999"
  }
];

function HotelCartSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
     <div className='hotel-slide-container-section'>
          <div className="hotel-slider">
            <div className="hotel-slider-container">
              <h1>Find Best Hotels</h1>
              <div className="slider-wrapper">
                <div ref={scrollRef} className="slider">
                  {HOTELS.map((hotel, index) => (
                    <div key={index} className="slider-item">
                      <HotelCard {...hotel} />
                    </div>
                  ))}
                </div>
                <button className="nav-button left" onClick={() => scroll('left')}>
                  <svg viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="nav-button right" onClick={() => scroll('right')}>
                  <svg viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
     </div>
  );
}

export default HotelCartSlider;
