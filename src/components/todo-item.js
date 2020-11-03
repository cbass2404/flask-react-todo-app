import React from "react";

const TodoItem = (props) => {
  const { id, title, done } = props.todoItem;

  return (
    <div className="todo-item-wrapper">
      <button>Done</button>
      <h4>{title}</h4>
    </div>
  );
};

export default TodoItem;
