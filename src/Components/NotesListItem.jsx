/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux"
import { removeNote } from "../redux/actions/notesactions";

export default function NotesListItem(props){

    const displayLength = 100;
    console.log(props);

    const dispatch = useDispatch();

    const remove = () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the note?");
        if(confirmDelete) dispatch(removeNote(props.note.id));
    }

    const showMore = () => {

    }

    return(
<div className="noteslistitem w-full px-3 py-2 border rounded-md flex justify-between items-center whitespace-normal gap-4 bg-gray-200 hover:bg-gray-300 shadow-md">
    <div className="note-title w-1/6 text-blue-600 font-semibold flex-shrink-0">{props.note.title}</div>
    <div className="note-desc w-4/6 flex-grow flex-shrink-0 whitespace-normal text-gray-700">
        {props.note.description.length < displayLength ? (
            props.note.description
        ) : (
            <div className="truncate">
                {props.note.description.slice(0, displayLength)}
                <button className="px-2 py-1 border rounded-md text-blue-500 hover:text-blue-700" onClick={showMore}>
                    Show more
                </button>
            </div>
        )}
    </div>
    <div className="mod-buttons w-1/6 flex gap-2 flex-shrink-0">
        <button className="edit-button bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md">E</button>
        <button className="remove-button bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" onClick={remove}>
            R
        </button>
    </div>
</div>

    )
}