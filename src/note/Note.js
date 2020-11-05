import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
import "./Note.css";
import NoteItem from "./NoteItem";

function Note() {
  const [noteList, setNoteList] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState({complete:[]});

  var noteListArr = [];

  useEffect(async () => {
    let response, responseData;

    try {
      response = await fetch(
        "https://react-notemaker.firebaseio.com/note.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      responseData = await response.json();
      setNoteList(responseData);
      setIsLoading(false);
    } catch (err) {
      console.log("Could not get the data");
      throw new Error("Could not get the data");
    }

    // console.log(noteList);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 3000);
  }, [setNoteList, setIsLoading]);

  useEffect(() => {
    console.log("Render in the Note component");
  });

  const onComplete = (data) => {
    setIsComplete({
      complete:[
        ...isComplete.complete,
         data
      ]
    });

    console.log(isComplete);

  }

  let noteItem = Object.keys(noteList)?.map((element) => {
    return (
      <NoteItem
        key={element}
        id={element}
        title={noteList[element].title}
        note={noteList[element].note}
        onComplete = {onComplete}
      />
    );
  });

  return (
    <div className="note">
      <Card>
        <h3>List in the note</h3>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="note__noteitem">{noteItem}</div>
        )}
      </Card>
    </div>
  );
}

export default Note;
