import React from "react";
import { useStore } from "../store";

export default function ToDoList() {
  const todos = useStore((state) => state.todos);
  const toggleToDo = useStore((state) => state.toggleToDo);
  const deleteToDo = useStore((state) => state.deleteToDo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
          <button
            className="btn btn-success"
            disabled={todo.completed}
            onClick={() => toggleToDo(index)}
          >
            Complete
          </button>
          <button className="btn btn-danger" onClick={() => deleteToDo(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
