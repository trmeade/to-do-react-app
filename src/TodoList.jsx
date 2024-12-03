import { NewTodoForm } from "./NewTodoForm";
import { TodoItem } from "./TodoItem"
import { TodoViewStatusBar } from "./TodoViewStatusBar";
import PropTypes from "prop-types";

export function TodoList({ todos, setTodos, viewStatus, setViewStatus }) 
{
  function addTodo(todoName) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), todoName, completed: false },
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

  function deleteTodo(id) {
    
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => {
        return todo.id !== id;
      })
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <ul className="to-do-list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          //let show = true;

          if(viewStatus === "All" || 
            (viewStatus === "Active" && todo.completed !== true) || 
            (viewStatus === "Completed" && todo.completed !== false)
          ) {
            return (
              <TodoItem
                {...todo}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />     
            )
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

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  viewStatus: PropTypes.string,
  setViewStatus: PropTypes.func
}