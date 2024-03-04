import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultPage from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/HeroSection";
import AboutUs from "./Pages/Home/AboutUs";
import JoinUs from "./Pages/Home/JoinUs";
import Events from "./Pages/Home/Events";
import Footer from "./Pages/Home/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<DefaultPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/join" element={<JoinUs />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
