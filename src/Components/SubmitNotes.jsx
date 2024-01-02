import { useState } from "react";
import { addNote } from "../redux/actions/notesactions";
import { useDispatch } from "react-redux";

export default function SubmitNotes(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {
            title,
            description,
        }
        dispatch(addNote(note));
    }

    return(
        <div className="submitnotes max-w-lg flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <label htmlFor="note-title">Title</label>
                <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type = "text"
                id = "note-title" 
                value = {title}
                onChange={(e) => setTitle(e.target?.value)} />
                <label htmlFor="note-desc">Description</label>
                <input
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type = "text"
                id = "note-desc" 
                value = {description}
                onChange={(e) => setDescription(e.target?.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}