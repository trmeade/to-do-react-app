import { Navbar } from "./Navbar";
import { TodoList } from "./TodoList";
import { ContactForm } from "./ContactForm";
import { AboutForm } from "./AboutForm";

//import { Route, Routes } from "react-router-dom";

export default function App() {

  let component 
  switch(window.location.pathname) {
    case "/":
      component = <TodoList />;
      break;
    case "/ContactForm":
      component = <ContactForm />;
      break;
    case "/AboutForm":
      component = <AboutForm />;
      break;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        {component}
      </div>  
    </>
  )
}