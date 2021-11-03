import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Task from './Task';

const Tasks = () => {
    return (
        <div>
            <List>
                <ListItem style={{left:"5rem"}} >
                    <Task />
                </ListItem>

                <ListItem style={{left:"5rem"}}>
                    <Task />
                </ListItem>

                <ListItem style={{left:"5rem"}}>
                    <Task />
                </ListItem>

            </List>

        </div>
    )
}

export default Tasks
