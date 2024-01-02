import { ActionTypes } from "../constants/actiontypes"

const initialState = {
    notes:[{
        id: 0,
        title: "Important Note",
        description: "Do consider hiring me!",
    }]
}


export const notesReducer = (state = initialState , action) => {
    switch(action.type){
        case ActionTypes.ADD_NOTE:
            return {
                ...state, 
                notes : [...state.notes, {id : state.notes.length, ...action.payload}]
            };
        case ActionTypes.REMOVE_NOTE:
            return{
                ...state,
                notes : state.notes.filter((note)=>{
                    if(note.id!=action.payload) return note;
                })
            }
        case ActionTypes.EDIT_NOTE:
            return{
                ...state,
                notes : state.notes.map((note)=>{
                    if(note.id!=action.payload.id) return note;
                    else return action.payload;
                })
            }
        default: 
            return state;
    }
};