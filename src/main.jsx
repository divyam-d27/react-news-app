import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/theme/ThemeProvider.jsx";
import { NewsProvider } from "./providers/news/NewsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NewsProvider>
          <App />
        </NewsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
