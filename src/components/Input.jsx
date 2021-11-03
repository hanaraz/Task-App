import { Button, TextField } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react'
import useStyles from './styles';

const Input = () => {

    const classes = useStyles();

    return (
        <div className={classes.input}>
            <TextField name="task" placeholder="New Task" variant="outlined" size="small" />
            <Button className={classes.btn}>
                <AddCircleOutlineIcon fontSize="large" />
            </Button>


        </div>
    )
}

export default Input
