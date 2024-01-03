/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux"
import { editNote, removeNote, showPopup } from "../redux/actions/notesactions";

export default function NotesListItem(props){

    const displayLength = 100;
    console.log(props);

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(props.note.title);
    const [editedDescription, setEditedDescription] = useState(props.note.description);
    
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (isEditing) dispatch(editNote({id: props.note.id, title : editedTitle, description : editedDescription}));
        setIsEditing(!isEditing);
      };

    const handleRemove = () => {
        const confirmDelete = window.confirm("Are you sure that you want to delete the note?");
        if(confirmDelete) dispatch(removeNote(props.note.id));
    }


    const showMore = () => {
        dispatch(showPopup(props.note));
    }

    return(
    <div className="noteslistitem flex flex-col px-3 py-2 border rounded-md justify-between items-center gap-4 bg-gray-200 hover:bg-gray-300 shadow-md">
        <div className="note-title text-blue-600 font-semibold">
            {isEditing ? (
            <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
            />
            ) :props.note.title}
        </div>
        <div className="note-desc flex-grow text-gray-700">
            {isEditing ?
            (<textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
            />) :
            props.note.description.length < displayLength ? (props.note.description) : (
            <div className="whitespace-normal">
                {props.note.description.slice(0, displayLength)}...
                <button className="px-2 py-1 border rounded-md text-blue-500 hover:text-blue-700" onClick={showMore}>
                    Show more
                </button>
            </div>
            )}
        </div>
        <div className="mod-buttons flex gap-2 justify-around">
            <button className="edit-button bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md" onClick={handleEdit}>{isEditing ? 'Save' : 'E'}</button>
            <button disabled={isEditing} className="remove-button bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" onClick={handleRemove}>
                R
            </button>
        </div>
    </div>

    )
}