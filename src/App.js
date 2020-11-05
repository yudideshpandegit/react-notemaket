import "./App.css";
import Card from "./UI/Card";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateNote from "./create-note/CreateNote";
import { useState } from "react";
import Note from "./note/Note";

function App() {

  const [showNote, setShowNote] = useState(false);

  const onNote = () => {
    setShowNote(true);
    console.log(showNote);
  }

  const onClose = () => {
    setShowNote(false);
  }

  return (
    <div className="App">
      <div className="notemaket">
        <Card className = 'notemaker__card' onClick = {onNote} >Add a new note
          <AddCircleOutlineIcon />
        </Card>
      {showNote &&  <CreateNote show = {showNote} onClose = {onClose} />
        } 

        <Note />
      </div>
    </div>
  );
}

export default App;
