import PropTypes from "prop-types";

export function TodoItem({ completed, id, todoName, toggleTodo, deleteTodo}) {
  return (
    <>
      <div>     
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span>
        {todoName}
        </span>
        <button onClick={() => deleteTodo(id, true)} className="delete-btn">
        Delete
        </button>
      </div>
    </>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.string,
  todoName: PropTypes.string,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}