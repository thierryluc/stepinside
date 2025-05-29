import React from "react";
import living from "../assets/LivingArea.png";
import bedroom from "../assets/Bedroom.png";
import bathroom from "../assets/Bathroom.png";
import balcony from "../assets/Balcony.png";
import "../styles/RoomInfo.css";

const roomData = {
  Livingroom: {
    title: "Living Area",
    description: "Spacious, light-filled, ideal for gatherings and relaxing.",
    image: living,
  },
  Bedroom: {
    title: "Bedroom",
    description: "Warm and restful, with natural light and clean lines.",
    image: bedroom,
  },
  Bathroom: {
    title: "Bathroom",
    description:
      "Modern, minimal, and refreshing — designed for comfort and style.",
    image: bathroom,
  },
  Balcony: {
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
