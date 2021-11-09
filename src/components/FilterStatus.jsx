import React from 'react';
import { useStyles } from './styles';
import { Select } from '@material-ui/core';


const FilterStatus = ({ setStatus }) => {

    const classes = useStyles();

    const changeStatus = (e) => {
        setStatus(e.target.value);
    }

    return (

        <Select  className={classes.select} native variant="outlined" onChange={changeStatus}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
        </Select>
    )
}

export default FilterStatus
