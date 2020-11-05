import React from "react";
import "./NoteModal.css";

function NoteModal({ note, onClose }) {
  return (
    <div className="backdrop">
      <div className="note-modal">
        <h1>Note:</h1>
        <textarea className="note-modal__textarea">{note}</textarea>
        <button className="note-modal__cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NoteModal;
