import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
      onAdd({ name, email, course });
      console.log("Student added:", { name, email, course });
    setName("");
      setEmail("");
    setCourse("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        type="email"
          />
          <input
        placeholder="Course"
        value={course}
        onChange={e => setCourse(e.target.value)}
        required
        type="text"
      />
      <button type="submit">Add Student</button>
    </form>
  );
}