import React from "react";
import living from "../assets/LivingArea.png";
import bedroom from "../assets/Bedroom.png";
import balcony from "../assets/Balcony.png";
import "../styles/RoomInfo.css";

const roomData = {
  living: {
    title: "Living Area",
    description: "Spacious, light-filled, ideal for gatherings and relaxing.",
    image: living,
  },
  bedroom: {
    title: "Bedroom",
    description: "Warm and restful, with natural light and clean lines.",
    image: bedroom,
  },
  balcony: {
    title: "Balcony",
    description:
      "Private outdoor escape with scenic views and space to unwind.",
    image: balcony,
  },
};

function RoomInfo({ selectedRoom }) {
  const room = roomData[selectedRoom];
  if (!room) return null;

  return (
    <div className="room-info">
      <h2 className="room-heading desktop-only">{room.title}</h2>
      <p>{room.description}</p>
      <img src={room.image} alt={room.title} />
    </div>
  );
}

export default RoomInfo;
