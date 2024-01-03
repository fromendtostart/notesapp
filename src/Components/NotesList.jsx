import { useSelector } from "react-redux"

import NotesListItem from "./NotesListItem";


export default function NotesList(){
    
    const notes = useSelector((state) => state.allNotes.notes);
    
    return(
        <div className="noteslist w-xl px-4 flex flex-col gap-2">
            {notes.map((note)=>{
                console.log(note);
                return(
                    <NotesListItem note={note} key={note.id}/>
                )
            })}
        </div>
    )
}