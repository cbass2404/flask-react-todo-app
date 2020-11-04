import React, { useEffect, useState } from "react";
import axios from "axios";

import TodoModal from "./components/todo-modal";
import TodoItem from "./components/todo-item";

import Icons from "./components/icons";

function App() {
  Icons();

  const [todoItems, addItems] = useState([]);
  const [isLoading, loadingStatus] = useState(true);
  const [modalOpen, toggleModal] = useState(false);

  const handleNewTodo = (todo) => {
    toggleModal(false);
    addItems(todo.concat(todoItems));
  };

  const handleNewTodoClick = () => {
    toggleModal(true);
  };

  const handleModalClose = () => {
    toggleModal(false);
  };

  const getTodoItems = () => {
    axios
      .get("http://localhost:5000/api/get-all-todos")
      .then((res) => {
        console.log(res.data);
        addItems(res.data);
        loadingStatus(false);
      })
      .catch((err) => {
        console.log("getTodoItems", err);
      });
  };

  useEffect(() => {
    getTodoItems();
  }, []);

  const todoList = todoItems.map((todoItem) => {
    return <TodoItem key={todoItem.id} todoItem={todoItem} />;
  });
  return (
    <div className="App">
      <TodoModal
        handleNewTodo={handleNewTodo}
        handleModalClose={handleModalClose}
        modalIsOpen={modalOpen}
      />
      <h1>TODO</h1>
      <div className="app-content">
        <div className="add-item-button">
          <button onClick={() => handleNewTodoClick()}>
            <span>+</span>
          </button>
        </div>
        <div className="todo-list-wrapper">
          {isLoading ? "Loading..." : todoList}
        </div>
      </div>
    </div>
  );
}

export default App;
