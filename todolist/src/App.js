import React, { useState } from "react";
import { TodoList } from "../src/components/ToDoList";
import { TodoForm } from "../src/components/ToDoForm";
import "./App.css";


function App() {
  const [todoList, setTodoList] = useState([]);

  const add = text => {
    const newTodo = [...todoList, { text }];
    setTodoList(newTodo);
  };

  const complete = index => {
    const newTodo = [...todoList];
    newTodo[index].isCompleted = true;
    setTodoList(newTodo);
  };

  const remove = index => {
    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  };

  return (
    <div className="app">
      <TodoForm add={add} />
      <div className="todo-list">
        {todoList.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            complete={complete}
            remove={remove}
          />
        ))}
      </div>
    </div>
  );
}

export default App;