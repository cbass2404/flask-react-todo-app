import React, { useState } from "react";
import axios from "axios";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/create-todo", {
        title: `${title}`,
        done: false,
      })
      .then((res) => {})
      .catch((err) => {
        console.log("TodoForm handleSubmit", err);
      });

    e.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTitle([e.target.value])}
        value={title}
        placeholder="New Item"
      />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
