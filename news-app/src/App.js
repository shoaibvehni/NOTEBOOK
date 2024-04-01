import logo from './logo.svg';
import './App.css';
import NoteState from './context/notes/noteState';
import Login from './componet/Login';
import Signup from './componet/Signup';

import Home from './componet/Home';
import About from './componet/About';
import Navbar from './componet/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Alert from './componet/Alert';
// import Notes from './componet/Notes';
// import Inote from './componet/Inote';

function App() {
  return (
<>
<NoteState><Router>
<Navbar/>
<Alert message={"WELCOME TO INOTEBOOK"}/>
<div className="item mx-3">


<Routes>

{/* <Route path="/" element={<Inote/>} />  */}
{/* <Notes/> */}
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Login" element={ <Login/>} />
    <Route path="/Signup" element={<Signup/>} />
    
        </Routes>
        </div>

</Router>
</NoteState>
    </>       

  );
}

export default App;
