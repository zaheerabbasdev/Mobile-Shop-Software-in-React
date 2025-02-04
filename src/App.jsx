import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar"; // Ensure this path is correct
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default App;
