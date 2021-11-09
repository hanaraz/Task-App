import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import {useStyles } from './styles';


const Task = ({ task, setTasksList, tasksList }) => {

    const classes = useStyles();

    const deleteItem = () => {
        setTasksList(tasksList.filter(t => t.id !== task.id)
        )
    }

    const handleComplete = () => {
        const newList = tasksList.map(t => {
            if (t.id === task.id) {
                t.completed = !t.completed;
            }
            return t;
        })
        setTasksList(newList);
    }

    return (
        <div className={classes.task}>
          
            <Button onClick={handleComplete}  >
                <DoneIcon />
            </Button>
            <span style={{textDecoration: task.completed && "line-through"}}>{task.input}</span>

            <Button className={classes.deleteBtn} onClick={deleteItem} >
                <DeleteIcon />
            </Button>

        </div>
    )
}


export default Task;
