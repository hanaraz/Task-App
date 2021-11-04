import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core'
import useStyles from "./styles"


const VisibilityFilters = () => {

    const classes = useStyles();

    return (
        <div>
            <ButtonGroup className={classes.filterButtons}>
                <Button name="all">All</Button>
                <Button name="completed">Completed</Button>
                <Button name="uncompleted">Uncompleted</Button>
            </ButtonGroup>

        </div>
    )
}

export default VisibilityFilters
