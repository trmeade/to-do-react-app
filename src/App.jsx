import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
// import { ContactForm } from "./ContactForm";
//import { AboutPage } from "./AboutPage";
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