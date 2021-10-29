import React, { useRef } from "react";

type AddTodoProps = {
  onAddTodo: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;

    props.onAddTodo(enteredText);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo: </label>
        <input type="text" id="todo-text" ref={todoTextRef} />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
