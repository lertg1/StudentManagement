import { useState } from "react";

export default function StudentEditModal({ student, onSave, onClose }) {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ ...student, name, email });
  }

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff", padding: "2rem", borderRadius: "8px", minWidth: "300px"
        }}
      >
        <h2>Edit Student</h2>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          type="email"
        />
        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose} style={{ marginLeft: "1rem" }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}