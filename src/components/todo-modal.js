import React from "react";
import ReactModal from "react-modal";

import TodoForm from "./todo-form";

ReactModal.setAppElement("#root");

const TodoModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
    },
    overlay: {
      backgroundColor: "rgba(1, 1, 1, 0.8)",
    },
  };

  const handleTodoSubmission = (todo) => {
    props.handleNewTodo(todo);
  };

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => {
        props.handleModalClose();
      }}
      isOpen={props.modalIsOpen}
    >
      <TodoForm handleTodoSubmission={handleTodoSubmission} />
    </ReactModal>
  );
};

export default TodoModal;
