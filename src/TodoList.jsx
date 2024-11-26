import { TodoItem } from "./TodoItem"
import { TodoViewStatusBar } from "./TodoViewStatusBar";
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  //FROG TRM - Need to define these to eliminate eslint rules
  //violations
  // TodoList.propTypes = {
    
  // }
  
  return (
    <>
    <ul className="to-do-list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />     
        )
      })}
    </ul>
    <TodoViewStatusBar/>    
    </>
  )
}