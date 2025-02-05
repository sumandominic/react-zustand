import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="my-4">Zustand TODO List</h1>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
      </div>
    </>
  );
}

export default App;
