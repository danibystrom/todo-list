import { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="flex justify-center">
      <div className="form-container w-full mb-10">
        <form className="flex" onSubmit={handleSubmit}>
          <button type="submit" className="mr-2">
            +
          </button>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What to do..."
            className="border border-gray-300 rounded-lg bg-slate-500 text-white p-2 w-full"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
