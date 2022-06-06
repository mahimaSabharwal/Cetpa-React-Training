import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="modal-custom">
        <div className="modal-content-custom">
          <div>Modal Title Here</div>
          <p>Modal Description Here</p>
          <br></br>
          <button
            className="btn btn-info"
            type="button"
            onClick={props.closeModal}
          >
            Close Modal
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
