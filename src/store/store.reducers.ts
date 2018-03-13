export interface ToDo {
    id: number;
    task: string;
}

export interface TodoAction {
    type: string;
    data: ToDo;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export function toDo(state: Array<ToDo> = [], action: TodoAction) {
    switch (action.type) {
        // If you leave this case in, to do gets added from here and then effect adds to do 
        // case (ADD_TODO): {
        //     console.log('In add reducer');
        //     return [
        //         ...state,
        //         action.data
        //     ];
        // }
        // This is is the correct way since the reducer action type needs to be different from the effect one
        case ('NEW_TODO'): {
            return [
                ...state,
                action.data
            ];
        }
        case (REMOVE_TODO): {
            console.log('Delete reducer');
            return state.filter(todo => todo.id !== action.data.id);
        }
        case (UPDATE_TODO):
            return state.map(todo => todo.id === action.data.id ? action.data : todo);
        default:
            return state;
    }
}
