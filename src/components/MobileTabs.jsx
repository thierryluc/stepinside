import React, { useEffect } from "react";
import FloorSVG from "../assets/TransparentBackgroundFloorPlans.svg?react";
import RoomInfo from "./RoomInfo";
import "../styles/MobileTabs.css";

function MobileTabs({ selectedRoom, setSelectedRoom }) {
  useEffect(() => {
    const svg = document.querySelector(".floorplan-svg");
    if (!svg) return;

    const ids = ["Livingroom", "Bedroom", "Bathroom", "Balcony"];

    ids.forEach((id) => {
      const el = svg.getElementById(id);
      if (el) {
        el.classList.toggle("active", selectedRoom === id);
      }
    });
  }, [selectedRoom]);

  return (
    <div className="mobile-tabs">
      <div className="mobile-floorplan">
        <FloorSVG className="floorplan-svg" />
      </div>

      <div className="tab-buttons">
        <button
          className={selectedRoom === "Livingroom" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("Livingroom")}
        >
          Living Room
        </button>
        <button
          className={selectedRoom === "Bedroom" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("Bedroom")}
        >
          Bedroom
        </button>
        <button
          className={selectedRoom === "Bathroom" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("Bathroom")}
        >
          Bathroom
        </button>
        <button
          className={selectedRoom === "Balcony" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("Balcony")}
        >
          Balcony
        </button>
      </div>

      <RoomInfo selectedRoom={selectedRoom} />
    </div>
  );
}

export default MobileTabs;
