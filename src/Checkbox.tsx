import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Checkbox({ defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div
      className="inline-block align-middle"
      onClick={() => setChecked(!checked)}
    >
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
