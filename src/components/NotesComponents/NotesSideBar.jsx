import React, { useState } from "react";
import "../CSS/NotesSideBar.css";
import NotesTitle from "./NotesTitle";

function NotesSideBar() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    // Create a new array with the existing notes and a new note
    const newNotes = [
      ...notes,
      { id: notes.length + 1, title: `Note ${notes.length + 1}` },
    ];
    setNotes(newNotes);
  };

  return (
    <>
      <div className="sideBar-warapper">
        <div className="note-btns">
          <button className="newNote" onClick={addNote}>
            New Note +
          </button>
        </div>

        {notes.map((note) => (
          <NotesTitle key={note.id} title={note.title} />
        ))}
      </div>
    </>
  );
}

export default NotesSideBar;
