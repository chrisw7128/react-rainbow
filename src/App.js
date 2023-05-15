import "./App.css";
import React, { useState } from "react";
// Make sure to import the component we just built:
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

let DEFAULT_COLORS = [
  "violet",
  "blue",
  "lightblue",
  "green",
  "greenyellow",
  "yellow",
  "orange",
  "red",
];

export default function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const onAddColor = newColor => setColors([...colors, newColor]);

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });

  return (
    <div className="App">
      {colorMap} <ColorForm onAddColor={onAddColor} />
    </div>
  );
}
