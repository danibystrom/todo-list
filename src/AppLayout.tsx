import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Todo } from "./todos";

export interface TodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  archiveTodo: (id: string) => void;
}

function AppLayout() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.random().toString(36).substr(2, 9),
        text,
        isDone: false,
        isArchived: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const archiveTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isArchived: true } : todo
      )
    );
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
