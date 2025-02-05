"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plane, Bus, Train, Hotel, Utensils, ArrowUpDown } from "lucide-react"
import "./components.css"

const bookingTypes = ["flight", "train", "bus", "hotel", "restaurant"]
const cities = ["Surat", "Mumbai", "Pune", "Delhi", "Bengaluru", "Chennai", "Kolkata"]

export default function BookingSystem() {
  const [bookingType, setBookingType] = useState("flight")
  const [tripType, setTripType] = useState("one-way")
  const [formData, setFormData] = useState({
    to: "Surat",
    from: "Pune",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    guests: 1,
  })

  const handlePrevious = () => {
    const currentIndex = bookingTypes.indexOf(bookingType)
    setBookingType(bookingTypes[(currentIndex - 1 + bookingTypes.length) % bookingTypes.length])
  }

  const handleNext = () => {
    const currentIndex = bookingTypes.indexOf(bookingType)
    setBookingType(bookingTypes[(currentIndex + 1) % bookingTypes.length])
  }

  const getTitle = () => {
    const titles = {
      flight: "Flight Booking",
      train: "Train Booking",
      bus: "Bus Booking",
      hotel: "Hotel Booking",
      restaurant: "Restaurant Booking",
    }
    return titles[bookingType] || "Booking"
  }

  const getIcon = () => {
    const icons = {
      flight: <Plane className="h-6 w-6" />,
      train: <Train className="h-6 w-6" />,
      bus: <Bus className="h-6 w-6" />,
      hotel: <Hotel className="h-6 w-6" />,
      restaurant: <Utensils className="h-6 w-6" />,
    }
    return icons[bookingType] || null
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ bookingType, ...formData, tripType: bookingType === "flight" ? tripType : undefined })
  }

  return (
    <div className="booking-container">
      <div className="booking-overlay">
        <div className="container">
          <div className="navigation">
            <button className="nav-button-booking" onClick={handlePrevious}>
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="nav-icon">{getIcon()}</div>
            <button className="nav-button-booking" onClick={handleNext}>
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <h1 className="booking-title">{getTitle()}</h1>

          <div className="booking-card">
            {bookingType === "flight" && (
              <div className="trip-type">
                {["one-way", "with-return", "multi-city"].map((type) => (
                  <label key={type}>
                    <input
                      type="radio"
                      value={type}
                      checked={tripType === type}
                      onChange={(e) => setTripType(e.target.value)}
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
                  </label>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="booking-form">
                {bookingType !== "restaurant" && (
                  <>
                    <div className="form-group">
                      <label htmlFor="to" className="form-label">
                        To
                      </label>
                      <select
                        id="to"
                        value={formData.to}
                        onChange={(e) => setFormData((prev) => ({ ...prev, to: e.target.value }))}
                        className="form-input"
                      >
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <button
                        type="button"
                        className="swap-button"
                        onClick={() => setFormData((prev) => ({ to: prev.from, from: prev.to }))}
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="form-group">
                      <label htmlFor="from" className="form-label">
                        From
                      </label>
                      <select
                        id="from"
                        value={formData.from}
                        onChange={(e) => setFormData((prev) => ({ ...prev, from: e.target.value }))}
                        className="form-input"
                      >
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}

                {bookingType === "restaurant" && (
                  <div className="form-group">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <select
                      id="city"
                      value={formData.to}
                      onChange={(e) => setFormData((prev) => ({ ...prev, to: e.target.value }))}
                      className="form-input"
                    >
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {bookingType === "hotel" ? (
                  <>
                    <div className="form-group">
                      <label className="form-label">Check-in</label>
                      <input
                        className="form-input"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData((prev) => ({ ...prev, checkIn: e.target.value }))}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Check-out</label>
                      <input
                        className="form-input"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData((prev) => ({ ...prev, checkOut: e.target.value }))}
                      />
                    </div>
                  </>
                ) : (
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <input
                      className="form-input"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData((prev) => ({ ...prev, checkIn: e.target.value }))}
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">
                    {bookingType === "flight" && "Class and Travellers"}
                    {bookingType === "train" && "Class and Seats"}
                    {bookingType === "bus" && "Seat Type"}
                    {bookingType === "hotel" && "Rooms and Guests"}
                    {bookingType === "restaurant" && "Number of People"}
                  </label>
                  {bookingType === "hotel" ? (
                    <div className="flex gap-2">
                      <select
                        className="form-input flex-1"
                        value={formData.rooms}
                        onChange={(e) => setFormData((prev) => ({ ...prev, rooms: Number.parseInt(e.target.value) }))}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} Room{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                      <select
                        className="form-input flex-1"
                        value={formData.guests}
                        onChange={(e) => setFormData((prev) => ({ ...prev, guests: Number.parseInt(e.target.value) }))}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} Guest{num > 1 ? "s" : ""}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <select className="form-input">
                      {bookingType === "flight" && (
                        <>
                          <option value="1">1 Passenger, Economy</option>
                          <option value="2">2 Passengers, Economy</option>
                          <option value="3">3 Passengers, Economy</option>
                        </>
                      )}
                      {bookingType === "train" && (
                        <>
                          <option value="1">1 Seat, Second Class</option>
                          <option value="2">2 Seats, Second Class</option>
                          <option value="3">1 Seat, First Class</option>
                        </>
                      )}
                      {bookingType === "bus" && (
                        <>
                          <option value="1">Regular Seat</option>
                          <option value="2">Window Seat</option>
                          <option value="3">Sleeper</option>
                        </>
                      )}
                      {bookingType === "restaurant" && (
                        <>
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5+ People</option>
                        </>
                      )}
                    </select>
                  )}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button type="submit" className="search-button">
                  Search
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

