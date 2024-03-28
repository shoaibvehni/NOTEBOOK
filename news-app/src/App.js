import logo from './logo.svg';
import './App.css';
import NoteState from './context/notes/noteState';

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

function App() {
  return (
<>
<NoteState><Router>
<Navbar/>
<Alert message={"you want to delete "}/>
<div className="container">


<Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    
        </Routes>
        </div>

</Router>
</NoteState>
    </>       

  );
}

export default App;
