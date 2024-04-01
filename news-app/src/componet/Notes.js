import React, { useContext, useEffect, useRef , useState } from "react";
import Notecontext from "../context/notes/notecontext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from 'react-router-dom';
const Notes = () => {
  

  const context = useContext(Notecontext);
  let navigate = useNavigate();
  const { notes, getNotes , updateNote } = context;
  
    useEffect(() => {
      {localStorage.getItem('token')?getNotes():navigate("/Login")}
    
    
//eslint-disable-next-line
 }, []);
 const [Note, setNote] = useState({id:"", etitle:"", edescription :"",etag:""})

 const ref = useRef(null)
 const refClose = useRef(null)
 
 const updatNote = (currentNote)=>{
  ref.current.click();
  setNote({id: currentNote._id, etitle: currentNote.title, edescription:currentNote.description,etag:currentNote.tag})
}



const handleclick = (e)=>{
  e.preventDefault();
 console.log("updaeting") 
 updateNote(Note.id, Note.etitle, Note.edescription, Note.etag);
 refClose.current.click();

}
const onchange = (e)=>{
setNote({...Note,[e.target.name]: e.target.value})

}

//   <h1>Add a Note</h1>
  return (

<div className="d-flex justify-content-center"> 
  
      <div className="sidebar w-50">
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">EDit NOtes</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label" >title</label>
          <input type="text" className="form-control" id="etitle "  name="etitle" value={Note.etitle} onChange={onchange} minLength={5} required/>
          
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label" >description </label>
          <input type="text" className="form-control" id="edescription"  name="edescription" value={Note.edescription} onChange={onchange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label" >tag </label>
          <input type="text" className="form-control" id="etag"  name="etag" value={Note.etag} onChange={onchange} required/>
        </div>
       
      </form>

      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={handleclick} type="button" className="btn btn-primary">Update Notes</button>
      </div>
    </div>
  </div>
</div>

      <div className="row my-3">
        <h1 className='mx-5'>Your Notes</h1>
            {notes.length===0&&'no notes'}
        {notes.map((note) => {
          return  <Noteitem key={note._id} updatNote={updatNote} note={note} />;
        })}
      </div>
      </div>
      <div className="w-50">
 <AddNote /></div>
    </div>
  );
};

export default Notes;
