// ArchivedTodosPage.tsx
import { Link, useOutletContext } from "react-router-dom";
import { TodoContext } from "../AppLayout";
import TodoComponent from "../components/Todo";
import "../styles/AppLayout.css";

function ArchivedTodos() {
  const { todos, deleteTodo } = useOutletContext<TodoContext>();

  return (
    <div className="container">
      <h1 className="text-xl p-2">Archived stuff:</h1>
      {todos
        .filter((todo) => todo.isArchived)
        .map((todo, index) => (
          <TodoComponent
            key={index}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}

      <div className="flex justify-end">
        <Link to="/">
          <button className="rounded-full px-5 py-2 mt-14 mb-5 mr-5 text-slate-950 bg-white border-slate-50">
            back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ArchivedTodos;
