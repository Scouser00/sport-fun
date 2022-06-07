import React from "react";
import {BrowserRouter as Router, Route, Routes ,Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/fa";
import Game from "./pages/Game";
import News from "./pages/News";
import Quiz from "./pages/Quiz";
import Weather from "./pages/Weather";
import Start from "./Start";

function App() {
  return (
    <>
      <Router>
      <Link className="Back" to='/'><FaArrowLeft/> <h3>Home</h3></Link>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='quiz' element={<Quiz/>}/>
          <Route path='game' element={<Game/>}/>
          <Route path='news' element={<News/>}/>
          <Route path='weather' element={<Weather/>}/>
        </Routes>
      </Router> 
    </>
    
  );
}

export default App;
