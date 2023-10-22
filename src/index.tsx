import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Inicio from "./pages/Inicio";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/criar" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();

