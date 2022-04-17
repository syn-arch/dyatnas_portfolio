import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Index";
import GlobalContext, { GlobalProvider } from "../context/GlobalContext";

function Main(props) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          {routes.map((route) => {
            return <Route {...route} />;
          })}
          <Route path="*" element="404 Not Found" />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default Main;
