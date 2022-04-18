import AdminLayout from "../layout/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/admin/About";
import Profile from "../pages/admin/Profile";

import SkillIndex from "../pages/admin/skill/SkillIndex";
import SkillForm from "../pages/admin/skill/SkillForm";

import ExperienceIndex from "../pages/admin/experience/ExperienceIndex";
import ExperienceForm from "../pages/admin/experience/ExperienceForm";

import CategoryIndex from "../pages/admin/category/CategoryIndex";
import CategoryForm from "../pages/admin/category/CategoryForm";

import PortfolioIndex from "../pages/admin/portfolio/PortfolioIndex";
import PortfolioForm from "../pages/admin/portfolio/PortfolioForm";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function RequireAuth({ children }) {
  const token = Cookies.get("token");
  return token ? children : <Navigate to={"/login"} />;
}

const AdminRoutes = [
  {
    key: "/dashboard",
    path: "/admin/dashboard",
    element: (
      <RequireAuth>
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/about",
    path: "/admin/about",
    element: (
      <RequireAuth>
        <AdminLayout>
          <About />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/profile",
    path: "/admin/profile",
    element: (
      <RequireAuth>
        <AdminLayout>
          <Profile />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/skills",
    path: "/admin/skills",
    element: (
      <RequireAuth>
        <AdminLayout>
          <SkillIndex />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/skills/create",
    path: "/admin/skills/create",
    element: (
      <RequireAuth>
        <AdminLayout>
          <SkillForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/skills/edit",
    path: "/admin/skills/edit/:id",
    element: (
      <RequireAuth>
        <AdminLayout>
          <SkillForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/experiences",
    path: "/admin/experiences",
    element: (
      <RequireAuth>
        <AdminLayout>
          <ExperienceIndex />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/experiences/create",
    path: "/admin/experiences/create",
    element: (
      <RequireAuth>
        <AdminLayout>
          <ExperienceForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/experiences/edit",
    path: "/admin/experiences/edit/:id",
    element: (
      <RequireAuth>
        <AdminLayout>
          <ExperienceForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/categories",
    path: "/admin/categories",
    element: (
      <RequireAuth>
        <AdminLayout>
          <CategoryIndex />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/categories/create",
    path: "/admin/categories/create",
    element: (
      <RequireAuth>
        <AdminLayout>
          <CategoryForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/categories/edit",
    path: "/admin/categories/edit/:id",
    element: (
      <RequireAuth>
        <AdminLayout>
          <CategoryForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/portfolios",
    path: "/admin/portfolios",
    element: (
      <RequireAuth>
        <AdminLayout>
          <PortfolioIndex />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/portfolios/create",
    path: "/admin/portfolios/create",
    element: (
      <RequireAuth>
        <AdminLayout>
          <PortfolioForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
  {
    key: "/portfolios/edit",
    path: "/admin/portfolios/edit/:id",
    element: (
      <RequireAuth>
        <AdminLayout>
          <PortfolioForm />
        </AdminLayout>
      </RequireAuth>
    ),
  },
];

export default AdminRoutes;
