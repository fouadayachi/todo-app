import React, { useState } from "react";

export default function AddTask({ handleAddTask }) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="add-task">
      <div className="check-parent">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onClick={() => {
              setChecked(!checked);
            }}
            className="check"
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter" && text.trim().length > 0) {
            handleAddTask(text);
            setText("");
          }
        }}
      />
    </div>
  );
}
