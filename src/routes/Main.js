import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Index";
import { GlobalProvider } from "../context/GlobalContext";
import { SkillProvider } from "../context/SkillContext";

function Main(props) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <SkillProvider>
          <Routes>
            {routes.map((route) => {
              return <Route {...route} />;
            })}
            <Route path="*" element="404 Not Found" />
          </Routes>
        </SkillProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default Main;
