import { useState } from "react";
import PropTypes from "prop-types";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if(newItem === "")
      return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form id="new-todo-form" onSubmit= { handleSubmit }>
        <span>
          <div id="new-to-do-header">Create New Todo:</div>
          <input id="new-todo-input"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text"
            placeholder="New todo..."
          />
          <button className="new-todo-btn">Add</button>
      </span>
    </form>
  )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func
}