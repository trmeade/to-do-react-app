import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { ContactForm } from "./ContactForm";
import { AboutForm } from "./AboutForm";
import { Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/AboutForm" element={<AboutForm />} />

        </Routes>
        {/* {component} */}
      </div>  
    </>
  )
}