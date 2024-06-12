import React from "react";
import { createRoot } from "react-dom/client";
import { GreetComponent } from "./greetComponent.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <GreetComponent />
  </div>
);