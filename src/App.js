
import './App.css';


import Home from './Home';
import About from './About';
import Contact from './Contact';

import Navigationbar from './Navigationbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
      <Navigationbar />
    
      
      <Routes>
     
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        
        <Route exact path='/contact' element={<Contact/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
