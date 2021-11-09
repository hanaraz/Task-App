import React from 'react'
import Task from './Task';

const TasksList = ({ tasksList, setTasksList ,filterList  }) => {

 
    return (
        <div>
            {filterList.map((task ,index) => (
                <Task key={index} task={task} setTasksList={setTasksList} tasksList={tasksList}  />
            ))}
        </div>
    )
}

export default TasksList
