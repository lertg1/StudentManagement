import { useState } from "react";
import StudentEditModal from "./StudentEditModal";

export default function StudentList({ students, onDelete, onEdit }) {
  const [editing, setEditing] = useState(null);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(stu => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
                  <td>{stu.email}</td>
                  <td>{stu.course}</td>
                  
              <td>
                <button onClick={() => setEditing(stu)}>Edit</button>
                <button className="delete" onClick={() => onDelete(stu.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editing && (
        <StudentEditModal
          student={editing}
          onSave={stu => { onEdit(stu); setEditing(null); }}
          onClose={() => setEditing(null)}
        />
      )}
    </>
  );
}