/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { removeNote } from "../redux/actions/notesactions";

export default function NotesListItem(props){

    const displayLength = 50;
    console.log(props);

    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeNote(props.note.id));
    }

    return(
        <div className="noteslistitem max-w-lg px-3 py-2 border rounded-md flex justify-center items-center gap-4">
            <div className="note-title">{props.note.title}</div>
            <div className="note-desc">
                {props.note.description.length<displayLength?props.note.description:props.note.description.slice(0, displayLength)}
            </div>
            <button className="edit-button">Edit</button>
            <button className="remove-botton" onClick={remove}>Remove</button>
        </div>
    )
}