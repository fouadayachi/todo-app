import React, { useState } from "react";

export default function Checkbox({ onHandleClick, task }) {
  const [checked, setChecked] = useState(task.completed);
  return (
    <div className="check-parent">
      <label className="custom-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {onHandleClick(task.idTask);setChecked(!checked);}}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

// {/* <input
//   type="checkbox"
//   checked={checked}
//   onClick={() => {
//     setChecked(!checked);
//     onHandleClick(task.idTask);
//   }}
//   className="check"
// />; */}
