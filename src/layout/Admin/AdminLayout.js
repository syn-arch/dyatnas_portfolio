import React from "react";
import { Sidebar, Navbar, Footer } from "./Index";

function AdminLayout(props) {
  return (
    <div className="flex p-4 bg-gray-100 min-h-screen w-full m-0">
      <Sidebar />
      <div className="content w-full">
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
