import { useState } from "react";
import { Outlet } from "react-router-dom"; // Importera Outlet
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/AppLayout.css";
import { Todo } from "./todos";

export interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
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

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="todos-container">
          <Outlet
            context={{ todos, addTodo, deleteTodo } satisfies TodoContext}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
