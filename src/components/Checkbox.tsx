import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Todo.css";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

function Checkbox({ checked, onClick }: CheckboxProps) {
  return (
    <div className="flex items-center pr-1" onClick={onClick}>
      {checked ? (
        <div className="checkbox-checked">
          <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4" />
        </div>
      ) : (
        <div className="checkbox-unchecked">
          <FontAwesomeIcon icon={faCircle} className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
