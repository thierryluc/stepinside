import React, { useEffect } from "react";
import FloorSVG from "../assets/FinalPathWaysFullSVG.svg?react";
import "../styles/FloorPlan.css";

function FloorPlan({ selectedRoom, setSelectedRoom }) {
  useEffect(() => {
    const svg = document.querySelector(".floorplan-svg");
    const livingPath = svg.querySelector(
      "[d='M340 376H337.865L246.5 448L204.5 396V376H204V60H340V376Z']"
    );
    const bedroomRect = svg.querySelector("[d='M464 196H351V60H464V196Z']");
    const balconyPath = svg.querySelector(
      "[d='M333.5 384H464L458.5 429.5L454.5 445.5L451.5 464.5L446 480L435.5 492L423.5 500L407.5 504.5H299.5L253 451.5L333.5 384Z']"
    );

    if (livingPath) {
      livingPath.style.cursor = "pointer";
      livingPath.classList.toggle("active", selectedRoom === "living");
      livingPath.onclick = () => setSelectedRoom("living");
    }

    if (bedroomRect) {
      bedroomRect.style.cursor = "pointer";
      bedroomRect.classList.toggle("active", selectedRoom === "bedroom");
      bedroomRect.onclick = () => setSelectedRoom("bedroom");
    }

    if (balconyPath) {
      balconyPath.style.cursor = "pointer";
      balconyPath.classList.toggle("active", selectedRoom === "balcony");
      balconyPath.onclick = () => setSelectedRoom("balcony");
    }
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
