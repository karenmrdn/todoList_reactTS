import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = { id: Math.random().toString(), text, checked: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoStatus = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    updatedTodos.sort((a, b) => +a.checked - +b.checked);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ margin: 32 }}>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onTodoStatusChange={toggleTodoStatus}
      />
    </div>
  );
};

export default App;
