import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="todos-container">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
          ))}
          <Link to="/archivedtodos">
            <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
              Arkiverade
            </button>
          </Link>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
