import { ActionTypes } from "../constants/actiontypes"

export const setNotes = (notes) => {
    return {
        type: ActionTypes.SET_NOTES,
        payload: notes,
    };
};

export const selectedNotes = (notes) => {
    return {
        type: ActionTypes.SELECTED_NOTES,
        payload: notes,
    };
};
