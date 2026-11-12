import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("Hello from Refract!");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{text}</h1>
      <p>This is your very first Refract component 🎉</p>
      <button
        onClick={() => setText("You clicked the button!")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007acc",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </div>
  );
}