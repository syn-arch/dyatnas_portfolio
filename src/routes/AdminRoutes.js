import AdminLayout from "../layout/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/admin/About";
import Profile from "../pages/admin/Profile";

import SkillIndex from "../pages/admin/skill/SkillIndex";
import SkillCreate from "../pages/admin/skill/SkillCreate";
import SkillEdit from "../pages/admin/skill/SkillEdit";

import ExperienceIndex from "../pages/admin/experience/ExperienceIndex";
import ExperienceCreate from "../pages/admin/experience/ExperienceCreate";
import ExperienceEdit from "../pages/admin/experience/ExperienceEdit";

import CategoryIndex from "../pages/admin/category/CategoryIndex";
import CategoryCreate from "../pages/admin/category/CategoryCreate";
import CategoryEdit from "../pages/admin/category/CategoryEdit";

import PortfolioIndex from "../pages/admin/portfolio/PortfolioIndex";
import PortfolioCreate from "../pages/admin/portfolio/PortfolioCreate";
import PortfolioEdit from "../pages/admin/portfolio/PortfolioEdit";

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
        <SkillCreate />
      </AdminLayout>
    ),
  },
  {
    key: "admin/skills/edit",
    path: "/admin/skills/edit/:id",
    element: (
      <AdminLayout>
        <SkillEdit />
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
        <ExperienceCreate />
      </AdminLayout>
    ),
  },
  {
    key: "admin/experiences/edit",
    path: "/admin/experiences/edit/:id",
    element: (
      <AdminLayout>
        <ExperienceEdit />
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
        <CategoryCreate />
      </AdminLayout>
    ),
  },
  {
    key: "admin/categories/edit",
    path: "/admin/categories/edit/:id",
    element: (
      <AdminLayout>
        <CategoryEdit />
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
        <PortfolioCreate />
      </AdminLayout>
    ),
  },
  {
    key: "admin/portfolios/edit",
    path: "/admin/portfolios/edit/:id",
    element: (
      <AdminLayout>
        <PortfolioEdit />
      </AdminLayout>
    ),
  },
];

export default AdminRoutes;
