
export function TodoItem({ completed, deleted, id, todoName, toggleTodo, deleteTodo}) {

  function deleteStatus() {
    const retStr = deleted ? "to-do-list-item-deleted" : "";
    return retStr;
  }
  
  return (
    <>
      <div>     
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span className={deleteStatus()}>
        {todoName}
        </span>
        <button onClick={() => deleteTodo(id, true)} className="delete-btn">
        Delete
        </button>
      </div>
    </>
  )
}