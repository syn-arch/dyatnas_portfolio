import AdminLayout from "../layout/Admin/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard";

const AdminRoutes = [
  {
    key: "dashboard",
    path: "/dashboard",
    element: (
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    ),
  },
];

export default AdminRoutes;
