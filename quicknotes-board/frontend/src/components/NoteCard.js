function NoteCard({ id, title, content, color, onDelete, onEdit }) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "15px",
        borderRadius: "12px",
        width: "220px",
        minHeight: "150px",
        position: "relative",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* DELETE */}
      <button
        onClick={() => {
          if (window.confirm("Delete this note?")) {
            onDelete(id);
          }
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        ×
      </button>

      {/* EDIT */}
      <button
        onClick={onEdit}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        ✏️
      </button>

      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NoteCard;