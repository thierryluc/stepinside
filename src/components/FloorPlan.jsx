import React, { useEffect } from "react";
import FloorSVG from "../assets/TransparentBackgroundFloorPlans.svg?react";
import "../styles/FloorPlan.css";

function FloorPlan({ selectedRoom, setSelectedRoom }) {
  useEffect(() => {
    const svg = document.querySelector(".floorplan-svg");
    const ids = ["Livingroom", "Bedroom", "Bathroom", "Balcony"];

    ids.forEach((id) => {
      const el = svg.getElementById(id);
      if (el) {
        el.style.cursor = "pointer";
        el.classList.toggle("active", selectedRoom === id);
        el.onclick = () => setSelectedRoom(id);
      }
    });
  }, [selectedRoom, setSelectedRoom]);

  return (
    <div className="floorplan-container">
      <h2>Floor Plan</h2>
      <p>Select an area of the floor plan to view details</p>
      <FloorSVG className="floorplan-svg" />
    </div>
  );
}

export default FloorPlan;
