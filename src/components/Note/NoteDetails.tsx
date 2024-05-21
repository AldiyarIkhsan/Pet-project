import { useEffect, useState } from "react";
import { NoteItem, NoteItem2 } from "../../interfaces/content";
import { deleteNote, getNoteById, putNote } from "../../api/content";
import { useLocation, useNavigate } from "react-router-dom";
import NoteForm from "./NoteForm";

function NoteDetails() {
  const [editPost, setEditPost] = useState<boolean>(false);
  const navigate = useNavigate();
  const [post, setPost] = useState<NoteItem2>();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const onGetNote = async () => {
    await getNoteById(id).then((response) => setPost(response));
  };

  useEffect(() => {
    onGetNote();
  }, []);

  const deleteNoteHandler = () => {
    deleteNote(id).then(() => navigate("/home"));
  };

  const editNoteHandler = (item: NoteItem) => {
    putNote(id, item).then(() => {
      setEditPost(false);
      onGetNote();
    });
  };
  console.log(editPost);

  if (editPost && post)
    return (
      <NoteForm
        initData={{ ...post, date: new Date(post?.date) }}
        addText={editNoteHandler}
      />
    );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "solid 2px black",
      }}
    >
      <p>{post?.date}</p>
      <p>{post?.title}</p>
      <p>{post?.description}</p>

      <button onClick={() => setEditPost(true)}>Edit</button>
      <button onClick={() => deleteNoteHandler()}>Delete</button>
    </div>
  );
}

export default NoteDetails;
