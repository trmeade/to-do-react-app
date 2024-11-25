export function TodoItem({ completed, id, todoName, toggleTodo, deleteTodo}) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {todoName}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </>
  )
}