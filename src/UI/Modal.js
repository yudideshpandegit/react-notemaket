import React, { useRef } from "react";
import "./Modal.css";

function Modal({ onClose, onOpen, onFileName }) {
  var fileName = useRef();

  const sendTitle = () => {
    console.log(fileName.current.value);
    onFileName(fileName.current.value);
    onClose();
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <h2>File Name</h2>
        <input
          type="text"
          onClick={onOpen}
          className="modal__input"
          placeholder="File Name"
          ref={fileName}
        />
        <div className = 'modal__button'>
            <div className = 'modal__button__content'>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
          <button className='modal__submit' onClick = {() => sendTitle()}>
            Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
