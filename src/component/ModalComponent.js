import React, { useState } from "react";
import Modal from "../common/Modal";

const ModalComponent = () => {
  const [status, setStatus] = useState(false);
  const showModal = () => {
    setStatus((status) => true);
  };
  const closeModal = () => {
    setStatus((status) => false);
  };
  return (
    <>
      <h2>Modal Component</h2>
      <button
        className="btn btn-primary button-center"
        type="button"
        onClick={showModal}
      >
        Show Modal
      </button>
      {status && <Modal closeModal={closeModal} />}
    </>
  );
};

export default ModalComponent;
