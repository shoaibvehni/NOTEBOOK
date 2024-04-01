import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [credentials, setCredentials] = useState({
   name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  let Navigate =useNavigate();

  const handlesub = async (e) => {
    e.preventDefault();
 const    {name, email, password, } = credentials; 
 
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email, password}) // Use the state object directly
    });
    const json = await response.json();
    console.log(json);

    if (json.success){
              //redirect
              localStorage.setItem('token',json.authtoken)
    Navigate("/");
    alert("ban gya apka account")
  } 
    else{
      alert("kuch to garbar hai")
    }
  };
  
  // Event handler to update state object
  const onchange = (e) => {
    
    setCredentials(
    {
      ...credentials,[e.target.name]: e.target.value
    })
  };

  return (
    <div>
<form onSubmit={handlesub}>
<div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={onchange} />
      </div>
      
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onchange}/>
      
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" onChange={onchange} minLength={5} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">CONFRM Password</label>
        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onchange} minLength={5} required/>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Signup
