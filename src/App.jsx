import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
// import { ContactForm } from "./ContactForm";
import "./styles.css";

export default function App() {
 
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <TodoList/>
      </div>
    </>
  )
}