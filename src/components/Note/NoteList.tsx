import { NoteListProps } from "../../interfaces/content";
import Note from "./Note";
import { NoteItemGet } from "../../interfaces/content";

function NoteList({ posts }: NoteListProps) {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {posts.map((item: NoteItemGet) => (
        <Note key={item.id} post={item} />
      ))}
    </div>
  );
}

export default NoteList;
