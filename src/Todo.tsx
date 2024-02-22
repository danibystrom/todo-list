import { useState } from "react";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import "./Todo.css";

interface TodoProps {
  todo: string;
  onDelete: () => void;
}

function Todo({ todo, onDelete }: TodoProps) {
  const [done, setDone] = useState(false);

  return (
    <div className={`flex items-center todo ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => setDone(!done)} />
      <span className="ml-2">{todo}</span>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

export default Todo;
