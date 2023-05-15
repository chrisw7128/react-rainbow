import React, { useState } from "react";

export default function ColorForm({ onAddColor }) {
  let [inputVal, setInputVal] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();
    onAddColor(inputVal);
    setInputVal("");
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}
