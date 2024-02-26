import { useState } from "react";
import "../styles/Todo.css";
import "../styles/TodoForm.css";

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
      <div className="form-container w-full mb-10 border p-2 rounded-xl">
        <form className="flex" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="mr-2 rounded-2xl px-4 text-slate-950 bg-white border-slate-50"
          >
            +
          </button>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="All the booring stuff here..."
            className="bg-transparent rounded-xl outline-none text-white p-2 w-full"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
