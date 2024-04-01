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
          <h1 className='mx-5'>Add a Note</h1>
  <div className="container my-3 col-12 w-100 ">
  <form className='d-flex flex-column'>
        <div className='col-12 d-flex justify-content-between '>
        <div className="mb-3 col-7">
          <label htmlFor="title" className="form-label" >Title</label>
          <input type="text" className="form-control" id="title "  name="title" value={Note.title}  onChange={onchange}   minLength={5} required/>
          
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="tag" className="form-label" >Tag </label>
          <input type="text" className="form-control" id="tag"  name="tag" value={Note.tag} onChange={onchange} minLength={5}  required/>
        </div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="description" className="form-label" >Description </label>
          <textarea   type="text" className="form-control desc" id="description"  name="description" value={Note.description} onChange={onchange} minLength={5} required />
        </div>
        
        <button disabled={Note.title.length<5||Note.description.length<5} type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
      </form>

  </div>
      </div>
    )
  }

  export default AddNote
