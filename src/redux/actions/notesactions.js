import { ActionTypes } from "../constants/actiontypes"

export const addNote = (note) => {
    return {
        type: ActionTypes.ADD_NOTE,
        payload: note,
    };
};

export const removeNote = (id) => {
    return {
        type: ActionTypes.REMOVE_NOTE,
        payload: id,
    };
};
