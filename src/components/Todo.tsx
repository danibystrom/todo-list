import { useState } from "react";
import "../styles/Todo.css";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

interface TodoProps {
  todo: string;
  onDelete: () => void;
}

function Todo({ todo, onDelete }: TodoProps) {
  const [done, setDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Spara ändringar
    // Exempel: updateTodoText(editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo); // Återställer till originaltexten om användaren avbryter
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  return (
    <div className={`flex items-center todo ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => setDone(!done)} />
      {isEditing ? (
        <div className="ml-2 flex items-center">
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            className="mr-2"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <>
          <span className="ml-2 todo-text" onClick={handleEdit}>
            {todo}
          </span>
          <DeleteButton onDelete={onDelete} />
        </>
      )}
    </div>
  );
}

export default Todo;
