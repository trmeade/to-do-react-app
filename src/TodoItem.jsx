import { Trash } from 'react-bootstrap-icons';
import PropTypes from "prop-types";

export function TodoItem({ completed, id, todoName, toggleTodo, deleteTodo}) {
 
  return (
    <>
      <div className="todo-item-row">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}>
          
        </input>
        <span className="todo-name">
          {todoName}
        </span>  
        <span className="delete-button" onClick={() => deleteTodo(id, true)}>
          <Trash id="trash-icon" size={15} color={"red"} />
        </span>
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