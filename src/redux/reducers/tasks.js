import { ADD_TASK, REMOVE_TASK } from "../actions/actionTypes";

const taskReducer = (tasks = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            // localStorage.setItem("tasks", JSON.stringify([...tasks, action.payload]));
            return [...tasks, action.payload];

        case REMOVE_TASK:
            return tasks.filter((index) => index !== action.payload);

        default:
            return tasks;
    }
}

export default taskReducer;