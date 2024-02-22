import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

function Checkbox({ checked, onClick }: CheckboxProps) {
  return (
    <div className="flex items-center pr-1" onClick={onClick}>
      {checked ? (
        <div className="checkbox checked">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="h-5 w-5 text-green-400"
          />
        </div>
      ) : (
        <div className="checkbox-unchecked">
          <FontAwesomeIcon icon={faCircle} className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
