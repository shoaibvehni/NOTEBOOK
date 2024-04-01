import React, { useContext } from 'react';
import Notecontext from '../context/notes/notecontext'

const Noteitem = (props) => {

  const context = useContext(Notecontext);

  const {deleteNote} =context;
  const { note ,updatNote } = props;

  return (
    <div className='container col-md-3 w-100'>
      
      <div className="card w-50">
        {/* <img src="..." className="card-img-top" alt="..."> */}
        
        <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
            <h5 className="card-title w-75 text-center">{(note.title).toUpperCase()}  </h5> <div><i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{
  
  updatNote(note)
  }}></i>
<i  className="fa-solid fa-trash mx-2" onClick={()=>{
  
  deleteNote(note._id)
  }}></i></div>
</div>
          
          
          
            <p className="card-text w-75">{note.description}</p>
        
          {/* Date can be added here */}
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
