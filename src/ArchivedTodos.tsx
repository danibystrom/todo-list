import { Link } from "react-router-dom";
import "./AppLayout.css";

interface ArchivedTodosProps {
  archivedTodos: string[];
}

function ArchivedTodos({ archivedTodos }: ArchivedTodosProps) {
  return (
    <div className="container">
      <h1>Archived Todos</h1>
      <ul>
        {archivedTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <Link to="/">
        <button className="mr-2 rounded-2xl px-4 py-1 mt-5 text-slate-950 bg-white border-slate-50 ">
          back
        </button>
      </Link>
    </div>
  );
}

export default ArchivedTodos;
