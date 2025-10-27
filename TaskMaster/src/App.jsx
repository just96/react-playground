import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function submitTask() {
    if (!input) {
      alert("Inserir task");
      return;
    }
    setTask((prevTask) => [...prevTask, { id: Date.now(), text: input }]);
    setInput("");
  }

  function deleteAll() {
    if (task.length === 0) {
      alert("No tasks at the moment!");
      return;
    }
    setTask([]);
  }

  function deleteTask(idToRemove) {
    const updatedTasks = task.filter((task) => task.id !== idToRemove);
    setTask(updatedTasks);
  }

  function editTask(idToEdit) {
    const taskToEdit = task.find((task) => task.id === idToEdit);
    if (!taskToEdit) return;

    const newText = prompt(`Edit task`, taskToEdit.text);
    if (!newText) return;

    setTask((prev) => prev.map((task) => (task.id === idToEdit ? { ...task, text: newText } : task)));
  }

  function toggleCompleted(id) {
    setTask((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  return (
    <div className="app-container">
      <h1>TaskMaster</h1>
      <TaskInput input={input} handleChange={handleInputChange} submitTask={submitTask} deleteAll={deleteAll} />
      <TaskList taskList={task} deleteTask={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
