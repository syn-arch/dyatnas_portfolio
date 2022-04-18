import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./Index";
import { GlobalProvider } from "../context/GlobalContext";
import { SkillProvider } from "../context/SkillContext";
import { CategoryProvider } from "../context/CategoryContext";
import { ExperienceProvider } from "../context/ExperienceContext";
import { PortfolioProvider } from "../context/PortfolioContext";

function Main(props) {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <SkillProvider>
          <CategoryProvider>
            <ExperienceProvider>
              <PortfolioProvider>
                <Routes>
                  {routes.map((route) => {
                    return <Route {...route} />;
                  })}
                  <Route path="*" element="404 Not Found" />
                </Routes>
              </PortfolioProvider>
            </ExperienceProvider>
          </CategoryProvider>
        </SkillProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default Main;
