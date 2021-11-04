import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Task from './Task';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const TasksList = () => {

    const classes = useStyles();
    const tasks = useSelector(state => state.task);
    console.log("tasks");
    console.log(tasks);


    return (
        <div>
            <List>

                {tasks.map(task => (
                    <ListItem className={classes.item} >
                        <Task key={task} task={task} />
                    </ListItem>

                ))}










            </List>

        </div>
    )
}

export default TasksList
