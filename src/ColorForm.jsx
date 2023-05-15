import React, { useState } from "react";

export default function ColorForm(props) {
  let [inputVal, setInputVal] = useState("");

  return (
    <div>
      <form>
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
