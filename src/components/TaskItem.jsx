import React from "react";

function TaskItem({task, number}){
    
    const date = new Date();
    return (
        <tr>
            <td>{number++}</td>
            <td>{task.title}</td>            
            <td>{task.dueDate}</td>
            <td>{task.completed ? "Done": "Pending"}</td>
            <td>
                <i className="fa fa-edit" style={{padding: '5px'}} ></i>
                <i className="fa fa-trash"></i>                
                </td>
        </tr>
    )
}

export default TaskItem;