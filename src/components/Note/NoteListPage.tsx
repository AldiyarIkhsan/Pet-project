import NoteList from "./NoteList";
import { useState } from "react";
import { getNote } from "../../api/content";
import { useEffect } from "react";
import { NoteItemGet } from "../../interfaces/content";

function NoteListPage() {
  const [posts, setPosts] = useState<NoteItemGet[]>([]);

  const onGetNoteList = async () => {
    const result = await getNote();
    if (result) {
      const Posts: NoteItemGet[] = Object.entries(result).map((e) => {
        return{
          id:e[0],
          title:e[1].title,
          description:e[1].description,
          date:e[1].date,
        };
      });
      setPosts(Posts)
    }else{
      setPosts([])
    }
  };

  useEffect(() => {
    onGetNoteList();
  }, []);


  return (
    <div className="App">
      <p>My Bolg</p>
      <NoteList
        posts={posts}
      />
    </div>
  );
}

export default NoteListPage;
