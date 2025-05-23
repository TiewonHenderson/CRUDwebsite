/**
 * Ivan Huang
 * 5/22/25
 * CSCI 39548
 */

import { useEffect, useState } from "react";
import { getTodos } from "../assets/ToDoServices";
import { TodoItem } from "./ToDoItem";
import { TodoForm } from "./ToDoForm";
import { type ToDo } from "../assets/ToDo";
import "./ToDoList.css"

export const TodoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  // Gets all the todos from the db and saves them to todos state
  const loadTodos = async () => {
    const result = await getTodos();
    setTodos(result);
  };

  // Loads all the current todos to the page
  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="todoContainer">
      <h1 className="todoTitle">ToDo List</h1>
      <TodoForm onAdd={loadTodos} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onChange={loadTodos} />
        ))}
      </div>
    </div>
  );
};