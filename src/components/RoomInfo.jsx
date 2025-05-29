import React, { useState } from "react";
import Modal from "react-modal";
import living from "../assets/LivingArea.png";
import bedroom from "../assets/Bedroom.png";
import bathroom from "../assets/Bathroom.png";
import balcony from "../assets/Balcony.png";
import "../styles/RoomInfo.css";

Modal.setAppElement("#root");

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!room) return null;

  return (
    <div className="room-info">
      <h2 className="room-heading desktop-only">{room.title}</h2>
      <p>{room.description}</p>
      <img
        src={room.image}
        alt={room.title}
        onClick={() => setModalIsOpen(true)}
        className="room-image"
        style={{ cursor: "zoom-in" }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Room Image Modal"
        className="lightbox"
        overlayClassName="lightbox-overlay"
      >
        <button
          className="lightbox-close"
          onClick={() => setModalIsOpen(false)}
        >
          ×
        </button>
        <img src={room.image} alt={room.title} />
      </Modal>
    </div>
  );
}

export default RoomInfo;
