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
    <div
      className={`flex items-center todo ${done ? "done" : ""}`}
      onClick={handleClick}
    >
      <div className="">
        <Checkbox defaultChecked={false} />
        <span className="ml-2">{todo}</span>
      </div>
    </div>
  );
}

export default Todo;
