import HomeLayout from "../layout/Home/HomeLayout";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Skill from "../pages/Home/Skill";
import Experience from "../pages/Home/Experience";
import Portfolio from "../pages/Home/Portfolio";
import Contact from "../pages/Home/Contact";
import Login from "../pages/Home/Login";

const HomeRoutes = [
  {
    key: "home",
    path: "/",
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    ),
  },
  {
    key: "about",
    path: "/about",
    element: (
      <HomeLayout>
        <About />
      </HomeLayout>
    ),
  },
  {
    key: "skills",
    path: "/skills",
    element: (
      <HomeLayout>
        <Skill />
      </HomeLayout>
    ),
  },
  {
    key: "experiences",
    path: "/experiences",
    element: (
      <HomeLayout>
        <Experience />
      </HomeLayout>
    ),
  },
  {
    key: "portfolios",
    path: "/portfolios",
    element: (
      <HomeLayout>
        <Portfolio />
      </HomeLayout>
    ),
  },
  {
    key: "contact",
    path: "/contact",
    element: (
      <HomeLayout>
        <Contact />
      </HomeLayout>
    ),
  },
  {
    key: "login",
    path: "/login",
    element: <Login />,
  },
];

export default HomeRoutes;
