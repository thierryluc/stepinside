import React, { useEffect } from "react";
import FloorSVG from "../assets/FinalPathWaysFullSVG.svg?react";
import RoomInfo from "./RoomInfo";
import "../styles/MobileTabs.css";

function MobileTabs({ selectedRoom, setSelectedRoom }) {
  useEffect(() => {
    const svg = document.querySelector(".floorplan-svg");
    if (!svg) return;

    const allPaths = svg.querySelectorAll("path, rect");
    allPaths.forEach((path) => path.classList.remove("active"));

    const paths = {
      living: "M340 376H337.865L246.5 448L204.5 396V376H204V60H340V376Z",
      bedroom: "M464 196H351V60H464V196Z",
      balcony:
        "M333.5 384H464L458.5 429.5L454.5 445.5L451.5 464.5L446 480L435.5 492L423.5 500L407.5 504.5H299.5L253 451.5L333.5 384Z",
    };

    const targetPath = svg.querySelector(`[d='${paths[selectedRoom]}']`);
    if (targetPath) {
      targetPath.classList.add("active");
    }
  }, [selectedRoom]);

  return (
    <div className="mobile-tabs">
      <div className="mobile-floorplan">
        <FloorSVG className="floorplan-svg" />
      </div>

      <div className="tab-buttons">
        <button
          className={selectedRoom === "living" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("living")}
        >
          Living Room
        </button>
        <button
          className={selectedRoom === "bedroom" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("bedroom")}
        >
          Bedroom
        </button>
        <button
          className={selectedRoom === "balcony" ? "active-tab" : ""}
          onClick={() => setSelectedRoom("balcony")}
        >
          Balcony
        </button>
      </div>

      <RoomInfo selectedRoom={selectedRoom} />
    </div>
  );
}

export default MobileTabs;
