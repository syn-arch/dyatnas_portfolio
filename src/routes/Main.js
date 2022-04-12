import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Index";

function Main(props) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return <Route {...route} />;
        })}
        <Route path="*" element="404 Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
