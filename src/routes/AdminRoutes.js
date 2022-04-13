import AdminLayout from "../layout/Admin/AdminLayout";
import About from "../pages/Admin/About";
import Dashboard from "../pages/Admin/Dashboard";
import SkillIndex from "../pages/Admin/skills/SkillIndex";

const AdminRoutes = [
  {
    key: "dashboard",
    path: "/admin/dashboard",
    element: (
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    ),
  },
  {
    key: "about",
    path: "/admin/about",
    element: (
      <AdminLayout>
        <About />
      </AdminLayout>
    ),
  },
  {
    key: "skills",
    path: "/admin/skills",
    element: (
      <AdminLayout>
        <SkillIndex />
      </AdminLayout>
    ),
  },
];

export default AdminRoutes;
