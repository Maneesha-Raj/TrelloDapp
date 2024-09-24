// Modal.js
import React from 'react';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <button onClick={closeModal} className="text-right text-red-600">Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
