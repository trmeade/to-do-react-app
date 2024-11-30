import { useState } from "react";
import PropTypes from "prop-types";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewwItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    if(newItem === "")
      return;

    onSubmit(newItem);

    setNewwItem("");
  }

  return (
    <form onSubmit= { handleSubmit } className="new-item-form">
        <div className="form-row">
        <input
          value={newItem}
          onChange={e => setNewwItem(e.target.value)}
          type="text"
          placeholder="Task..."
        />
        <button className="add-todo-btn">Add</button>
      </div>
    </form>
  )
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func
}