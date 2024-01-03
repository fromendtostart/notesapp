import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../redux/actions/notesactions";

export default function NotesPopup() {
  const popupNote = useSelector((state) => state.allNotes.popup);
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white bg-opacity-75 absolute inset-0"></div>
      <div className="relative z-50 bg-blue-500 text-white p-8 max-w-md rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{popupNote.title}</h2>
        <p className="text-gray-300 mb-4">{popupNote.description}</p>
        <button
          className="bg-white hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded-full border border-blue-500 hover:border-transparent focus:outline-none focus:shadow-outline-blue"
          onClick={() => {
            dispatch(closePopup(popupNote));
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
