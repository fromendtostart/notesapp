import { useSelector } from "react-redux"

import NotesListItem from "./NotesListItem";


export default function NotesList(){
    
    const notes = useSelector((state) => state.allNotes.notes);
    console.log(notes);
    
    return(
        <div className="noteslist">
            {notes.map((note)=>{
                console.log(note);
                return(
                    <NotesListItem note={note} key={note.id}/>
                )
            })}
        </div>
    )
}