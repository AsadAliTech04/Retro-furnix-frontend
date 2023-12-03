import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);