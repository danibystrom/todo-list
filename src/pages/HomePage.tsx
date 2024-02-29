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

      <div className="flex justify-end">
        <Link to="/archived">
          <button className="rounded-full px-5 py-2 mt-14 mb-5 mr-5 text-slate-950 bg-white border-slate-50 ">
            archived stuff
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
