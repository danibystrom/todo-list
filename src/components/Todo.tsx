import { useState } from "react";
import "../styles/Todo.css";
import { Todo } from "../todos";
import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";

interface TodoProps {
  todo: Todo;
  onDelete: () => void;
  onArchive?: () => void; // Gör onArchive valfri
}

function TodoComponent({ todo, onArchive }: TodoProps) {
  const [done, setDone] = useState(todo.isDone);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    todo.text = editedText;
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text); // Återställer till originaltexten om användaren avbryter
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(e.target.value);
  };

  const handleArchive = () => {
    if (onArchive) {
      onArchive();
    }
  };

  return (
    <div className={`flex items-center todo ${done ? "done" : ""}`}>
      <Checkbox checked={done} onClick={() => setDone(!done)} />
      {isEditing ? (
        <div className="ml-2 flex w-full">
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
            className="mr-2 font-shadows-into-light"
          />
          <div className="flex ml-auto">
            <button
              className="save-btn ml-2 text-white text-xs pr-3 font-semibold  hover:bg-[#353847] rounded px-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="cancel-btn ml-2 text-white text-xs pr-3 font-semibold  hover:bg-[#353847] rounded px-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="ml-2 todo-text" onClick={handleEdit}>
            {todo.text}
          </span>
          {onArchive && <DeleteButton onDelete={handleArchive} />}
        </>
      )}
    </div>
  );
}

export default TodoComponent;
