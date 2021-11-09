import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import AddTask from './AddTask';
import TasksList from './TasksList';
import FilterStatus from './FilterStatus';
import {useStyles } from "./styles"



const Home = () => {

    const classes = useStyles();
    const [task, setTask] = useState("");
    const [tasksList, setTasksList] = useState([]);
    const [status, setStatus] = useState("all");
    const [filterList, setFilterList] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", JSON.stringify([]));
        } else {
            let localTasks = JSON.parse(localStorage.getItem("tasks"));
            setTasksList(localTasks);
        }
    }, [])

    useEffect(() => {
        handleFilter();
        localStorage.setItem("tasks", JSON.stringify(tasksList));
    }, [tasksList, status])

    const handleFilter = () => {
        switch (status) {
            case "completed":
                setFilterList(tasksList.filter(t => t.completed === true));
                break;

            case "uncompleted":
                setFilterList(tasksList.filter(t => t.completed === false));
                break;

            default:
                setFilterList(tasksList);
        }
    }

    return (
        <Container className={classes.container} maxWidth="xs" >
            <Typography className={classes.header} variant="h3" >My Tasks</Typography>
            <AddTask tasksList={tasksList} setTasksList={setTasksList} task={task} setTask={setTask} />
            <FilterStatus setStatus={setStatus} />
            <TasksList filterList={filterList} tasksList={tasksList} setTasksList={setTasksList} setTask={setTask} />
        </Container>
    )
}

export default Home;
