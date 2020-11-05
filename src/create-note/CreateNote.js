import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import CreateIcon from "@material-ui/icons/Create";

import "./CreateNote.css";
import Modal from "../UI/Modal";

function CreateNote({ show, onClose }) {
  useEffect(() => {
    console.log("Show Note >>>", show);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState("");
  const [finalNote, setFinalNote] = useState(false);

  const [showSubmitSuccess, setshowSubmitSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Was here");
    setShowModal(true);
  };

  const onModalClose = () => {
    setShowModal(false);
  };

  const onFileName = async (name) => {
    console.log(name);

    let fileObj = {
      title: name,
      note: note,
    };

    try {
      let response = await fetch(
        "https://react-notemaker.firebaseio.com/note.json",
        {
          method: "POST",
          body: JSON.stringify(fileObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let responseData = response.json();

      responseData.then((responseAfterData) => {
        console.log("Success!");
        setshowSubmitSuccess(true);
        setFinalNote(true);

        setTimeout(() => {
          console.log("In settimeout")
          setFinalNote(false);
          onClose();
        }, 5000);
      });
    } catch (err) {
      console.log(err);
      throw new Error("Could not post data");
    }
  };

  return (
    <div className="create-note">
      {showModal && (
        <Modal
          onClose={() => onModalClose()}
          onOpen={() => setShowModal(true)}
          onFileName={onFileName}
        />
      )}

      {!finalNote && (
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="create-note__content">
            <Card>
              <h3 className="create-note__title">
                Note <CreateIcon />
              </h3>
              <textarea
                className="create-note__textarea"
                onChange={(e) => setNote(e.target.value)}
                rows={5}
              ></textarea>
              <button className="modal__submit" type="submit">
                Submit
              </button>
              <button className="modal__cancel" onClick={onClose}>
                Cancel
              </button>
            </Card>
          </div>
        </form>
      )}

      {finalNote && (
        <div className="create-note__success">
          <p>
            <strong>Success! </strong>a new note was created
          </p>
        </div>
      )}
    </div>
  );
}

export default CreateNote;
