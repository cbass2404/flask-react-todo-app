import React, { useState } from "react";
import axios from "axios";

const TodoForm = (props) => {
  const [title, updateTitle] = useState("");
  const done = false;

  const buildForm = () => {
    const formData = new FormData();

    formData.append("Todo[title]", title);
    formData.append("Todo[done]", done);

    return formData;
  };

  const handleChange = (e) => {
    updateTitle([e.target.value]);
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/create-todo", buildForm())
      .then((res) => {
        props.handleTodoSubmission(res.data.Todo);
      })
      .catch((err) => {
        console.log("TodoForm handleSubmit", err);
      });

    e.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={title}
        placeholder="New Item"
      />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
