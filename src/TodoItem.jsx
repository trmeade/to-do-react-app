export function TodoItem({ completed, id, todoName, toggleTodo, deleteTodo}) {
  return (
    <>
      <div>     
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {todoName}
        <button onClick={() => deleteTodo(id)} className="delete-btn">
          Delete
        </button>
      </div>
    </>
  )
}