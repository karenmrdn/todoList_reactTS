import React, { useRef } from "react";
import styles from "./AddTodo.module.css";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formControl}>
        <label htmlFor="todo-text">Todo: </label>
        <input type="text" id="todo-text" ref={todoTextRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
