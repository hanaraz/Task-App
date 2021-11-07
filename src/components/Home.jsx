import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import AddTask from './AddTask';
import useStyles from "./styles";
import TasksList from './TasksList';
import FilterStatus from './FilterStatus';



const Home = () => {

    const classes = useStyles();

    const [task, setTask] = useState("");
    const [tasksList, setTasksList] = useState([]);
    const [status, setStatus] = useState("all");
    




    return (
        <Container maxWidth="sm" style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <Typography className={classes.header} variant="h3" style={{ textAlign: "center" }}>My Tasks</Typography>
            <AddTask tasksList={tasksList} setTasksList={setTasksList} task={task} setTask={setTask}  />
            <FilterStatus status={status} setStatus={setStatus} />
            <TasksList tasksList={tasksList} setTasksList={setTasksList} setTask={setTask}  />
        </Container>

    )
}

export default Home
