import React from "react";

const TodoList = ({ todo, index, complete, remove }) => {

    const handleComplete = () => {
            complete(index)
    }
    const handleRemove = () => {
            remove(index)
    }
    
    return (

        <div className="todo" style={{ color: todo.isCompleted ? "#a79c8e" : "", 
                                       textDecoration : todo.isCompleted ? "line-through ": ""
                                     }}>
            {todo.text}
        <div>
            <button onClick={handleComplete}>Complete</button>
            <button onClick={handleRemove}>Remove <i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }

  export {
      TodoList
  }