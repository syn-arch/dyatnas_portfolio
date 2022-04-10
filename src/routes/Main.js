import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "../layout/Home/HomeLayout";
import Home from "../pages/Home/Home";

function Main(props) {
  return (
    <BrowserRouter>
      <Fragment>
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
          <Route path="*" element="404 Not Found" />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default Main;
