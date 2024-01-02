import NotesList from './Components/NotesList'
import SubmitNotes from './Components/SubmitNotes'

function App() {

  return (
    <div className="app flex flex-col justify-center items-center">
      <SubmitNotes />
      <NotesList />
    </div>
  )
}

export default App
