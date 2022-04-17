import HomeLayout from "../layout/home/HomeLayout";
import Home from "../pages/home/Home";
import About from "../pages/home/About";
import Skill from "../pages/home/Skill";
import Experience from "../pages/home/Experience";
import Portfolio from "../pages/home/Portfolio";
import Contact from "../pages/home/Contact";
import Login from "../pages/home/Login";

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
