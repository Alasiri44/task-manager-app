import React from "react";
import TaskTable from "../components/TaskTable";
import TaskArticleList from "../components/TaskArticleList";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home(){
   

    return (
        <div>
           <nav className="side-nav-bar">
                < NavLink>Important/ Urgent</NavLink>
                <NavLink>Important</NavLink>
                <NavLink>Urgent</NavLink>
                <NavLink>Others</NavLink>
            </nav>       
            <hr />     
            <TaskArticleList/>
        </div>
    )
}

export default Home;