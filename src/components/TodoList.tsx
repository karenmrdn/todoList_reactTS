import React from "react";
import { Todo } from "../todo.model";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onTodoStatusChange: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  if (props.todos.length === 0) {
    return <div className={styles.noTasksMessage}>No tasks added yet</div>;
  }

  return (
    <ul>
      {props.todos.map((todo) => {
        let textClasses;
        if (todo.checked) {
          textClasses = styles.checkedText;
        }

        return (
          <li key={todo.id}>
            <div className={styles.checkboxTextContainer}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => props.onTodoStatusChange(todo.id)}
              />
              <span className={textClasses}>{todo.text}</span>
            </div>
            <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
