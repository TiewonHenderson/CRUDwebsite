/**
 * Ivan Huang
 * 5/21/25
 * CSCI 39548
 */

import { useState } from "react";
import { addTodo } from "../assets/ToDoServices";
import "./ToDoForm.css"

export const TodoForm = ({ onAdd }: { onAdd: () => void }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    // Prevents browers from reloading when submitting a new todo
    e.preventDefault();
    if(!text.trim()) return;

    await addTodo(text);
    setText("");
    // Refresh list for the new todo to appear
    onAdd();
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="todoInput"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
      />
      <button className="todoButton" type="submit">
        Add
      </button>
    </form>
  );
};