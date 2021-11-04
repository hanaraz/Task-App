import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import AddTask from './AddTask';
import useStyles from "./styles";
import TasksList  from './TasksList';
import VisibilityFilters from './VisibilityFilters';

const Home = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm" style={{ backgroundColor: "white" , minHeight:"100vh" }}>
            <Typography className={classes.header} variant="h3" style={{textAlign:"center"}}>My Tasks</Typography>
            <AddTask />
            <TasksList />
            <VisibilityFilters />

        </Container>

    )
}

export default Home
