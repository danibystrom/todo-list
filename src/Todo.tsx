import Checkbox from "./Checkbox";

interface TodoProps {
  todo: string;
}

function Todo({ todo }: TodoProps) {
  return (
    <div className="flex items-center">
      <div className="todo flex items-center">
        <Checkbox defaultChecked={false} />
        <span className="ml-2">{todo}</span>
      </div>
    </div>
  );
}

export default Todo;
