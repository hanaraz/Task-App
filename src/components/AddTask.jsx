import { Button, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';


const AddTask = ({ task, setTask, tasksList, setTasksList }) => {

    const [idCreator, setIdCreator] = useState(0);

    const addItem = (e) => {
        e.preventDefault();

        setTasksList([...tasksList, {id:idCreator , input:task , completed:false}])
        setIdCreator(idCreator + 1);
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    return (

        <div>
                <TextField value={task} onChange={handleChange} type="text" name="input" placeholder="New Task" variant="outlined" size="small"   />
                <Button onClick={addItem}  >
                    <AddIcon fontSize="large" />
                </Button>

        </div>
    )
}

export default AddTask
