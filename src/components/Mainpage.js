import React, { useState } from "react";
import image from "../images/rideon.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mainpage() {
  // State for form inputs
  const [selectedCity, setSelectedCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const cities = ["Rajahmundry", "Vijayawada", "Visakhapatnam", "Hyderabad"];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6 child1">
            <div className="logo">
              <img src={image} alt="RideOn Logo" />
            </div>

            {/* Integrated Booking Form Inside child1 */}
            <div className="col-md-12 form p-4">
                <div className="formin">
              <h1 className="text-center">
                EASY BIKE <span style={{ color: "orange" }}>BOOKING</span>
              </h1>
              <h5>Two Wheeler For Rent in India</h5>

              {/* City Dropdown */}
              <div className="mb-3">
                <select
                  className="form-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Choose City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Pickers */}
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              {/* Booking Details Display */}
              {selectedCity && fromDate && toDate && (
                <div className="alert alert-info mt-3">
                  <strong>Booking Details:</strong> {selectedCity} from {fromDate} to {toDate}
                </div>
              )}
              <button>srearch</button>
            </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 child2"></div>
        </div>
      </div>
    </>
  );
}
