import React from 'react'
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box, Button } from '@material-ui/core';
import useStyles from './styles';

const Task = ({task}) => {

    const classes = useStyles();

    return (
        <Box>
            <Button>
                <DoneIcon />
            </Button>

            {task}

            <Button className={classes.btnTask}>
                <EditIcon />
            </Button>

            <Button className={classes.btnTask}>
                <DeleteIcon />
            </Button>
        </Box>

    )
} 
 
 
    export default Task;
