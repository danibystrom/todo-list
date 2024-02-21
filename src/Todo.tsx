import Checkbox from "./Checkbox";

interface TodoProps {
  todo: string;
}

function Todo({ todo }: TodoProps) {
  return (
    <div className="flex items-center">
      {" "}
      {/* Använd flex och items-center för att centrera innehållet vertikalt */}
      <div className="todo flex items-center">
        {" "}
        {/* Använd flex för att lägga checkbox och todo bredvid varandra */}
        <Checkbox defaultChecked={false} />
        <span className="ml-2">{todo}</span>{" "}
        {/* Använd ml-2 för att lägga till lite mellanrum mellan checkbox och todo */}
      </div>
    </div>
  );
}

export default Todo;
