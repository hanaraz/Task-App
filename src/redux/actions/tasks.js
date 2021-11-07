import { ADD_TASK, REMOVE_TASK } from "./actionTypes"

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload
    };
};

export const removeTask = (payload) => {
    return {
        type: REMOVE_TASK,
        payload
    };
};