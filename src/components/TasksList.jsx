import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Task from './Task';
import useStyles from './styles';

const TasksList = ({ tasksList, setTasksList  }) => {

    const classes = useStyles();




    return (
        <div>
            {tasksList.map((task ,index) => (
                <Task key={index} task={task} setTasksList={setTasksList} tasksList={tasksList}  />
            ))}
        </div>
    )
}

export default TasksList
