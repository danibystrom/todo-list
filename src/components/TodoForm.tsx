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
    // Kontrollerar om todo är tom
    if (todo.trim() !== "") {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="form-container w-full mb-10 border p-2 rounded-xl">
        <form className="flex" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="input-btn mr-2 h-10 text-slate-950 bg-white border-slate-50 text-xl"
          >
            +
          </button>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add stuff here..."
            className="bg-transparent rounded-xl outline-none text-white p-2 w-full"
          />
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
