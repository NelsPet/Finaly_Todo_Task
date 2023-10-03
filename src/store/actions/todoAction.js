import {
    ADD_TODO, 
    GET_DONE_TODO, 
    GET_RENAME_TODO, 
    DELETE_TODO, 
    DELETE_DONE_TASKS, 
    DELETE_ALL_TASKS
} from "./todoTypes"

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    }
}



export const getDoneTodo = (todoId) => {
    return {
        type: GET_DONE_TODO,
        payload: {
            todoId
        }
    }
}

export const setRenameTodo = (todoId, renameTodoTitle) => {
    return {
        type: GET_RENAME_TODO,
        payload: {
            todoId,
            renameTodoTitle
        }
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: {
            todoId
        }
    }
}

export const deleteDoneTasks = () => {
    return {
        type: DELETE_DONE_TASKS,
        payload: true
    }
}

export const deleteAllTasks = () => {
    return {
        type: DELETE_ALL_TASKS,
        payload: []
    }
}