import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./input.css";
import Inicio from "./pages/Inicio";
import Parte1 from "./pages/Parte1";
import Parte2 from "./pages/Parte2";
import Ficha from "./pages/Ficha";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Personagens from "./pages/Personagens";
import { extendTheme } from "@chakra-ui/react";
import Mestre from "./pages/Mestre";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = extendTheme({
  components: {
    Toast: {
      variants: {
        loading: {
          bgColor: "red",
        },
        info: {
          bgColor: "red",
        },
      },
    },
  },
});

const routes = [
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/criarpt1",
    element: <Parte1 />,
  },
  {
    path: "/criarpt2",
    element: <Parte2 />,
  },
  {
    path: "/ficha",
    element: <Ficha />,
  },
  {
    path: "/personagens",
    element: <Personagens />,
  },
  {
    path: "/mestre",
    element: <Mestre />,
  },
];

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
