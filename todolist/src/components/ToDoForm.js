import React, { useState } from "react";

const TodoForm = ({ add }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      add(value);
      setValue("");
    };
  
    return (
        <>
      <p>To do list...</p>
      <form onSubmit={handleSubmit}>
        <input type="text"
               className="input"
               placeholder="Write here..."
               value={value}
               onChange={e => setValue(e.target.value)}
        />
      </form>
      </>
    );
  }
  
export {
    TodoForm
}