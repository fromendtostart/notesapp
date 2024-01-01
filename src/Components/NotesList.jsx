// import { useSelector } from "react-redux"

import NotesListItem from "./NotesListItem";


export default function NotesList(){
    
    // const notes = useSelector((state) => state);
    
    return(
        <div className="noteslist">
            <NotesListItem />
        </div>
    )
}