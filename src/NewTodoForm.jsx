import { useState } from "react";

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
        <button>Add</button>
      </div>
    </form>
  )

}