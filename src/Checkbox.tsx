import { CheckIcon, StopIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

function Checkbox({ defaultChecked = false }) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div onClick={() => setChecked(!checked)}>
      {checked ? (
        <div className="checkbox checked">
          <CheckIcon className="h-5 w-5" />
        </div>
      ) : (
        <div className="checkbox-unchecked">
          <StopIcon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}

export default Checkbox;
