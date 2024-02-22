import { useState } from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";

interface TodoProps {
  todo: string;
  onDelete: () => void;
}

function Todo({ todo, onDelete }: TodoProps) {
  const [done, setDone] = useState(false);

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={`flex items-center todo ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => setDone(!done)} />
      <span className="ml-2">{todo}</span>
      <button onClick={handleDelete} className="ml-2 text-red-600">
        Delete
      </button>
    </div>
  );
}

export default Todo;
