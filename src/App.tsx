import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = { id: Math.random().toString(), text };
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div style={{ margin: 32 }}>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
