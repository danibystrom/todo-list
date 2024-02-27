// HomePage.tsx
import { Link, useOutletContext } from "react-router-dom";
import { TodoContext } from "../AppLayout";
import TodoComponent from "../components/Todo"; // Uppdatera importen
import TodoForm from "../components/TodoForm";
import "../styles/AppLayout.css";

function HomePage() {
  const { todos, deleteTodo, addTodo, archiveTodo } =
    useOutletContext<TodoContext>();

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} />
      {todos
        .filter((todo) => !todo.isArchived)
        .map((todo, index) => (
          <TodoComponent
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            onArchive={() => archiveTodo(todo.id)} // Lägg till onArchive
          />
        ))}

      <Link to="/archived">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          archived stuff
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
