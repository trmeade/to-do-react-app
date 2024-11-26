import { useState } from "react";
import { TodoItem } from "./TodoItem"
import { TodoViewStatusBar } from "./TodoViewStatusBar";

export function TodoList({ todos, 
                           toggleTodo, 
                           deleteTodo, 
                           showActive, 
                           showCompleted, 
                           showDeleted, 
                           setShowActive,
                           setShowCompleted,
                           setShowDeleted
                          }) 
{
 
  
  //FROG TRM - Need to define these to eliminate eslint rules
  //violations
  // TodoList.propTypes = {
  // }

  return (
    <>
    <ul className="to-do-list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        let show = true;
      
        console.log("Render to-do-list: ")
        console.log(`   showCompleted = ${showCompleted}`);
        console.log(`   showDeleted = ${showDeleted}`);
        console.log(`   showActive = ${showActive}`);

        console.log(`evaluating todo: ${JSON.stringify(todo, null, 4)}`);

        if(!todo.completed && !showActive) {
          show = false;
        } else if(todo.completed && !showCompleted) {
          show = false;
        } else if(todo.deleted && !showDeleted) {
          show = false;
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
      showActive={showActive}
      showCompleted={showCompleted}
      showDeleted={showDeleted}
      setShowActive={setShowActive}
      setShowCompleted={setShowCompleted}
      setShowDeleted={setShowDeleted}
    />    
    </>
  )
}