import { useSelector } from "react-redux"

export default function NotesListItem(){
    
    const notes = useSelector((state)=> state.allNotes.notes);
    const note = notes[0];
    console.log(notes);
    console.log("Hi");

    return(
        <div className="noteslistitem">
            {note?.description}
        </div>
    )
}