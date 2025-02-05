import "./components.css"

function HotelCard({ image, title, rating, description, price }) {
  return (
    <div className="hotel-card">
      <div className="hotel-card-image">
        <img src={image || "https://via.placeholder.com/400x240"} alt={title} />
      </div>
      <div className="hotel-card-content">
        <div className="hotel-card-header">
          <h3>{title}</h3>
          <div className="hotel-card-rating">
            <svg viewBox="0 0 24 24" className="star-icon">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        <p className="hotel-card-description">{description}</p>
        {price && <p className="hotel-card-price">₹{price}/-</p>}
      </div>
    </div>
  )
}

export default HotelCard

