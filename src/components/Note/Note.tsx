import { useNavigate } from "react-router-dom";
import { NoteProps } from "../../interfaces/content";

function Note({ post }: NoteProps) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        border: "solid 2px black",
      }}
    >
      <p>{post.date}</p>
      <p>{post.title}</p>
      <button onClick={() => navigate(`/home/${post.id}`)}>Read More</button>
    </div>
  );
}

export default Note;
