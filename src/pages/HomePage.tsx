import { useState } from "react";
import { Link } from "react-router-dom";
import "styles/AppLayout.css";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

function HomePage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [archivedTodos, setArchivedTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const archivedTodo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setArchivedTodos([...archivedTodos, archivedTodo]);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
      ))}
      <Link to="/archived">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          archived tasks
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
