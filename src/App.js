import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import  './App.css';
import Home from "./components/Home";
import Mainpage from "./components/Mainpage";
function App() {
  return (
    <>
    {/* <Mainpage/> */}
    <Home/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router> */}
    </>
  );
}

export default App;