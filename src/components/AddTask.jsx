import { Button, TextField  } from '@material-ui/core'
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { addTask } from '../redux/actions/tasks';

const AddTask = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [task , setTask] = useState("");

    const handleChange = (e) => {
        const newTask = e.target.value;
        setTask(newTask);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(task);
        dispatch(addTask(task));
    }

    return (
        <div className={classes.input}>
            <TextField name="task" vlue={task} onChange={handleChange} placeholder="New Task" variant="outlined" size="small" />
            <Button onClick={handleClick}>
                <AddIcon fontSize="large" />
            </Button>
         
 

        </div>
    )
}

export default AddTask
