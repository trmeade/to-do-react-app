import { useState } from "react";
import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { ContactForm } from "./ContactForm";
import { AboutForm } from "./AboutForm";
import { Route, Routes } from "react-router-dom";

export default function App() {

  const [viewStatus, setViewStatus] = useState("All");
  const [todos, setTodos] = useState([]);
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoList  
                                    todos={todos}
                                    setTodos={setTodos}
                                    viewStatus={viewStatus}
                                    setViewStatus={setViewStatus}/>
                                  } />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/AboutForm" element={<AboutForm />} />
        </Routes>
      </div>  
    </>
  )
}