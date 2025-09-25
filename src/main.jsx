import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

// Ensure favicon points to the correct base path on GitHub Pages
const ensureFavicon = () => {
  const href = `${import.meta.env.BASE_URL}favicon.png`;
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    document.head.appendChild(link);
  }
  if (link.getAttribute('href') !== href) {
    link.setAttribute('href', href);
  }
};

ensureFavicon();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
