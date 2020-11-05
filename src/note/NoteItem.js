import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import Card from "../UI/Card";
import NoteModal from "../UI/NoteModal";
import "./NoteItem.css";

function NoteItem({ title, note, id, onComplete }) {
  const [isNoteModal, setIsNoteModal] = useState(false);

  const onClose = () => {
    setIsNoteModal(false);
  }

  return (
    <div className="noteitem">
      {isNoteModal ? (
        <NoteModal note = {note} onClose = {onClose} />
      ) : (
        <Card className="noteitem__card" onClick={() => setIsNoteModal(true)}>
          <p>{title}</p>
          <Checkbox value={id} onChange={(e) => {
              setIsNoteModal(false);
              onComplete(e.target.value)}} />
        </Card>
      )}
    </div>
  );
}

export default React.memo(NoteItem);
