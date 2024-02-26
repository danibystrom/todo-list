// AppLayout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Todo } from "./todos";

export interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  archiveTodo: (id: string) => void; // Lägg till funktion för att arkivera todos
}

function AppLayout() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(36).substr(2, 9),
        text,
        isDone: false,
        isArchived: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const archiveTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isArchived: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="todos-container">
          <Outlet context={{ todos, addTodo, deleteTodo, archiveTodo }} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
