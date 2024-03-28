import React, { useContext } from 'react';
import Notecontext from '../context/notes/notecontext'

const Noteitem = (props) => {

  const context = useContext(Notecontext);

  const {deleteNote} =context;
  const { note } = props;

  return (
    <div className='container col-md-3'>
      <div className="card my-3">
        {/* <img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
            <div className="d-flex align-items-center ">
            <h5 className="card-title">{note.title}</h5><i className="fa-regular fa-pen-to-square mx-2"></i>
<i  className="fa-solid fa-trash mx-2" onClick={()=>{
  
  deleteNote(note._id)
  }}></i>
</div>
          
          
          
            <p className="card-text">{note.description}</p>
        
          {/* Date can be added here */}
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;