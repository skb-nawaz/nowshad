import React, { useState } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlus } from "react-icons/fa";
import "./style.css";

const UserDetails = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    const userData = { name, email, phone, instagram, twitter };
    setUserData(userData);
    setIsDialogOpen(false);
  };

  let contentToRender;

  if (!userData) {
    contentToRender = (
      <div onClick={handleOpenDialog} className="add-icon">
        <FaPlus size={24} className="icon" />
      </div>
    );
  } else {
    contentToRender = (
      <div className="user-details">
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Instagram: {userData.instagram}</p>
        <p>Twitter: {userData.twitter}</p>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      {contentToRender}
      <Modal
        isOpen={isDialogOpen}
        onRequestClose={() => setIsDialogOpen(false)}
        contentLabel="User Details Modal"
        className="modal"
        overlayClassName="modal-overlay">
        {/* Render your dialog box with forms for user details and social information */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <input
          type="text"
          placeholder="Twitter"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </Modal>
    </div>
  );
};

export default UserDetails;
