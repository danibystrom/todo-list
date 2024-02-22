import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="todos-container">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
