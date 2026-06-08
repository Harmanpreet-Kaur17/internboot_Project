import { useEffect, useState } from "react";

function NoteForm({ onNoteAdded, editNote, onUpdate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#fff176");

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setColor(editNote.color);
    }
  }, [editNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    /* UPDATE MODE */
    if (editNote) {
      await fetch("http://localhost:8080/quicknotes-api/api.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editNote.id,
          title,
          content,
          color,
        }),
      });

      onUpdate();
      setTitle("");
      setContent("");
      return;
    }

    /* ADD MODE */
    const res = await fetch("http://localhost:8080/quicknotes-api/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, color }),
    });

    const data = await res.json();

    alert(data.message);

    setTitle("");
    setContent("");

    onNoteAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button type="submit">
        {editNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;