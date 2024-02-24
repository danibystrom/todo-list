import { useState } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function HomePage() {
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
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
      ))}
      <Link to="/archived">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          Arkiverade
        </button>
      </Link>
    </>
  );
}

export default HomePage;
