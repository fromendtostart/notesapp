import Header from './Components/Header'
import NotesList from './Components/NotesList'
import NotesPopup from './Components/NotesPopup';
import SubmitNotes from './Components/SubmitNotes'
import { useSelector } from 'react-redux';

function App() {

  const isPopup = useSelector((state) => state.allNotes.isPopup);

  return (
    <div className="app flex flex-col justify-center items-center w-full">
      <Header />
      <div className="notes w-full">
        {isPopup?
        <NotesPopup />
        :
        <div className="flex flex-col items-center justify-center fullview w-full">
          <SubmitNotes />
          <NotesList />
        </div>}
      </div>
    </div>
  )
}

export default App
