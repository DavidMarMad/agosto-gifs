import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Gif_app } from "./Gif_app";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Gif_app />
   </StrictMode>
);
