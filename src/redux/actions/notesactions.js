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

export const editNote = (note) => {
    return {
        type: ActionTypes.EDIT_NOTE,
        payload: note,
    };
};

export const showPopup = (note) => {
    return {
        type: ActionTypes.SHOW_POPUP,
        payload: note,
    };
};

export const closePopup = (note) => {
    return {
        type: ActionTypes.CLOSE_POPUP,
        payload: note,
    };
};
