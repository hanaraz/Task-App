import { ADD_TASK } from "./actionTypes"

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload
    };
};