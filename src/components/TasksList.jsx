import React from 'react'
import Task from './Task';
// import useStyles from './styles';

const TasksList = ({ tasksList, setTasksList ,filterList  }) => {

    // const classes = useStyles();




    return (
        <div>
            {filterList.map((task ,index) => (
                <Task key={index} task={task} setTasksList={setTasksList} tasksList={tasksList}  />
            ))}
        </div>
    )
}

export default TasksList
