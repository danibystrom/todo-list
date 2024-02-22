import { useState } from "react";
import Checkbox from "./Checkbox";
import "./Todo.css";

interface TodoProps {
  todo: string;
}

function Todo({ todo }: TodoProps) {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    setDone(!done);
  };

  return (
    <div className={`flex items-center todo ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => setDone(!done)} />
      <span className="ml-2">{todo}</span>
    </div>
  );
}

export default Todo;
