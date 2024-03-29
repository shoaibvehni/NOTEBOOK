  import React, { useContext } from 'react'
  import Notecontext from '../context/notes/notecontext'
  import { useState } from 'react';
  function AddNote() {
    const context = useContext(Notecontext);

    const {addNote} = context;

    const [Note, setNote] = useState({title:"", description :"",tag:""})
    const handleclick = (e)=>{
      e.preventDefault();
      addNote(Note.title,Note.description,Note.tag)
         setNote({title:"", description :"",tag:""});
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
          <input type="text" className="form-control" id="title "  name="title" value={Note.title}  onChange={onchange}   minLength={5} required/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label" >description </label>
          <input type="text" className="form-control" id="description"  name="description" value={Note.description} onChange={onchange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label" >tag </label>
          <input type="text" className="form-control" id="tag"  name="tag" value={Note.tag} onChange={onchange} minLength={5}  required/>
        </div>
       
        <button disabled={Note.title.length<5||Note.description.length<5} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </form>

  </div>
      </div>
    )
  }

  export default AddNote
