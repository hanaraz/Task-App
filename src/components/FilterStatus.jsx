import React from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import useStyles from './styles';


const FilterStatus = ({ setStatus }) => {

    const classes = useStyles();


    const changeStatus = (e) => {
        setStatus(e.target.value);


    }

    return (

        <div className={classes.filter}>
            <NativeSelect onChange={changeStatus}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </NativeSelect>
        </div>
    )
}

export default FilterStatus
