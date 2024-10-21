import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ReactQueryProviders from "./libs/react-query/provider.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactQueryProviders>
  </StrictMode>
);
