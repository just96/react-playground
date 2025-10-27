export default function TaskList({ taskList, deleteTask, editTask, toggleCompleted }) {
  return (
    <ul className="task-list">
      {taskList.map((task) => (
        <li key={task.id} className="task-item">
          <span
            className={task.completed ? "completed" : ""}
            onClick={() => toggleCompleted(task.id)}
            style={{ cursor: "pointer" }}
          >
            {task.text}
          </span>
          <input type="checkbox" checked={task.completed || false} onChange={() => toggleCompleted(task.id)} />
          <button className="edit-btn" onClick={() => editTask(task.id)}>
            Editar
          </button>
          <button className="remove-btn" onClick={() => deleteTask(task.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
