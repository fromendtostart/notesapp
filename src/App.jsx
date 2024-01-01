import './App.css'
import NotesList from './Components/NotesList'
import SubmitNotes from './Components/SubmitNotes'

function App() {

  return (
    <div className="app">
      Hey!
      <SubmitNotes />
      <NotesList />
    </div>
  )
}

export default App
