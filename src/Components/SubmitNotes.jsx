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
        <div className="submitnotes w-full m-6 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 px-4 md:px-12 lg:px-64 w-full">
                <input
                    placeholder="Title"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type = "text"
                    id = "note-title" 
                    value = {title}
                    onChange={(e) => setTitle(e.target?.value)} 
                />
                <textarea
                    placeholder="Description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    id="note-desc"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}