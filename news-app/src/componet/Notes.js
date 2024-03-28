import React, { useContext, useEffect } from "react";
import Notecontext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(Notecontext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
    console.log("two time");

  }, []);

  //   <h1>Add a Note</h1>
  return (
    <div>
      <AddNote />

      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
