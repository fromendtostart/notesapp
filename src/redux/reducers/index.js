import { combineReducers } from "redux";
import { notesReducer } from "./notesreducer";

const reducers = combineReducers({
    allNotes: notesReducer,
});

export default reducers;