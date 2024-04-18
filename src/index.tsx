import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

console.log("test 123");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
