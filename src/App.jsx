import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    
    if(localValue == null) 
      return [];
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(todoName) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), todoName, completed: false },
      ]
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />

    </>
  )
}