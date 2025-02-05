import React, { useState } from 'react';
import placeImage1 from 'D:/final year project/front-end/src/Images/PlaceImage/Group_66.png';
import placeImage2 from 'D:/final year project/front-end/src/Images/PlaceImage/Group_67.png';
import placeImage3 from 'D:/final year project/front-end/src/Images/PlaceImage/Group_69.png';
import placeImage4 from 'D:/final year project/front-end/src/Images/PlaceImage/Group_70.png';

const PlaceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Starting in the center (index 2)

  const trips = [
    { id: 1, title: 'Jaipur, Rajasthan',about:'A spiritual hub and yoga capital, Rishikesh offers serene Ganges views, yoga retreats, and adventure activities.' , image: placeImage1},
    { id: 2, title: 'Varanasi, Uttar Pradesh',about:'	One of the Seven Wonders of the World, the Taj Mahal is a stunning white marble', image: placeImage2},
    { id: 3, title: 'Kerala Backwaters', about:'Known as the "Pink City," Jaipur is famous for its rich history, stunning palaces like the', image: placeImage3 },
    { id: 4, title: 'Rishikesh',about:'One of the oldest living cities in the world, Varanasi is a spiritual hub for Hindus', image: placeImage4 },
    { id: 5, title: 'Leh-Ladakh',about:'Kerala\'s backwaters are a serene network of lagoons, lakes, and canals.', image: placeImage1},
  ];

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? trips.length - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev === trips.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <button className="slider-button left" onClick={handleLeftClick}>
        &lt;
      </button>
      <div className="Place-slider-div">
        {trips.map((trip, index) => {
          let positionClass = '';
          let scale = 1; // Default size

          if (index === currentIndex) {
            positionClass = 'center';
            scale = 1.5; // Centered card is larger
          } else if (index < currentIndex) {
            positionClass = 'left';
            scale = 1; // Left cards are smaller
            trip.about = "";
          } else {
            positionClass = 'right';
            scale = 1; // Right cards are smaller
            trip.about = "";
          }

          let VisitBTN
          if(positionClass == 'center'){
             VisitBTN  = <button className='VisitBtn'>Visit</button>
          }

          return (
            <div
              key={trip.id}
              className={`trip-card ${positionClass}`}
              style={{ transform: `scale(${scale})` }}
            >  
              <img src={trip.image} alt="" />
              <div className="infoOFplace">
                <h3>{trip.title}</h3>
                <p>{trip.about}</p>
                {VisitBTN}
              </div>
             
            </div>
          );
        })}
      </div>
      <button className="slider-button right" onClick={handleRightClick}>
        &gt;
      </button>
    </div>
  );
};

export default PlaceSlider;
