  import React, { useContext } from 'react'
  import Notecontext from '../context/notes/notecontext'
  import { useState } from 'react';
  function AddNote() {
    const context = useContext(Notecontext);

    const {addNote} = context;

    const [Note, setNote] = useState({title:"", description :"",tag:"default"})
    const handleclick = (e)=>{
      e.preventDefault();
      addNote(Note.title,Note.description,Note.tag)

  }
  const onchange = (e)=>{
  setNote({...Note,[e.target.name]: e.target.value})
    
  }
    return (
      <div>
          <h1>Add a Note</h1>
  <div className="container my-3 col-3">
  <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >title</label>
          <input type="text" className="form-control" id="title "  name="title" onChange={onchange}/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" >description </label>
          <input type="text" className="form-control" id="description"  name="description" onChange={onchange}/>
        </div>
       
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </form>

  </div>
      </div>
    )
  }

  export default AddNote
