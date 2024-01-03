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
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 px-4 md:px-12 w-full">
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
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}