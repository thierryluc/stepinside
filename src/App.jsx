import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import FloorPlan from "./components/FloorPlan";
import RoomInfo from "./components/RoomInfo";
import MobileTabs from "./components/MobileTabs";
import CTA from "./components/CTA";
import useIsMobile from "./hooks/useIsMobile";
import "./App.css";

function App() {
  const [selectedRoom, setSelectedRoom] = useState("living");
  const isMobile = useIsMobile(); // 👈 use hook

  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <div className="container">
        {!isMobile && (
          <div className="floorplan-roominfo">
            <FloorPlan
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
            />
            <RoomInfo selectedRoom={selectedRoom} />
          </div>
        )}
        {isMobile && (
          <MobileTabs
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        )}
      </div>
      <CTA />
    </div>
  );
}

export default App;
