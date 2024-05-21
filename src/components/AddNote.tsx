import NoteForm from "./Note/NoteForm";
import { postNote } from "../api/content";
import { NoteItem } from "../interfaces/content";

function AddNote() {

  const addTextHandler = (item: NoteItem) => {
    postNote({ title: item.title, description:item.description, date:item.date });
  };

  return (
    <div className="AddNote">
      <NoteForm addText={addTextHandler} />
    </div>
  );
}

export default AddNote;
