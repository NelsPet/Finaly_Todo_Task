import {
    ADD_TODO, 
    GET_DONE_TODO, 
    GET_RENAME_TODO, 
    DELETE_TODO,
    DELETE_DONE_TASKS,
    DELETE_ALL_TASKS
} from "../actions/todoTypes"

const initialState = {
    todo: [],
    todoStatus: ''
}

export const todoReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type){
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
                todoStatus: 'success'
            }
             
        case GET_DONE_TODO:
            return {
                ...state,
                todo: state.todo.map((elem) => elem.id === action.payload.todoId ? {...elem, isDone: !elem.isDone } : elem),
                todoStatus: 'change todo'
            }
        
        case  GET_RENAME_TODO:
            return {
                ...state,
                todo: state.todo.map((elem) => elem.id === action.payload.todoId ? {...elem, title: action.payload.renameTodoTitle } : elem),
                todoStatus: 'rename todo'
            }

        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((elem) => elem.id !== action.payload.todoId),
                todoStatus: 'delete todo'
            }

        case DELETE_DONE_TASKS:
            return {
                ...state,
                todo: state.todo.filter((elem) => elem.isDone !== action.payload),
                todoStatus: 'get done todo'
            }
        
        case DELETE_ALL_TASKS:
            return {
                ...state, 
                todo: state.todo = action.payload,
                todoStatus: 'delete todo task'
            }
            
        default:
            return state;
    }
}