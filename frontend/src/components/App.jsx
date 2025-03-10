import React from 'react'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{marginTop: "-3.5rem"}}>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Register />} />
            <Route path = "/register" element = {<Register />} />
            <Route path = "/home" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
