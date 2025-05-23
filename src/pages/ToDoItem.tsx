/**
 * Ivan Huang
 * 5/21/25
 * CSCI 39548
 */

import { type ToDo } from "../assets/ToDo";
import { toggleTodo, deleteTodo } from "../assets/ToDoServices";
import "./TodoItem.css";

export const TodoItem = ({ todo, onChange }: { todo: ToDo; onChange: () => void }) => {
  // This would be how 1 ToDo is structured in the webpage
  return (
    <div className="todoItem">
      <div className="todoContent">
        <span className={`todo-text ${todo.completed ? "todoCompleted" : ""}`}>
          {todo.text}
        </span>
        <span className={`todoStatus ${todo.completed ? "statusCompleted" : "statusPending"}`}>
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </div>
      <div className="todoActions">
        <button
        // Button responsible changing the status of ToDo
          onClick={async () => {
            await toggleTodo(todo);
            onChange();
          }}
          className="statusToggleButton"
        >
          Toggle Status
        </button>
        <button
        // Button responsible for deleting the ToDo
          onClick={async () => {
            await deleteTodo(todo.id);
            onChange();
          }}
          className="deleteButton"
        >
          Delete
        </button>
      </div>
    </div>
  );
};