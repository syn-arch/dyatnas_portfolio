import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../layout/Home/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Skill from "../pages/Home/Skill";
import Experience from "../pages/Home/Experience";
import Portfolio from "../pages/Home/Portfolio";
import Contact from "../pages/Home/Contact";

function Main(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/about"
          exact
          element={
            <HomeLayout>
              <About />
            </HomeLayout>
          }
        />
        <Route
          path="/skills"
          exact
          element={
            <HomeLayout>
              <Skill />
            </HomeLayout>
          }
        />
        <Route
          path="/experiences"
          exact
          element={
            <HomeLayout>
              <Experience />
            </HomeLayout>
          }
        />
        <Route
          path="/portfolios"
          exact
          element={
            <HomeLayout>
              <Portfolio />
            </HomeLayout>
          }
        />
        <Route
          path="/contact"
          exact
          element={
            <HomeLayout>
              <Contact />
            </HomeLayout>
          }
        />
        <Route path="*" element="404 Not Found" />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
