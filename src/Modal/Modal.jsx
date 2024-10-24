import React, { useState } from "react";
import "./Modal.css";
import certificate from "../assets/Images/certificate.webp";

export default function Modal() {
  //Declaring the State
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={toggleModal} className="certificateBtn">
        Check Certificate
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button */}
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            {/* Display the certificate image */}
            <img className="certificateImg" src={certificate} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
}
