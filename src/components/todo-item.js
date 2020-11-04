import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useState } from "react";
import axios from "axios";

const TodoItem = (props) => {
  const { id, title, done } = props.todoItem;
  const [isDone, setDone] = useState(done);

  const handleChange = () => {
    axios
      .patch(`http://localhost:5000/api/edit-todo/${id}`, { done: !isDone })
      .then((res) => {
        setDone(!isDone);
        console.log(res);
      })
      .catch((err) => {
        console.log("handleChange TodoItem", err);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/delete-todo/${id}`)
      .then((res) => {
        console.log("handleDelete TodoItem response", res);
        props.getTodoItems();
      })
      .catch((err) => {
        console.log("handleDelete TodoItem Error", err);
      });
  };

  return (
    <div className="todo-item-wrapper">
      <input onChange={handleChange} type="checkbox" checked={isDone} />
      <h4>{title}</h4>
      <FontAwesomeIcon
        onClick={handleDelete}
        className="trash-icon"
        icon="trash"
      />
    </div>
  );
};

export default TodoItem;
