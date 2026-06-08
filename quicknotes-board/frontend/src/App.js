import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:8080/quicknotes-api/api.php");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  /* DELETE */
  const deleteNote = async (id) => {
    await fetch("http://localhost:8080/quicknotes-api/api.php", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchNotes();
  };

  /* UPDATE */
  const updateNote = async (note) => {
    await fetch("http://localhost:8080/quicknotes-api/api.php", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });

    fetchNotes();
    setEditNote(null);
  };

  return (
    <div className="app">
      <h1>QuickNotes Board</h1>

      <NoteForm
        onNoteAdded={fetchNotes}
        editNote={editNote}
        onUpdate={updateNote}
      />

      <div className="notes-container">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            color={note.color}
            onDelete={deleteNote}
            onEdit={() => setEditNote(note)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;