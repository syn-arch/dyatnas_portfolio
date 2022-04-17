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

const AdminRoutes = [
  {
    key: "admin/dashboard",
    path: "/admin/dashboard",
    element: (
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    ),
  },
  {
    key: "admin/about",
    path: "/admin/about",
    element: (
      <AdminLayout>
        <About />
      </AdminLayout>
    ),
  },
  {
    key: "admin/profile",
    path: "/admin/profile",
    element: (
      <AdminLayout>
        <Profile />
      </AdminLayout>
    ),
  },
  {
    key: "admin/skills",
    path: "/admin/skills",
    element: (
      <AdminLayout>
        <SkillIndex />
      </AdminLayout>
    ),
  },
  {
    key: "admin/skills/create",
    path: "/admin/skills/create",
    element: (
      <AdminLayout>
        <SkillForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/skills/edit",
    path: "/admin/skills/edit/:id",
    element: (
      <AdminLayout>
        <SkillForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/experiences",
    path: "/admin/experiences",
    element: (
      <AdminLayout>
        <ExperienceIndex />
      </AdminLayout>
    ),
  },
  {
    key: "admin/experiences/create",
    path: "/admin/experiences/create",
    element: (
      <AdminLayout>
        <ExperienceForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/experiences/edit",
    path: "/admin/experiences/edit/:id",
    element: (
      <AdminLayout>
        <ExperienceForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/categories",
    path: "/admin/categories",
    element: (
      <AdminLayout>
        <CategoryIndex />
      </AdminLayout>
    ),
  },
  {
    key: "admin/categories/create",
    path: "/admin/categories/create",
    element: (
      <AdminLayout>
        <CategoryForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/categories/edit",
    path: "/admin/categories/edit/:id",
    element: (
      <AdminLayout>
        <CategoryForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/portfolios",
    path: "/admin/portfolios",
    element: (
      <AdminLayout>
        <PortfolioIndex />
      </AdminLayout>
    ),
  },
  {
    key: "admin/portfolios/create",
    path: "/admin/portfolios/create",
    element: (
      <AdminLayout>
        <PortfolioForm />
      </AdminLayout>
    ),
  },
  {
    key: "admin/portfolios/edit",
    path: "/admin/portfolios/edit/:id",
    element: (
      <AdminLayout>
        <PortfolioForm />
      </AdminLayout>
    ),
  },
];

export default AdminRoutes;
