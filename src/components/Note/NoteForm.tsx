import { useEffect, useState } from "react";
import { NoteFormProps, NoteItem } from "../../interfaces/content";

function NoteForm({ initData, addText }: NoteFormProps) {
  const [data, setData] = useState<NoteItem>({
    title: "",
    description: "",
    date: new Date(),
  });

  useEffect(() => {
    if (initData) {
      setData(initData);
    }
  }, [initData]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addText(data);
    setData({ title: "", description: "", date: new Date() });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Title:
      <input
        style={{
          marginBottom: "50px",
        }}
        type="title"
        value={data.title}
        onChange={(e) =>
          setData((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      Description:
      <input
        style={{
          height: "100px",
        }}
        type="text"
        value={data.description}
        onChange={(e) =>
          setData((prev) => ({ ...prev, description: e.target.value }))
        }
      />
      <button>Save</button>
    </form>
  );
}
export default NoteForm;
