import React from "react";
import Navbar from "./components/NavBar";
import './App.css';
import { Outlet } from "react-router-dom";

function App(){
  return (
    <>
    <header>
      < Navbar/>
      
      <div>
        <h1 className="main-heading">Task Manager</h1>
      </div>      
    </header>
      <Outlet/>

    </>
  )
}

export default App;