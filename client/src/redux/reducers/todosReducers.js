import * as actionType from '../actions/type.js'

export const todosReducers=(state=[], action)=>{
    switch (action.type) {
        case actionType.ADDNEW_TODO:
            return [action.payload, ...state];
        default:
            return state;
    }
    
}