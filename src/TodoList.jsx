import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoItem } from "./TodoItem"
import { TodoViewStatusBar } from "./TodoViewStatusBar";

export function TodoList() 
{
  //FROG TRM - Need to define these to eliminate eslint rules
  //violations
  // TodoList.propTypes = {
  // }

  const [viewStatus, setViewStatus] = useState("All");
 
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
   
    //localStorage.clear();

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
      <ul className="to-do-list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          let show = false;
        
          console.log(`evaluating todo: ${JSON.stringify(todo, null, 4)}`);

          if(viewStatus === "All") {
            show = true;
          } else if(viewStatus === "Active" && todo.completed === false) {
            show = true;
          } else if(viewStatus === "Completed" && todo.completed === true) {
            show = true;
          }
    
          if(show) {
            return (
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />     
            )
          }
          else {
            console.log(`Not showing todo: ${JSON.stringify(todo, null, 4)}`);
          }
        })}
      </ul>
      <TodoViewStatusBar 
        viewStatus={viewStatus}
        setViewStatus={setViewStatus}
      />    
    </>
  )
}