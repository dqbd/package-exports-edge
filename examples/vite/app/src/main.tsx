import React from "react";
import ReactDOM from "react-dom/client";
import { value } from "pkg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>{value}</div>
  </React.StrictMode>
);
