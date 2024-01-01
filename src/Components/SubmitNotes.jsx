import { useState } from "react";
import { setNotes } from "../redux/actions/notesactions";
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
        dispatch(setNotes(note));
    }

    return(
        <div className="submitnotes">
            <form onSubmit={handleSubmit}>
                <label htmlFor="note-title">Title</label>
                <input
                type = "text"
                id = "note-title" 
                value = {title}
                onChange={(e) => setTitle(e.target?.value)} />
                <label htmlFor="note-desc">Description</label>
                <input
                type = "text"
                id = "note-desc" 
                value = {description}
                onChange={(e) => setDescription(e.target?.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}