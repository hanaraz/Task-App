import { ADD_TASK } from "../actions/actionTypes";

const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...tasks, action.payload];

        default:
            return tasks;
    }
}

export default taskReducer;