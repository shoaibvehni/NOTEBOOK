import React from "react";
import Notecontext from "./notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesintial = [];
  const [notes, setnotes] = useState(notesintial);

//getall notes

  // add a note
  const getNotes = async () => {


    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGY1Y2MzN2I1ODk5NGUxNzQ2ZDllIn0sImlhdCI6MTcxMTE0NTI0M30.xyvnvygxQiySZ3bIdtMs9BrNMMF1HbSSpIocl-pX2Vc",
      }

    });
    const json = await response.json();
      console.log(json)
      setnotes(json)
      // setnotes()       
  };
  // add a note
  const addNote = async ( title, description, tag) => {


    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGY1Y2MzN2I1ODk5NGUxNzQ2ZDllIn0sImlhdCI6MTcxMTE0NTI0M30.xyvnvygxQiySZ3bIdtMs9BrNMMF1HbSSpIocl-pX2Vc",
      },
      body: JSON.stringify({title, description ,tag}),
    });
       

    

    console.log("adding new node");
    let note = {
      "_id": "6601d706b75801ed7ca705e8",
      "user": "65fdf5cc37b58994e1746d9e",
      "title":title, 
      "description":description,
      "tag": tag,
      "date": "2024-03-25T19:56:54.445Z",
      "__v": 0,
    };

    setnotes(notes.concat(note));
  };
  //delete
  const deleteNote = async (id) => {
    
//api

const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    "auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGY1Y2MzN2I1ODk5NGUxNzQ2ZDllIn0sImlhdCI6MTcxMTE0NTI0M30.xyvnvygxQiySZ3bIdtMs9BrNMMF1HbSSpIocl-pX2Vc",
  }

});
const json = response.json();
//api
console.log(json)
    
//api
    const newNotes = notes.filter((note) => note._id !== id);
    setnotes(newNotes);


  };
  //update
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmZGY1Y2MzN2I1ODk5NGUxNzQ2ZDllIn0sImlhdCI6MTcxMTE0NTI0M30.xyvnvygxQiySZ3bIdtMs9BrNMMF1HbSSpIocl-pX2Vc",
      },
      body: JSON.stringify({title, description ,tag}),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <Notecontext.Provider value={{ notes, deleteNote, addNote, updateNote , getNotes }}>
      {props.children}
    </Notecontext.Provider>
  );
};

export default NoteState;