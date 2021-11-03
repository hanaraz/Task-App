import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Input from './Input';
import useStyles from "./styles";
import Tasks  from './Tasks';

const Home = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="sm" style={{ backgroundColor: "white" , minHeight:"100vh" }}>
            <Typography className={classes.header} variant="h3" style={{textAlign:"center"}}>My Tasks</Typography>
            <Input />
            <Tasks />

        </Container>

    )
}

export default Home
