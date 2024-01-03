import { ActionTypes } from "../constants/actiontypes"

const initialState = {
    notes:[{
        id: 0,
        title: "Important Note",
        description: "Do consider hiring me!",
    }],
    isPopup: false,
    popup:{}
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
            case ActionTypes.SHOW_POPUP:
                return{
                    ...state,
                    isPopup: true,
                    popup:action.payload
                }
                case ActionTypes.CLOSE_POPUP:
                    return{
                        ...state,
                        isPopup: false
                    }
        default: 
            return state;
    }
};