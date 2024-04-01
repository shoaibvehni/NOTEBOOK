import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
  // State variable to hold email and password
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  let Navigate =useNavigate();

  const handlesub = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password}) // Use the state object directly
    });
    const json = await response.json();
    console.log(json);

    if (json.success){
              //redirect
              localStorage.setItem('token',json.authtoken)
              Navigate("/");

    
            } 
    else{
      alert("not working")
    }
  };

  // Event handler to update state object
  const handleChange = (e) => {
    
    setCredentials(
    {
      ...credentials,[e.target.name]: e.target.value
    })
  };

  return (
    <div className="container col-3">
      <h1>Login</h1>
      <form onSubmit={handlesub}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email} // Bind value to email property of state object
            onChange={handleChange} // Update state on change
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password} // Bind value to password property of state object
            onChange={handleChange} // Update state on change
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
