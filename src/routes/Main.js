import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Index";
import { GlobalProvider } from "../context/GlobalContext";
import { SkillProvider } from "../context/SkillContext";
import { CategoryProvider } from "../context/CategoryContext";
import { ExperienceProvider } from "../context/ExperienceContext";

function Main(props) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <SkillProvider>
          <CategoryProvider>
            <ExperienceProvider>
              <Routes>
                {routes.map((route) => {
                  return <Route {...route} />;
                })}
                <Route path="*" element="404 Not Found" />
              </Routes>
            </ExperienceProvider>
          </CategoryProvider>
        </SkillProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default Main;
