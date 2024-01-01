import { ActionTypes } from "../constants/actiontypes"

let id = 0;

const initialState = {
    notes:[{
        id: 0,
        title: "Important Note",
        description: "Do consider hiring me!",
    }]
}


export const notesReducer = (state = initialState , action) => {
    switch(action.type){
        case ActionTypes.SET_NOTES:
            return {
                ...state, 
                notes : [...state.notes, {id : id++, ...action.payload}]
            };
        default: 
            return state;
    }
};