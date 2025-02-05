import React, { useState } from "react";
import { useStore } from "../store";

export default function ToDoForm() {
  const [text, setText] = useState("");

  const addToDo = useStore((state) => state.addToDo);

  const handleSubmit = (e) => {
    e.preventDefault();
      if (text.trim() !== "") {
        //add ToDo
      addToDo({ text, completed: false });
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter New ToDo"
        />
        <button type="submit" className="btn btn-primary">
          Add ToDo
        </button>
      </div>
    </form>
  );
}
