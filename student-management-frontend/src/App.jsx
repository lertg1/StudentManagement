import { useEffect, useState } from "react";
import "./styles/common.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {
  fetchStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./api/studentApi";

export default function App() {
  const [students, setStudents] = useState([]);

  async function load() {
    setStudents(await fetchStudents());
  }

  useEffect(() => { load(); }, []);

  async function handleAdd(student) {
    await addStudent(student);
    load();
  }

  async function handleEdit(student) {
    await updateStudent(student.id, student);
    load();
  }

  async function handleDelete(id) {
    await deleteStudent(id);
    load();
  }

  return (
    <div className="container">
      <h1>Student Management</h1>
      <StudentForm onAdd={handleAdd} />
      <StudentList
        students={students}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}