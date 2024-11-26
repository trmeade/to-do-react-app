import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./styles.css";

export default function App() {

  //FROG TRM - Next step is to move these down to TodoList since it will 
  //become a sub-view that will swap on and off with Contact form.
  const [showActive, setShowActive] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showDeleted, setShowDeleted] = useState(true);

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    localStorage.clear();
    
    if(localValue == null) 
      return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(todoName) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), todoName, completed: false, deleted: false },
      ]
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      });
    })
  }

  function deleteTodo(id, deleted) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, deleted}
        }

        return todo;
      });
    });
  }

  return (
    <>
      <div>
        <NewTodoForm onSubmit={addTodo} />
      </div>
      <div>
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
        showActive={showActive}
        showCompleted={showCompleted}
        showDeleted={showDeleted}
        setShowActive={setShowActive}
        setShowCompleted={setShowCompleted}
        setShowDeleted={setShowDeleted}
      />
      </div>
    </>
  )
}