import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const TodoItem = (props) => {
  const { id, title, done } = props.todoItem;
  const [isDone, setDone] = useState(done);

  return (
    <div className="todo-item-wrapper">
      <input type="checkbox" />
      <h4>{title}</h4>
      <FontAwesomeIcon className="trash-icon" icon="trash" />
    </div>
  );
};

export default TodoItem;
