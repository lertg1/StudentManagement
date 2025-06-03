const API_URL = "http://localhost:8080/students";

export async function fetchStudents() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addStudent(student) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
}

export async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}