// ArchivedTodosPage.tsx
import { Link, useOutletContext } from "react-router-dom";
import { TodoContext } from "../AppLayout";
import TodoComponent from "../components/Todo";
import "../styles/AppLayout.css";

function ArchivedTodos() {
  const { todos, deleteTodo } = useOutletContext<TodoContext>();

  return (
    <div className="container">
      <h1>Archived Todos</h1>
      {todos
        .filter((todo) => todo.isArchived)
        .map((todo, index) => (
          <TodoComponent
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}

      <Link to="/">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          back
        </button>
      </Link>
    </div>
  );
}

export default ArchivedTodos;
