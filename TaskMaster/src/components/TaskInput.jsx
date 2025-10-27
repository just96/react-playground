export default function TaskInput({ input, handleChange, submitTask, deleteAll }) {
  return (
    <div className="input-container" style={{ marginBottom: "20px" }}>
      <p>{input}</p>
      <div style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          className="task-input"
          placeholder="Nova tarefa..."
          onChange={handleChange}
          value={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitTask();
          }}
        />
        <button className="add-btn" onClick={submitTask}>
          Adicionar
        </button>
        <button className="remove-btn" onClick={deleteAll}>
          Remover todas
        </button>
      </div>
    </div>
  );
}
